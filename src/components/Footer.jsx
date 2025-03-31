import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/styles.css";

const Footer = () => {
  return (
    <footer className="footer-custom">
      <div className="container text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} FERREMAS - Todos los derechos reservados.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="mailto:contacto@ferremas.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
