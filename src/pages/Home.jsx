import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext'; // Importamos el contexto del carrito

const Home = () => {
  const { addToCart } = useCart(); // Accedemos a la función addToCart del carrito
  const [productos, setProductos] = useState([]);

  // Simulamos la carga de productos (esto será reemplazado con una API en el futuro)
  useEffect(() => {
    const productosData = [
      { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', imagen: 'https://via.placeholder.com/150', precio: 10 },
      { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', imagen: 'https://via.placeholder.com/150', precio: 15 },
      { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', imagen: 'https://via.placeholder.com/150', precio: 20 },
      { id: 4, nombre: 'Producto 4', descripcion: 'Descripción del Producto 4', imagen: 'https://via.placeholder.com/150', precio: 25 },
      { id: 5, nombre: 'Producto 5', descripcion: 'Descripción del Producto 5', imagen: 'https://via.placeholder.com/150', precio: 30 },
      { id: 6, nombre: 'Producto 6', descripcion: 'Descripción del Producto 6', imagen: 'https://via.placeholder.com/150', precio: 35 },
    ];

    setTimeout(() => {
      setProductos(productosData);
    }, 1000);
  }, []);

  return (
    <div className="container">
      <h1 className="text-center mt-4">Bienvenido a FERREMAS</h1>
      <p className="lead text-center">Tu distribuidora de productos de ferretería y construcción.</p>

      <h2 className="my-4">Catálogo de Productos</h2>
      <div className="row">
        {productos.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          productos.map((producto) => (
            <div className="col-12 col-md-4" key={producto.id}>
              <div className="card mb-4">
                <img src={producto.imagen} alt={producto.nombre} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{producto.nombre}</h5>
                  <p className="card-text">{producto.descripcion}</p>
                  <p className="card-text"><strong>${producto.precio}</strong></p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => addToCart(producto)} // Al hacer clic en "Añadir al carrito"
                  >
                    Añadir al Carrito
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
