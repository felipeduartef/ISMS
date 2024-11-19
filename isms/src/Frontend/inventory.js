// src/components/inventory.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const Inventory = () => {
    return (
        <div>
            <h1>Inventory</h1>
            <Outlet />
        </div>
    );
};

export default Inventory;