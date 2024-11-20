import React, { useState } from 'react';
import './css/productForm.css'

const SearchClient = () => {
    const [clientName, setName] = useState(''); 
    const [clientId, setId] = useState('');  

    const handleSearch = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
        console.log({
            clientName,
            clientId,
        });
    };

    const handleReset = () => {
        setName('');
        setId(''); // Reinicia el estado a valores vacíos
      };

    return (
        <div className="client-form-container">
            <h2>Buscar cliente</h2>
            <form onSubmit={handleSearch} className="search-client-form">
                <div>
                    <label>Número de identificación:</label>
                    <input
                        type="text"
                        value={clientId}
                        onChange={(e) => setId(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Nombre del cliente:</label>
                    <input
                        type="text"
                        value={clientName}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button className='searchtButton' type="submit">Buscar</button>
                </form>
        </div>
    );
};

export default SearchClient;