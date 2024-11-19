// routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Frontend/login';
import Index from './Frontend/Index';
import Billing from './Frontend/billing';
import Inventory from './Frontend/inventory';
import NewProduct from './Frontend/newProduct';
import SearchProduct from './Frontend/searchProduct';
import Clients from './Frontend/clients';
import NewClient from './Frontend/newClient';
import SearchClient from './Frontend/searchClient';
import Reports from './Frontend/reports';
import Setting from './Frontend/setting';

const router = (
  <Router>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menu" element={<Index />} />
        <Route path="billing" element={<Billing />} />
        <Route path="inventory" element={<Inventory />}>
            <Route path="new-product" element={<NewProduct />} />
            <Route path="search-product" element={<SearchProduct />} />
        </Route>
        <Route path="clients" element={<Clients />}>
            <Route path="new-client" element={<NewClient />} />
            <Route path="search-client" element={<SearchClient />} />
        </Route>
        <Route path="reports" element={<Reports />}/>
        <Route path="setting" element={<Setting />} />
    </Routes>
  </Router>
);

export default router;