// src/components/billing.js
import React from 'react';
import NewBilling from '../components/billingForm';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Billing = () => {
    return (
        <div>
            <h1>Venta</h1>
            <Link to="/menu"><h3>Inicio</h3></Link>
            <NewBilling />
            <Outlet />
        </div>
    );
};

export default Billing;