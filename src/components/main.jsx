import React from "react";

const Home = () => {
  return (
    <>
      <style>{`
        .hero-img {
          height: 500px;
          width: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .hero-img {
            height: 300px;  /* reduce height on tablets/mobile */
          }
        }

        @media (max-width: 480px) {
          .hero-img {
            height: 200px;  /* reduce more on phones */
          }
        }
      `}</style>

      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid hero-img"
            src="https://vanshjain.rf.gd/img/heroimg2.png"
            alt="Card"
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter"></h5>
              <p className="card-text fs-5 d-none d-sm-block "></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
