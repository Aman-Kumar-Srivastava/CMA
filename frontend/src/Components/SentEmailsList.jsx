import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SentEmailsList = () => {
    const [sentEmails, setSentEmails] = useState([]);

    useEffect(() => {
        fetchSentEmails();
    }, []);

    const fetchSentEmails = async () => {
        try {
            const response = await axios.get('http://localhost:8080/email/sentEmails');
            setSentEmails(response.data);
        } catch (error) {
            console.error('Error fetching sent emails:', error);
        }
    };

    return (
        <div>
            <h2>Sent Emails</h2>
            <ul>
                {sentEmails.map((email, index) => (
                    <li key={index}>
                        <p>To: {email.to}</p>
                        <p>Subject: {email.subject}</p>
                        <p>Body: {email.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SentEmailsList;
