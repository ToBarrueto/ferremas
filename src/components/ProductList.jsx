import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = () => {
    axios.get('http://localhost:8000/api/products/')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/products/${id}/`)
      .then(() => fetchProducts())
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Administrar Productos</h2>
      <div className="row">
        {/* Lista de productos (izquierda) */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Productos</h5>
              {products.length === 0 ? (
                <p className="text-muted">No hay productos registrados.</p>
              ) : (
                <ul className="list-group">
                  {products.map(p => (
                    <li key={p.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <strong>{p.name}</strong> - ${p.price}
                      </div>
                      <div>
                        <button
                          className="btn btn-sm btn-warning me-2"
                          onClick={() => setSelectedProduct(p)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(p.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Formulario (derecha) */}
        <div className="col-md-6">
          <ProductForm selectedProduct={selectedProduct} onSuccess={fetchProducts} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
