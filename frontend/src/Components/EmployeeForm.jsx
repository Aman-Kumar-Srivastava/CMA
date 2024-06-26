import React, { useState } from 'react';
import axios from 'axios';
import './EmployeeForm.css'

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({ name: '', designation: '', ctc: '', email: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/employees', employee);
      console.log('Employee created:', response.data);
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container box" >
      <div className="form-row text-input">
        <label className="form-label " htmlFor="name">Name</label>
        <input className="form-input textfield" type="text" id="name" placeholder="Name" value={employee.name} onChange={(e) => setEmployee({ ...employee, name: e.target.value })} />
      </div>
      <div className="form-row text-input">
        <label className="form-label" htmlFor="designation">Designation</label>
        <input className="form-input textfield" type="text" id="designation" placeholder="Designation" value={employee.designation} onChange={(e) => setEmployee({ ...employee, designation: e.target.value })} />
      </div>
      <div className="form-row text-input">
        <label className="form-label" htmlFor="ctc">CTC</label>
        <input className="form-input textfield" type="number" id="ctc" placeholder="CTC" value={employee.ctc} onChange={(e) => setEmployee({ ...employee, ctc: e.target.value })} />
      </div>
      <div className="form-row text-input">
        <label className="form-label" htmlFor="email">Email</label>
        <input className="form-input textfield" type="email" id="email" placeholder="Email" value={employee.email} onChange={(e) => setEmployee({ ...employee, email: e.target.value })} />
      </div>
      <button className="form-button " type="submit">Create Employee</button>

    </form>
  );
};

export default EmployeeForm;
