import React, { useState } from 'react';
import './css/productForm.css'

const NewProduct = () => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

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
        // Reiniciar el formulario si es necesario
        setProductName('');
        setDescription('');
        setPrice('');
        setQuantity('');
        setCategory('');
        setDate('');
    };

    const handleReset = () => {
        setProductName('');
        setDescription('');
        setPrice('');
        setQuantity('');
        setCategory('');
        setDate(''); // Reinicia el estado a valores vacíos
      };

    return (
        <div className="form-container">
            <h2>Nuevo producto</h2>
            <form onSubmit={handleSubmit} className="product-form">
                <div>
                    <label>Nombre del Producto:</label>
                    <br></br>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Descripción:</label>
                    <br></br>
                    <textarea 
                        name="description" 
                        rows="4" 
                        cols="50" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required>
                        </textarea>
                </div>
                <div>
                    <label>Precio:</label>
                    <br></br>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
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
                <div>
                    <label>Categoría:</label>
                    <br></br>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value="">Seleccione una categoría</option>
                        <option value="electronicos">Electrónicos</option>
                        <option value="ropa">Ropa</option>
                        <option value="alimentos">Alimentos</option>
                        <option value="hogar">Hogar</option>
                        {/* Agrega más categorías según sea necesario */}
                    </select>
                </div>
                <div>
                    <label>Fecha de Ingreso:</label>
                    <br></br>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div className='button-container'>
                    <button className='resetButton' type="reset" onClick={handleReset}> Limpiar formulario</button>
                    <button className='submitButton' type="submit">Agregar Producto</button>
                </div>
                
            </form>
        </div>
    );
};

export default NewProduct;