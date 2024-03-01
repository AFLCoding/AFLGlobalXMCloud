import { NextApiRequest, NextApiResponse } from 'next';

export function verifyBasicAuth(req: NextApiRequest, res: NextApiResponse): boolean {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith('Basic ')) {
        res.status(401).setHeader('WWW-Authenticate', 'Basic realm="My App"').end();
        return false;
    }

    const base64Credentials = authorization.split(' ')[1];
    const decodedCredentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
    const [username, password] = decodedCredentials.split(':');
    console.log("name: " + username);
    console.log("password: " + password);
    if (username === process.env.AUTH_USERNAME && password === process.env.AUTH_PASSWORD) {
        return true;
    } else {
        res.status(401).send('Invalid username or password');
        return false;
    }
}

export function bearerAuth(req: NextApiRequest, res: NextApiResponse): boolean {
    const authorization = req.headers.authorization;
    const expectedBearerToken = process.env.SENDGRID_API_KEY;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        res.status(401).end('Unauthorized');
        return false;
    }

    const providedBearerToken = authorization.split(' ')[1];
    if (providedBearerToken !== expectedBearerToken) {
        res.status(401).end('Unauthorized');
        return false;
    }

    return true;
}