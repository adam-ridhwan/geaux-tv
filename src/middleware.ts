export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/account/change-password', '/account/profile', '/account/reset-password', '/account/update-email'],
};
