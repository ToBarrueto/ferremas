import { useState, useEffect } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import CarouselComponent from '../components/Carousel';
import "../styles/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';

const Home = () => {
  const { addToCart } = useCart();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/')
      .then(res => {
        const productosAdaptados = res.data.map(p => ({
          id: p.id,
          nombre: p.name,
          descripcion: p.description,
          imagen: p.image || 'https://placehold.co/300',
          precio: p.price
        }));
        setProductos(productosAdaptados);
      })
      .catch(err => console.error("Error al cargar productos:", err));
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
