import React, { useState } from 'react';

const ProductForm = () => {
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

    return (
        <form onSubmit={handleSubmit} className="product-form">
            <div>
                <label>Nombre del Producto:</label>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Descripción:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Precio:</label>
                <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Cantidad:</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Categoría:</label>
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
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Agregar Producto</button>
        </form>
    );
};

export default ProductForm;