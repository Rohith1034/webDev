import React from "react";
import Navbar from "./Navbar";
import Category from "./Category";
import Deals from "./Deals";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="carouselExampleAutoplaying" className="carousel slide custom-carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./resources/carousel1.png" className="carousel-img d-block w-100" alt="..."></img>
          </div>
          <div className="carousel-item">
            <img src="https://i.imgur.com/olXficG.jpeg" className="carousel-img d-block w-100" alt="..."></img>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="category-container">
        <Category />
        <Deals />
      </div>
    </div>
  );
}

export default App;
