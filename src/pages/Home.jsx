import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import CarouselComponent from '../components/Carousel';
import "../styles/styles.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';


const Home = () => {
  const { addToCart } = useCart();
  const [productos, setProductos] = useState([]);

  //(esto será reemplazado con una API en el futuro)
  useEffect(() => {
    const productosData = [
      { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del Producto 1', imagen: 'https://www.imperial.cl/ccstore/v1/images/?source=/file/v5290552039199316029/products/96665-1.jpg&height=300&width=300', precio: 10 },
      { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del Producto 2', imagen: 'https://www.imperial.cl/ccstore/v1/images/?source=/file/v3138125141469518279/products/125737-1.jpg&height=300&width=300', precio: 15 },
      { id: 3, nombre: 'Producto 3', descripcion: 'Descripción del Producto 3', imagen: 'https://www.imperial.cl/ccstore/v1/images/?source=/file/v8161606713766262026/products/132687-1.jpg&height=300&width=300', precio: 20 },
      { id: 4, nombre: 'Producto 4', descripcion: 'Descripción del Producto 4', imagen: 'https://www.imperial.cl/ccstore/v1/images/?source=/file/v1546161365622903947/products/141368-1.jpg&height=300&width=300', precio: 25 },
      { id: 5, nombre: 'Producto 5', descripcion: 'Descripción del Producto 5', imagen: 'https://www.imperial.cl/ccstore/v1/images/?source=/file/v4559086434426154164/products/128695-1.jpg&height=300&width=300', precio: 30 },
      { id: 6, nombre: 'Producto 6', descripcion: 'Descripción del Producto 6', imagen: 'https://www.imperial.cl/ccstore/v1/images/?source=/file/v6001685081582000693/products/74264-1.jpg&height=300&width=300', precio: 35 },
    ];

    setTimeout(() => {
      setProductos(productosData);
    }, 1000);
  }, []);

  return (
    <div className="container-custom">

      <div className="hero-section">
        <h1 className="text-center mt-3">Bienvenido a <span style={{ color: "#f6323f" }}>FERREMAS</span></h1>
        <p className="lead text-center">Tu distribuidora de productos de ferretería y construcción.</p>
      </div>
      
      <CarouselComponent />  
      <div className='container'>
      <h2 className="my-4">Catálogo de Productos</h2>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img src={producto.imagen} className="card-img-top img-custom" alt={producto.nombre} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <p className="fw-bold">$ {producto.precio}</p>
                <button
                  className="btn btn-custom mt-auto"
                  onClick={() => addToCart(producto)}
                >
                Agregar al carro
                <FontAwesomeIcon icon={faShoppingCart} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
        
      </div>
      
    </div>
    <Footer />
    </div>
    
  );
};

export default Home;
