import React, { useState } from 'react';
import axios from 'axios';

const VendorForm = () => {
    const [vendor, setVendor] = useState({ name: '', email: '', upi: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/vendors', vendor);
            console.log('Vendor created:', response.data);
        } catch (error) {
            console.error('Error creating vendor:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container box" >
            <div className="form-row text-input">
                <label className="form-label " htmlFor="name">Name</label>
                <input className="form-input textfield" type="text" id="name" placeholder="Name" value={vendor.name} onChange={(e) => setVendor({ ...vendor, name: e.target.value })} />
            </div>
            <div className="form-row text-input">
                <label className="form-label" htmlFor="email">Email</label>
                <input className="form-input textfield" type="email" id="email" placeholder="Email" value={vendor.email} onChange={(e) => setVendor({ ...vendor, email: e.target.value })} />
            </div>
            <div className="form-row text-input">
                <label className="form-label" htmlFor="upi">UPI</label>
                <input className="form-input textfield" type="text" id="ctc" placeholder="UPI" value={vendor.upi} onChange={(e) => setVendor({ ...vendor, upi: e.target.value })} />
            </div>
            <button className="form-button " type="submit">Create Vendor</button>

        </form>
    );
};

export default VendorForm;
