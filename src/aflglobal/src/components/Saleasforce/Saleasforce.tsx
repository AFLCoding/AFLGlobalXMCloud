
const SalesforceClientId = "3MVG9FS3IyroMOh6QWrDew_u1lqVk9QVOS54GiL_hr4MZZpkKGnyMuspsRDmJpzjyDGZY.DDof3_lQooHUcBL";
const SalesforceClientSecret = "A49C6FC81F8668F49CE4B172B0789E7FBF8C627393F66B9B187277DD65E89D4C";
//const SalesforceClientToken = "gTDBda2P0ZPTWUTllJdQS5dB";
const SalesforceClientDomain = "https://afl--stagefull.my.salesforce.com/services/oauth2/token";
const uname = "altudo@aflglobal.com.stagefull";
const pass = "Alt4CaseInt2022"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SalesforceData: React.FC = () => {
    const [salesforceData, setSalesforceData] = useState<any[]>([]);

    useEffect(() => {
        const fetchDataFromSalesforce = async () => {
            try {
                const accessToken = await authenticateWithSalesforce();
                const data = await fetchData(accessToken);
                setSalesforceData(data.records);
            } catch (error) {
                console.error('Error fetching data from Salesforce:', error);
            }
        };

        fetchDataFromSalesforce();
    }, []);

    const authenticateWithSalesforce = async () => {
        const clientId = SalesforceClientId;
        const clientSecret = SalesforceClientSecret;
        const username = uname;
        const password = pass;
        const securityToken = 'yourSecurityToken';

        const response = await axios.post(SalesforceClientDomain, null, {
            params: {
                grant_type: 'password',
                client_id: clientId,
                client_secret: clientSecret,
                username: username,
                password: password + securityToken,
            },
        });

        return response.data.access_token;
    };

    const fetchData = async (accessToken: string) => {
        const response = await axios.get('https://afl--stagefull.my.salesforce.com/services/data/v52.0/query?q=SELECT+Id,Name+FROM+YourObject', {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return response.data;
    };

    return (
        <div>
            <h2>Salesforce Data</h2>
            <ul>
                {salesforceData.map((item) => (
                    <li key={item.Id}>{item.Name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SalesforceData;

