// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Frontend/login';
import Menu from './Frontend/Index';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/menu" element={<Menu />} />
            </Routes>
        </Router>
    );
};

export default App;
