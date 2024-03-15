import { NextApiRequest, NextApiResponse } from 'next';
export default function bearerAuth(req: NextApiRequest, res: NextApiResponse): boolean {
  const authorization = req.headers.authorization;
  const expectedBearerToken = process.env.SENDGRID_API_KEY;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    res.status(401).end('Unauthorized 1');
    return false;
  }

  const providedBearerToken = authorization.split(' ')[2];
  console.log(providedBearerToken);
  console.log(expectedBearerToken);
  if (providedBearerToken !== expectedBearerToken) {
    res.status(401).end('Unauthorized 2');
    return false;
  }
  res.status(200).json({ message: 'Welcome to the protected API endpoint!' });
  return true;
}
