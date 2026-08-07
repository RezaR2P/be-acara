import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import ejs from 'ejs';
import {
  EMAIL_SMTP_SERVICE_NAME,
  EMAIL_SMTP_HOST,
  EMAIL_SMTP_PORT,
  EMAIL_SMTP_SECURE,
  EMAIL_SMTP_USER,
  EMAIL_SMTP_PASS,
} from '../../utils/env';
import path from 'path';

const transporter = nodemailer.createTransport({
  service: EMAIL_SMTP_SERVICE_NAME,
  host: EMAIL_SMTP_HOST,
  port: EMAIL_SMTP_PORT,
  secure: EMAIL_SMTP_SECURE,
  auth: {
    user: EMAIL_SMTP_USER,
    pass: EMAIL_SMTP_PASS,
  },
  requireTLS: true,
} as SMTPTransport.Options);

export interface ISendMail {
  from: string;
  to: string;
  subject: string;
  html: string;
}

export const sendMail = async ({ from, to, subject, html }: ISendMail) => {
  const result = await transporter.sendMail({
    from,
    to,
    subject,
    html,
  });
  return result;
};

export const renderMailHtml = async (template: string, data: any) => {
  const content = await ejs.renderFile(
    path.join(__dirname, `./templates/${template}.ejs`),
    data
  );
  return content;
};
