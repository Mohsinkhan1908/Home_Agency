import React from 'react';
import '../ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section position-relative d-flex align-items-center">
      {/* Pin Icon Overlay */}
      <img
        src="/pin.png"
        alt="Location Pin"
        className="map-pin"
      />

      <div className="container">
        <div className="row justify-content-start">
          <div className="col-md-6 col-lg-5">
            <div className="bg-white p-4 p-md-5 rounded-4 shadow contact-card">
              <h4 className="fw-bold mb-4 text-dark">Get In Touch</h4>
              <form>
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Your email"
                />
                <select className="form-select mb-3">
                  <option value="">Subject</option>
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Feedback</option>
                </select>
                <textarea
                  rows="4"
                  className="form-control mb-4"
                  placeholder="Message"
                ></textarea>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-danger px-4 py-2 fw-bold"
                    style={{ width: "160px" }}
                  >
                    SUBMIT NOW
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;