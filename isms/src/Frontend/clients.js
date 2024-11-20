// src/components/clients.js
import React from 'react';
import SearchClient from '../components/clientForm';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Clients = () => {
    return (
        <div>
            <h1>Clientes</h1>
            <Link to="/menu"><h3>Inicio</h3></Link>
            <SearchClient />
            <Outlet />
        </div>

    );
};

export default Clients;