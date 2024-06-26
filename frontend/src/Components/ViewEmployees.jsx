import React, { useEffect, useState } from "react";
import axios from "axios";
import './ViewEmployees.css'

const ViewEmployees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/employees")
      .then(response => {
        console.log('Employee fetched:', response.data);
        setEmployees(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 className="employee-table-title">All Employees</h1>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Designation</th>
            <th>CTC</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.designation}</td>
              <td>{employee.ctc}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEmployees;