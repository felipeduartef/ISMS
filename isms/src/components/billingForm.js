import React, { useState } from 'react';
import './css/productForm.css'

const NewBilling = () => {
    const [clientName, setName] = useState(''); 
    const [clientId, setId] = useState('');  
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const [products, setProducts] = useState([
        { name: 'Producto 1', unitPrice: 10.00, quantity: 2 },
        { name: 'Producto 2', unitPrice: 15.00, quantity: 1 },
        { name: 'Producto 3', unitPrice: 7.50, quantity: 3 },
        { name: 'Producto 4', unitPrice: 5.00, quantity: 4 },
    ]);

    const calculateTotal = () => {
        return products.reduce((total, product) => total + (product.unitPrice * product.quantity), 0).toFixed(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
        console.log({
            productName,
            description,
            price,
            quantity,
            category,
            date,
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
        console.log({
            clientName,
            clientId,
        });
    };

    const handleReset = () => {
        setProductName('');
        setDescription('');
        setPrice('');
        setQuantity('');
        setCategory('');
        setDate(''); // Reinicia el estado a valores vacíos
      };

      const handlePay = () => {
        setProductName('');
        setDescription('');
        setPrice('');
        setQuantity('');
        setCategory('');
        setDate(''); // Reinicia el estado a valores vacíos
      };

    return (
        <div className="billing-form-container">
            <h2>Compra</h2>
            <form onSubmit={handleSearch} className="billing-client-form">
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
                <form onSubmit={handleSubmit} className="billing-form">
                <div>
                    <label>Nombre del producto:</label>
                    <br></br>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Cantidad:</label>
                    <br></br>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                </div>
                <div className='button-container'>
                    <button className='resetButton' type="reset" onClick={handleReset}> Eliminar producto</button>
                    <button className='submitButton' type="submit">Agregar Producto</button>
                </div>
                
            </form>
            <div>
                <h2>Lista de productos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre del Producto</th>
                            <th>Valor Unitario</th>
                            <th>Cantidad</th>
                            <th>Valor Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>${product.unitPrice.toFixed(2)}</td>
                                <td>{product.quantity}</td>
                                <td>${(product.unitPrice * product.quantity).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <h3>Total de la Factura: ${calculateTotal()}</h3>
            </div>
            <button className='payButton' type="submit" onClick={handlePay}>Pagar</button>
        </div>
    );
};

export default NewBilling;