// src/components/inventory.js
import React from 'react';
import InventoryMenuComponent from '../components/inventoryOptions';
import { Outlet } from 'react-router-dom';

const Inventory = () => {
    return (
        <div>
            <h1>Inventario</h1>
            <InventoryMenuComponent />
            <Outlet />
        </div>
    );
};

export default Inventory;