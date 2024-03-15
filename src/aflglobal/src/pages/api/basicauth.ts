import { NextApiRequest, NextApiResponse } from 'next';
import Globalservice from '../../service/Globalservice';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (!Globalservice.verifyBasicAuth(req, res)) {
        return; // Abort if not authorized
    }

    // Your API logic goes here
    res.status(200).json({ message: 'Welcome to the protected API endpoint!' });
}