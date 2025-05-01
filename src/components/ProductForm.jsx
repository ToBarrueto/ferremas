import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ selectedProduct, onSuccess }) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    stock: ''
  });

  useEffect(() => {
    if (selectedProduct) {
      setForm(selectedProduct);
    }
  }, [selectedProduct]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const request = selectedProduct
      ? axios.put(`http://localhost:8000/api/products/${selectedProduct.id}/`, form)
      : axios.post('http://localhost:8000/api/products/', form);

    request
      .then(() => {
        onSuccess();
        setForm({ name: '', description: '', price: '', stock: '' });
      })
      .catch(err => console.error('Error al guardar producto:', err));
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Nombre"
        required
      />
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Descripción"
        required
      />
      <input
        name="price"
        value={form.price}
        onChange={handleChange}
        placeholder="Precio"
        type="number"
        required
      />
      <input
        name="stock"
        value={form.stock}
        onChange={handleChange}
        placeholder="Stock"
        type="number"
        required
      />
      <button type="submit">
        {selectedProduct ? 'Actualizar' : 'Crear'} Producto
      </button>
    </form>
  );
};

export default ProductForm;
