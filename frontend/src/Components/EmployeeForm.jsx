import React, { useState } from 'react';
import axios from 'axios';

const EmployeeForm = () => {
    const [employee, setEmployee] = useState({ name: '', designation: '', ctc: '', email: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/employees', employee);
            console.log('Employee created:', response.data);
            // Optionally, reset form fields or show success message
        } catch (error) {
            console.error('Error creating employee:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={employee.name} onChange={(e) => setEmployee({ ...employee, name: e.target.value })} />
            <input type="text" placeholder="Designation" value={employee.designation} onChange={(e) => setEmployee({ ...employee, designation: e.target.value })} />
            <input type="number" placeholder="CTC" value={employee.ctc} onChange={(e) => setEmployee({ ...employee, ctc: e.target.value })} />
            <input type="email" placeholder="Email" value={employee.email} onChange={(e) => setEmployee({ ...employee, email: e.target.value })} />
            <button type="submit">Create Employee</button>
        </form>
    );
};

export default EmployeeForm;
