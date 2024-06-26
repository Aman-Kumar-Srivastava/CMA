import React, { useEffect, useState } from "react";
import axios from "axios";
import './ViewVendors.css'

const ViewVendors = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/vendors")
      .then(response => {
        setVendors(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 className="vendor-table-title">All Vendors</h1>
      <table className="vendor-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>UPI</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor, index) => (
            <tr key={index}>
              <td>{vendor.name}</td>
              <td>{vendor.email}</td>
              <td>{vendor.upi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default ViewVendors;