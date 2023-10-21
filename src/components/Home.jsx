import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="..."
          height="550px"
        />
        <div className="card-img-overlay">
          <div className="container1">
            <h5 className="card-title display-3 fw-bolder mb-0 ">
              NEW ARRIVALS
            </h5>
            <p className="card-text"></p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}

export default Home;
