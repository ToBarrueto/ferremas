import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import slide1 from '../assets/slide1.avif'; 
import slide2 from '../assets/slide2.avif';
import slide3 from '../assets/slide3.avif'; 

const CarouselComponent = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={slide2}
            className="d-block w-100"
            alt="Imagen 1"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={slide1}
            className="d-block w-100"
            alt="Imagen 2"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="carousel-item">
          <img
            src={slide3}
            className="d-block w-100"
            alt="Imagen 3"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;
