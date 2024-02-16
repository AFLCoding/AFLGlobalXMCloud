import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
export const sendEmail = async (to: string, subject: string, text: string) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');
  const msg = { to, from: 'gunasekaran.s@altudo.co', subject, text };
  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(error);
  }
};
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(JSON.stringify(req.body));
    await sendEmail('pawan.tyagi@altudo.co', 'Test Email', 'This is a test email from Next.js!');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
