import React from 'react';
import '../Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section py-5">
      <div className="container">
        <div className="row gy-4 align-items-start">
          {/* Brand */}
          <div className="col-md-3">
            <h5 className="fw-bold text-dark mb-0">Agency</h5>
          </div>

          {/* Menu */}
          <div className="col-md-3">
            <p className="text-uppercase text-danger small fw-semibold mb-2">Menu</p>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">About</a></li>
              <li><a href="#" className="footer-link">Services</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Service */}
          <div className="col-md-3">
            <p className="text-uppercase text-danger small fw-semibold mb-2">Service</p>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link">Design</a></li>
              <li><a href="#" className="footer-link">Development</a></li>
              <li><a href="#" className="footer-link">Marketing</a></li>
              <li><a href="#" className="footer-link">See More</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="col-md-3 d-flex gap-3 justify-content-md-end">
            <a href="#" className="social-circle"><FaFacebookF /></a>
            <a href="#" className="social-circle"><FaTwitter /></a>
            <a href="#" className="social-circle"><FaInstagram /></a>
          </div>
        </div>

        <hr className="my-4" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small text-muted">
          <p className="mb-2 mb-md-0">Copyright © 2022 Mohsin khan. All Rights Reserved.</p>
          <div className="d-flex gap-3">
            <a href="#" className="footer-link">Terms of Use</a>
            <a href="#" className="footer-link">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;