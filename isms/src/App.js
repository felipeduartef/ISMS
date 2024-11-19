// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Frontend/login';
import Index from './Frontend/Index';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/menu" element={<Index />} />
            </Routes>
        </Router>
    );
};

export default App;
