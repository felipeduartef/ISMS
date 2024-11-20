import React, { useState } from 'react';
import './css/productForm.css'

const NewClient = () => {
    const [clientName, setName] = useState(''); 
    const [clientId, setId] = useState('');  
    const [clientEmail, setEmail] = useState('');  
    const [clientPhone, setPhone] = useState('');  

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
        console.log({
            clientName,
            clientId,
            clientEmail,
            clientPhone,
        });
    };

    const handleReset = () => {
        setName('');
        setId(''); 
        setEmail('');
        setPhone('');// Reinicia el estado a valores vacíos
      };

    return (
        <div className="new-client-form-container">
            <h2>Nuevo cliente</h2>
            <form onSubmit={handleSubmit} className="new-client-form">
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
                        required
                    />
                </div>
                <div>
                    <label>Correo electrónico:</label>
                    <input
                        type="email"
                        value={clientEmail}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Número de teléfono:</label>
                    <input
                        type="number"
                        value={clientPhone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <button className='resetButton' type="reset" onClick={handleReset}>Limpiar</button>
                <button className='submitButton' onClick={handleReset}>Eliminar</button>
                <button className='submitButton' type="submit">Agregar</button>
                </form>
        </div>
    );
};

export default NewClient;