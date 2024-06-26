import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EmailForm.css'

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
            await axios.post('http://localhost:8080/email/sendEmailToVendors', selectedVendorsData, {
                params: { templateMessage }
            });
            console.log('Email sent to selected vendors');
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <div className="email-form-container">
            <form onSubmit={handleSubmit}>
                <textarea placeholder="Template message" value={templateMessage} onChange={(e) => setTemplateMessage(e.target.value)} />
                <div className="checkbox-group">
                    {vendors.map((vendor) => (
                        <div key={vendor.id}>
                            <input type="checkbox" id={vendor.id} checked={selectedVendors.includes(vendor.id)} onChange={() => handleCheckboxChange(vendor.id)} />
                            <label htmlFor={vendor.id}>{vendor.name}</label>
                        </div>
                    ))}
                </div>
                <button className='email-send-btn' type="submit">Send Email</button>
            </form>
        </div>
    );
};

export default EmailForm;
