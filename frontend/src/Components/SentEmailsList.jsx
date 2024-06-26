import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SentEmailsList.css'

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
            <h1 className="email-table-title">All Emails</h1>
            <table className="email-table">
                <thead>
                    <tr>
                        <th>Vendor Email Id</th>
                        <th>Email Message</th>
                    </tr>
                </thead>
                <tbody>
                    {sentEmails.map((email, index) => (
                        <tr key={index}>
                            <td>{email.vendorEmailId}</td>
                            <td>{email.emailMessage}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SentEmailsList;
