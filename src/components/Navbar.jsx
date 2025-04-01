import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import "../styles/styles.css";
import logo from '../assets/ferremas.png';


const Navbar = () => {
  const { cart } = useCart(); 

 
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-custom">
      <div className="container-fluid">
        
        <div className="me-auto">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="FERREMAS" className="navbar-logo" />
          </Link>
        </div>

        <div className="d-flex justify-content-center w-25">
          <form className="d-flex w-100">
            <input
              className="form-control"
              type="search"
              placeholder="¿Qué estás buscando?"
              aria-label="Buscar"
            />

            <button type="submit" className="btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>

        <div className="d-flex ms-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">Iniciar Sesión</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/carrito">
                <FontAwesomeIcon icon={faShoppingCart} />
                {cartCount > 0 && (
                  <span className="badge bg-light text-dark ms-2">{cartCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
