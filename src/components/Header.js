import React,{useEffect,useState} from 'react'
//import {BsSearch} from 'react-icons/bs';

function Header() {
  return (
    <div>
    <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">

          <div className="carousel-item text-center vh-100 bg-cover active slide-1">
            <div className="container h-100 d-flex align-items-center justify-content-center">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h6 className="fw-bold text-white">WELCOME TO COOKSPOT</h6>
                        <h2 className="display-1 fw-bold text-white">Prepare your favorite meals</h2>
                        <a href="#buscar" className="btn btn-secondary">Search now</a>
                        
                    </div>
                </div>
            </div>
          </div>
          
          <div className="carousel-item text-center vh-100 bg-cover slide-2">
            <div className="container h-100 d-flex align-items-center justify-content-center">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <h6 className="fw-bold text-white">WELCOME TO COOKSPOT</h6>
                        <h2 className="display-1 fw-bold text-white">Buy ingredients at your nearest supermarket</h2>
                        <a href="#mapa" className="btn btn-secondary">See locations</a>
                    </div>
                </div>
            </div>
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
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"> </script>
  </div>

  )
  
}

export default Header