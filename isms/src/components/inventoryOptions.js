// src/components/inventoryOptions.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/inventoryOptions.css' // Importar el archivo CSS

const InventoryMenuComponent = () => {
    return (
        <div className="Inventorymenu-container">
            <nav>
                <ul>
                    <li className="active">
                        <Link to="/menu"><h3>Inicio</h3></Link>
                    </li>
                    <li>
                    <Link to="/inventory/new-product"><h3>Agregar producto</h3></Link>
                    </li>
                    <li className='last-li'>
                    <Link to="/inventory/search-product"><h3>Modificar producto</h3></Link>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default InventoryMenuComponent;