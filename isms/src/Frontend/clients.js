// src/components/clients.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const Clients = () => {
    return (
        <div>
            <h1>Clientes</h1>
            <Outlet />
        </div>

    );
};

export default Clients;