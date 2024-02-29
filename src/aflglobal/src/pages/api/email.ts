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
    const id = req.body.DataItem.Id;
    const name = req.body.DataItem.Name;
    const version = req.body.DataItem.Version;
    const userName = req.body.UserName;
    const lang = req.body.DataItem.Language;
    const url = `https://xmc-americafujifac2-aflglobal-dev.sitecorecloud.io/sitecore/shell/Applications/Content%20Manager/default.aspx?id=${id}&la=en&fo=${id}`;
    const text = 'Approval required for below PDP Item';
    const mailBody = `Hi,

    ${text}

    <b>Item ID:</b> ${id}
    <b>Item Name:</b> ${name}
    <b>Item URL:</b> <a href =${url}>Click here</a>
    Item Language: ${lang}
    Item Version: ${version}
    User Name: ${userName}
    
    Thank you!`;

    await sendEmail('pawan.tyagi@altudo.co', 'Test Email', mailBody);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
