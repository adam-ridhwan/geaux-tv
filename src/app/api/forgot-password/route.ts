import crypto from 'crypto';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { getUser } from '@/lib/user/getUser';
import { updateUser } from '@/lib/user/updateUser';

const { NEXT_PUBLIC_EMAIL_HOST, NEXT_PUBLIC_EMAIL_PORT, NEXT_PUBLIC_EMAIL_USERNAME, NEXT_PUBLIC_EMAIL_PASSWORD } =
  process.env;

export async function POST(request: Request) {
  const { email } = await request.json();

  // Check if email exists in your database.
  const user = await getUser(email);
  if (!user) throw new Error('User not found');

  // Generate a reset token
  const resetToken = crypto.randomBytes(32).toString('hex');

  /*
   * - Encrypt the token before storing it in the database
   *    * This is to prevent someone with access to the database to see the token
   *
   * - Set an expiry time for the token
   */
  const encryptedResetToken = crypto.createHash('sha256').update(resetToken).digest('hex');
  const passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes

  // add the new token and expiry time to the user in the database below
  await updateUser(email, {
    resetToken: encryptedResetToken,
    resetTokenExpires: passwordResetExpires,
  });

  // Check if nodemailer environment variables are properly set
  if (
    !NEXT_PUBLIC_EMAIL_HOST ||
    !NEXT_PUBLIC_EMAIL_PORT ||
    !NEXT_PUBLIC_EMAIL_USERNAME ||
    !NEXT_PUBLIC_EMAIL_PASSWORD
  ) {
    throw new Error('Environment variables for nodemailer are not properly set!');
  }

  // Setup nodemailer
  let transporter = nodemailer.createTransport({
    host: NEXT_PUBLIC_EMAIL_HOST!,
    port: parseInt(NEXT_PUBLIC_EMAIL_PORT!, 10),
    auth: {
      user: NEXT_PUBLIC_EMAIL_USERNAME!,
      pass: NEXT_PUBLIC_EMAIL_PASSWORD!,
    },
  });

  // Send email
  try {
    await transporter.sendMail({
      from: 'info@geauxnet.com',
      to: email,
      subject: 'Password Reset',
      text: `Click the following link to reset your password: http://localhost:3000/reset-password/${resetToken}`,
    });
    return NextResponse.json({ message: 'Email sent' });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json({ message: 'Failed to send email' });
  }
}
