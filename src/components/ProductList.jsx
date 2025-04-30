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
    <div>
      <h2>Administrar Productos</h2>
      <ProductForm selectedProduct={selectedProduct} onSuccess={fetchProducts} />

      <ul>
        {products.map(p => (
          <li key={p.id}>
            {p.name} - ${p.price}
            <button onClick={() => setSelectedProduct(p)}>Editar</button>
            <button onClick={() => handleDelete(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;