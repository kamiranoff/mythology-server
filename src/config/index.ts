import * as dotenv from 'dotenv';

dotenv.config();

export const ENV_KEYS = {
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_PORT:  process.env.POSTGRES_PORT,
  POSTGRES_USER:  process.env.POSTGRES_USER,
  POSTGRES_PASSWORD:  process.env.POSTGRES_PASSWORD,
  POSTGRES_DATABASE:  process.env.POSTGRES_DATABASE,
  AUTH0_ISSUER_URL: process.env.AUTH0_ISSUER_URL,
  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE,
  PORT: process.env.PORT,
}
