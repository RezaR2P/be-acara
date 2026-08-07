import dotenv from 'dotenv';
dotenv.config();

export const DATABASE_URL: string = process.env.DATABASE_URL || '';
export const SECRET: string = process.env.SECRET || '';

// Memeriksa string "true" secara eksplisit agar menghasilkan boolean murni
export const EMAIL_SMTP_SECURE: boolean =
  process.env.EMAIL_SMTP_SECURE === 'true';

export const EMAIL_SMTP_PASS: string = process.env.EMAIL_SMTP_PASS || '';
export const EMAIL_SMTP_USER: string = process.env.EMAIL_SMTP_USER || '';

// Menggunakan tipe data primitif number
export const EMAIL_SMTP_PORT: number =
  Number(process.env.EMAIL_SMTP_PORT) || 465;

export const EMAIL_SMTP_HOST: string = process.env.EMAIL_SMTP_HOST || '';
export const EMAIL_SMTP_SERVICE_NAME: string =
  process.env.EMAIL_SMTP_SERVICE_NAME || '';

export const CLIENT_HOST: string =
  process.env.CLIENT_HOST || 'http://localhost:3001';
