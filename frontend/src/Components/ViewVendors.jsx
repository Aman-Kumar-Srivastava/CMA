// pages/vendors.js - Page to display all vendors
import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewVendors = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/vendors")
      .then(response => {
        setVendors(response.data);
      })
      .catch(error => {
        console.error(error);
        // Handle error
      });
  }, []);

  return (
    <div>
      <h1>All Vendors</h1>
      {vendors.map((vendor, index) => (
        <div key={index}>
          <h3>{vendor.name}</h3>
          <p>Category: {vendor.category}</p>
          <p>Location: {vendor.location}</p>
          <p>Email: {vendor.email}</p>
        </div>
      ))}
    </div>
  );
};

export default ViewVendors;