import React from 'react';

const Hero = () => {
  return (
    <section className="py-5 bg-dark text-dark mt-5 position-relative overflow-hidden">
      <div className="container position-relative">
        <div className="row align-items-center position-relative">
          
          {/* Star image (behind text) */}
          <img
            src="/Star.png"
            alt="Star"
            className="position-absolute"
            style={{
              top: '17%',
              left: '30%',
              transform: 'translate(-50%, -50%)',
              width: '160px',
              opacity: 0.8,
              zIndex: 1
            }}
          />

          <div className="col-lg-7 position-relative" style={{ zIndex: 2 }}>
            <p className='fs-5 text-warning'>MODERN STUDIO</p>
            <h1 className="text-white display-2 fw-bold mb-4">
              We’re Help <br />
              To Build Your <br />
              Dream Project
            </h1>
            <p className="lead mb-4 text-warning mb-3">
              Agency provides a full service range including technical skills, design, business understanding.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="btn btn-warning px-4 py-2">How We Work</a>
              <a href="#" className="btn btn-outline-secondary text-white px-4 py-2">Contact Us</a>
            </div>
            <div className='mt-5'>
              <img className="m-3" src="/Bitmap.png" alt="" />
              <span className='text-white'>"Put themselves in the merchant's shoes" Meta Inc.</span>
            </div>
          </div>

          <div className="col-lg-5 text-center mt-4 mt-lg-0">
            <img
              src="/pic.png"
              alt="Hero Illustration"
              className="img-fluid"
              style={{ maxWidth: '500px', width: '100%', height: 'auto' }}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
