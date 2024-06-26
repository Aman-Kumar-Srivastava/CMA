import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmailForm = () => {
    const [vendors, setVendors] = useState([]);
    const [selectedVendors, setSelectedVendors] = useState([]);
    const [templateMessage, setTemplateMessage] = useState('');

    useEffect(() => {
        fetchVendors();
    }, []);

    const fetchVendors = async () => {
        try {
            const response = await axios.get('http://localhost:8080/vendors');
            setVendors(response.data);
        } catch (error) {
            console.error('Error fetching vendors:', error);
        }
    };

    const handleCheckboxChange = (vendorId) => {
        const isChecked = selectedVendors.includes(vendorId);
        if (isChecked) {
            setSelectedVendors(selectedVendors.filter(id => id !== vendorId));
        } else {
            setSelectedVendors([...selectedVendors, vendorId]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const selectedVendorsData = vendors.filter(vendor => selectedVendors.includes(vendor.id));
            await axios.post('http://localhost:8080/api/email/sendEmailToVendors', selectedVendorsData, {
                params: { templateMessage }
            });
            console.log('Email sent to selected vendors');
            // Optionally, reset form fields or show success message
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea placeholder="Template message" value={templateMessage} onChange={(e) => setTemplateMessage(e.target.value)} />
                <div>
                    {vendors.map(vendor => (
                        <div key={vendor.id}>
                            <input type="checkbox" id={vendor.id} checked={selectedVendors.includes(vendor.id)} onChange={() => handleCheckboxChange(vendor.id)} />
                            <label htmlFor={vendor.id}>{vendor.name}</label>
                        </div>
                    ))}
                </div>
                <button type="submit">Send Email</button>
            </form>
        </div>
    );
};

export default EmailForm;
