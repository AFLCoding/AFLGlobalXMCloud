import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const clientId = "3MVG9FS3IyroMOh6QWrDew_u1lqVk9QVOS54GiL_hr4MZZpkKGnyMuspsRDmJpzjyDGZY.DDof3_lQooHUcBL";
    const baseURL = "https://afl--marketing.sandbox.my.salesforce.com";
    const redirectURL = "https://afl--marketing.sandbox.my.salesforce.com/services/apexrest/code/extraction";

    const startLogin = async () => {
        try {
            const encodedCredentials = btoa(`${username}:${password}`);
            const response = await fetch(`${baseURL}/services/oauth2/authorize`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${encodedCredentials}`,
                },
                body: `response_type=code_credentials&client_id=${clientId}&redirect_uri=${redirectURL}`
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const authorizeResponse = await response.json();
            await doCodeExchange(authorizeResponse);
        } catch (error) {
            console.error('Error during login:', error);
            // Handle error
        }
    };

    const doCodeExchange = async (authorizeResponse:any) => {
        try {
            const response = await fetch(`${authorizeResponse.sfdc_community_url}/services/oauth2/token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `code=${authorizeResponse.code}&grant_type=authorization_code&client_id=${clientId}&redirect_uri=${redirectURL}`
            });

            if (!response.ok) {
                throw new Error('Code exchange failed');
            }

            const tokenResponse = await response.json();
            await getUserInfo(tokenResponse.access_token, authorizeResponse.sfdc_community_url);
        } catch (error) {
            console.error('Error during code exchange:', error);
            // Handle error
        }
    };

    const getUserInfo = async (accessToken:any, userInfoBaseURL:any) => {
        try {
            const response = await fetch(`${userInfoBaseURL}/services/oauth2/userinfo`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user info');
            }

            const userInfo = await response.json();
            console.log(userInfo);
            // Update UI or state with user info
        } catch (error) {
            console.error('Error fetching user info:', error);
            // Handle error
        }
    };

    return (
        <div>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button onClick={startLogin}>Login</button>
        </div>
    );
};

export default Login;