import React from "react";
import "../GetStarted.css"; // new styles below

const GetStarted = () => {
  return (
    <section className="get-started-section">
      <div className="container">
        <div className="get-started-box d-flex flex-column flex-lg-row align-items-center justify-content-between position-relative p-4 p-md-5 rounded-4">
          {/* Gift Icon */}
          <img src="/icon.png" alt="Gift" className="gift-icon" />

          {/* Left Text */}
          <div className="text-center text-lg-start w-100 mb-4 mb-lg-0 z-2">
            <p className="text-danger fw-semibold small mb-2">GET STARTED</p>
            <h2 className="fw-bold mb-3">
              We Help Companies <br /> Move Faster
            </h2>
            <a href="#" className="btn btn-warning fw-semibold px-4 py-2">
              Contact Us
            </a>
          </div>

          {/* Center Card Image */}
  <div className="col-lg-4 text-center z-2 mb-4 mb-lg-0">
    <img src="/blockImg.png" alt="Analytics" className="img-fluid" style={{ maxWidth: "260px" }} />
  </div>

  {/* Right Model */}
  <div className="col-lg-3 text-center text-lg-end position-relative z-1">
    <img src="/model.png" alt="Model" className="img-fluid model-img" style={{ maxHeight: "300px" }} />
  </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;