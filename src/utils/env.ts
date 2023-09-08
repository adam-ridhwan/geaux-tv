import { cleanEnv, str } from 'envalid';

const env = cleanEnv(process.env, {
  NEXT_PUBLIC_NODE_ENV: str(),
  MONGODB_URI: str(),
  MONGODB_DATABASE: str(),
  MONGODB_CHANNELS_COLLECTION: str(),
  MONGODB_USERS_COLLECTION: str(),
  NEXTAUTH_SECRET: str(),
  GOOGLE_SECRET: str(),
  GOOGLE_ID: str(),
  NEXT_PUBLIC_EMAIL_HOST: str(),
  NEXT_PUBLIC_EMAIL_PORT: str(),
  NEXT_PUBLIC_EMAIL_USERNAME: str(),
  NEXT_PUBLIC_EMAIL_PASSWORD: str(),
});

export default env;
