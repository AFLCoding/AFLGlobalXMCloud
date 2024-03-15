import sgMail, { MailDataRequired } from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

import { SENDGRID_KEY, SENDGRID_SENDER_EMAIL, templateIDs } from '../../utils/contants';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method !== 'POST') {
            return res.status(405).json({ error: 'Method not allowed, please use POST' });
        }
        const { to, subject, params, type, attachments } = req.body;
        const key = SENDGRID_KEY;
        const templateId = type ? templateIDs[type] : templateIDs['DEFAULT'];
        const from = SENDGRID_SENDER_EMAIL;
        const dynamicTemplateData = params;

        if (!to || !from) {
            return res.status(422).json({ error: 'Missing required params' });
        }

        sgMail.setApiKey(key);

        const msg: MailDataRequired = {
            to,
            from,
            subject,
            templateId,
            dynamicTemplateData,
            attachments,
        };

        //Validate if to and from exist
        const mail = await sgMail.send(msg);

        if (mail) {
            return res.status(200).json({ success: true, message: 'Email sent successfully', mail });
        }
        return res.status(500).json({ success: false, message: 'Error sending email' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error });
    }
}