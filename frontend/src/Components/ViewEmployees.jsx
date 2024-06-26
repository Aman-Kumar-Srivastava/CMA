import React, { useEffect, useState } from "react";
import axios from "axios";

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
        // Handle error
      });
  }, []);

  return (
    <div>
      <h1>All Employees</h1>
      {employees.map((employee, index) => (
        <div key={index}>
          <h3>{employee.name}</h3>
          <p>Designation: {employee.designation}</p>
          <p>CTC: {employee.ctc}</p>
          <p>Email: {employee.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewEmployees;