
const SalesforceClientId = "3MVG9FS3IyroMOh6QWrDew_u1lqVk9QVOS54GiL_hr4MZZpkKGnyMuspsRDmJpzjyDGZY.DDof3_lQooHUcBL";
const SalesforceClientSecret = "A49C6FC81F8668F49CE4B172B0789E7FBF8C627393F66B9B187277DD65E89D4C";
const SalesforceClientToken = "gTDBda2P0ZPTWUTllJdQS5dB";
const SalesforceClientDomain = "https://afl--stagefull.my.salesforce.com/services/oauth2/token";
const username = "altudo@aflglobal.com.stagefull";
const password = "Alt4CaseInt2022"

// components/SalesforceData.tsx

import { useEffect, useState } from 'react';
// import { getOAuth2Token, SalesforceCredentials } from '../utils/salesforce'; // Import the getOAuth2Token function and SalesforceCredentials type

export interface SalesforceCredentials {
    clientId: string;
    clientSecret: string;
    username: string;
    password: string;
    securityToken: string;
}
export async function getOAuth2Token(credentials: SalesforceCredentials): Promise<string> {
    // Implementation...
}

const SalesforceData = () => {
    const [salesforceData, setSalesforceData] = useState<any[]>([]); // Adjust the type according to the structure of your Salesforce data

    useEffect(() => {
        const fetchSalesforceData = async () => {
            try {
                // Replace with your actual Salesforce credentials
                const credentials: SalesforceCredentials = {
                    clientId: SalesforceClientId,
                    clientSecret: SalesforceClientSecret,
                    username: username,
                    password: password,
                    securityToken: SalesforceClientToken,
                };

                const accessToken = await getOAuth2Token(credentials);

                // Make a request to Salesforce API with the access token
                const response = await fetch('https://afl--stagefull.my.salesforce.com/services/data/v52.0/query?q=SELECT+Id,Name+FROM+Account', {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch Salesforce data');
                }

                const data = await response.json();
                setSalesforceData(data.records);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSalesforceData();
    }, []);

    return (
        <div>
            <h2>Salesforce Data</h2>
            <ul>
                {salesforceData.map(record => (
                    <li key={record.Id}>{record.Name}</li>
                    // Render additional fields as needed
                ))}
            </ul>
        </div>
    );
};

export default SalesforceData;
