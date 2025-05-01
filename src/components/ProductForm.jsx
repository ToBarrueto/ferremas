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
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{selectedProduct ? 'Editar' : 'Crear'} Producto</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Nombre"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Descripción</label>
            <input
              name="description"
              value={form.description}
              onChange={handleChange}
              className="form-control"
              placeholder="Descripción"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Precio</label>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              className="form-control"
              type="number"
              placeholder="Precio"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Stock</label>
            <input
              name="stock"
              value={form.stock}
              onChange={handleChange}
              className="form-control"
              type="number"
              placeholder="Stock"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            {selectedProduct ? 'Actualizar' : 'Crear'} Producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
