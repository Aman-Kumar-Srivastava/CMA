import React, { useState } from 'react';
import axios from 'axios';

const VendorForm = () => {
    const [vendor, setVendor] = useState({ name: '', email: '', upi: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/vendors', vendor);
            console.log('Vendor created:', response.data);
            // Optionally, reset form fields or show success message
        } catch (error) {
            console.error('Error creating vendor:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={vendor.name} onChange={(e) => setVendor({ ...vendor, name: e.target.value })} />
            <input type="email" placeholder="Email" value={vendor.email} onChange={(e) => setVendor({ ...vendor, email: e.target.value })} />
            <input type="text" placeholder="UPI" value={vendor.upi} onChange={(e) => setVendor({ ...vendor, upi: e.target.value })} />
            <button type="submit">Create Vendor</button>
        </form>
    );
};

export default VendorForm;
