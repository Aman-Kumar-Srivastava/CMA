import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployeeForm from './Components/EmployeeForm';
import VendorForm from './Components/VendorForm';
import EmailForm from './Components/EmailForm';
import SentEmailsList from './Components/SentEmailsList';
import EmployeesList from './Components/ViewEmployees';
import VendorsList from './Components/ViewVendors';

const App = () => {
    return (
        <Router>
            <div>
                <nav className="navbar">
                    <ul>
                        <li><Link to="/employees">Create Employee</Link></li>
                        <li><Link to="/vendors">Create Vendor</Link></li>
                        <li><Link to="/send-email">Send Email</Link></li>
                        <li><Link to="/sent-emails">Sent Emails</Link></li>
                        <li><Link to="/view-employees">View Employees</Link></li>
                        <li><Link to="/view-vendors">View Vendors</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/employees" element={<EmployeeForm />}>
                    </Route>
                    <Route path="/vendors" element={<VendorForm />}>
                    </Route>
                    <Route path="/send-email" element={<EmailForm />}>
                    </Route>
                    <Route path="/sent-emails" element={<SentEmailsList />}>
                    </Route>
                    <Route path="/view-employees" element={<EmployeesList />}>
                    </Route>
                    <Route path="/view-vendors" element={<VendorsList />}>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
};

export default App;
