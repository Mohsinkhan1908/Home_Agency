// src/components/About.jsx
import React from 'react';

const About = () => {
return (
    <section className="py-5 bg-cream">
        <div className="container mb-5">
            {/* Brand Logos */}
            <div className="d-flex flex-wrap justify-content-center gap-4 mb-5">
                <img className='img-fluid' src="/partnerCompany.png" alt="Digitalside" height="50" />
            </div>
            <p className='border border-warning '></p>
            {/* Main About Content */}
            <div className="row align-items-center mb-5">
                {/* Left Side - Image + Avatar */}
                <div className="col-lg-6 position-relative text-center mb-4 mb-lg-0">
                    <img
                        src="/aboutImg.png"
                        alt="Workspace"
                        className="img-fluid rounded mt-5"
                        style={{ maxWidth: '100%'}}
                    />
                </div>
                {/* Right Side - Text */}
                <div className="col-lg-6">
                    <p className="text-uppercase text-warning fw-bold small mb-1">About</p>
                    <h1 className="fw-bold mb-3">An Experience <br /> Design Agency</h1>
                    <h3 className="my-4">
                        Provides a full service range</h3><br />
                        <p className='fs-5 text-secondary'>Ability to put themselves in the merchant's shoes. It is<br/> meant to partner on the long run, and work as an extension<br/> of the merchant's team.
                    </p>
                    <a href="#" className="btn btn-outline-dark px-4 py-2">About Us</a>
                </div>
            </div>

            {/* Stats Section */}
            <div className="row text-left g-3 py-4 bg-cream mt-5">
                <div className="col-md-4 border border-warning p-5 rounded">
                    <h3 className="fw-bold fs-1">42%</h3>
                    <p className="mb-0 small">Years of experience</p>
                </div>
                <div className="col-md-4 border border-warning p-5 rounded">
                    <h3 className="fw-bold fs-1">73+</h3>
                    <p className="mb-0 small">Agency members</p>
                </div>
                <div className="col-md-4 border border-warning p-5 rounded">
                    <h3 className="fw-bold fs-1">5.000</h3>
                    <p className="mb-0 small">Projects complete</p>
                </div>
            </div>
        </div>
    </section>
);
};

export default About;