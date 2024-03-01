import { NextApiRequest, NextApiResponse } from 'next';
import sgMail from '@sendgrid/mail';
// import { verifyBasicAuth } from 'Util';
import { bearerAuth } from 'Util';

function createHtmlContent(
  text: string,
  id: string,
  name: string,
  url: string,
  lang: string,
  version: string,
  userName: string
): string {
  return `
    <p>Hi,</p>
    <p>${text}</p>
    <ul>
      <li>Item ID: ${id}</li>
      <li>Item Name: ${name}</li>
      <li>
        Item URL: <a href="${url}" rel="noopener noreferrer" target="_blank">Click here</a>
      </li>
      <li>Item Language: ${lang}</li>
      <li>Item Version: ${version}</li>
      <li>User Name: ${userName}</li>
    </ul>
    <p>Thank you!</p>
  `;
}

export const sendEmail = async (to: string, subject: string, htmlContent: string) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');
  const msg = {
    to,
    from: 'gunasekaran.s@altudo.co',
    subject,
    html: htmlContent, // Use html instead of text
  };
  try {
    await sgMail.send(msg);
    console.log(`Email sent to ${to}`);
  } catch (error) {
    console.error(error);
  }
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (!bearerAuth(req, res)) {
    return; // Abort if not authorized
  }
  try {
    console.log(JSON.stringify(req.body));
    const id = req.body.DataItem.Id;
    const name = req.body.DataItem.Name;
    const version = req.body.DataItem.Version;
    const userName = req.body.UserName;
    const lang = req.body.DataItem.Language;
    const url = `https://xmc-americafujifac2-aflglobal-dev.sitecorecloud.io/sitecore/shell/Applications/Content%20Manager/default.aspx?id=${id}&la=en&fo=${id}`;
    const text = 'Approval required for below PDP Item';
    const mailBody = createHtmlContent(text, id, name, url, lang, version, userName);

    await sendEmail('pawan.tyagi@altudo.co', 'Test Email', mailBody);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
