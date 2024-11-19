// src/Menu.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu_component from '../components/menu';
import Billing from './billing';
import Inventory from './inventory';
import Reports from './reports';
import Setting from './setting';
import Clients from './clients';


const Menu = () => {
    return (
        <div>
            <h1>Bienvenido a ISMS</h1>
            <Menu_component />
                <Routes>
                    <Route path="/billing" element={<Billing />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/setting" element={<Setting />} />
                </Routes>
        </div>
    );
};

export default Menu;