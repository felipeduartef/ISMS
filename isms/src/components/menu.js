// src/components/menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/menu.css' // Importar el archivo CSS

const Menu_component = () => {
    return (
        <div class="menu-container">
        <nav>
            <h2>Menú</h2>
            <ul>
                <li class="active">
                    <Link to="/billing"><h3>Facturar</h3></Link>
                </li>
                <li>
                <Link to="/inventory"><h3>Inventario</h3></Link>
                </li>
                <li>
                    <Link to="/clients"><h3>Clientes</h3></Link>
                </li>
                <li>
                    <Link to="/reports"><h3>Reportes</h3></Link>
                </li>
                <li>
                    <Link to="/setting"><h3>Ajustes</h3></Link>
                </li>
                
            </ul>
        </nav>
        </div>
    );
};

export default Menu_component;