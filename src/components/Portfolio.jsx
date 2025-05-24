// src/components/Portfolio.jsx
import React, { useState } from 'react';

const portfolioItems = [
  { category: 'Design', title: 'SOFA', image: '/sofa.png' },
  { category: 'Branding', title: 'KeyBoard', image: '/keyboards.png' },
  { category: 'Illustration', title: 'Work Media', image: '/workmedia.png' },
  { category: 'Motion', title: 'DDDone', image: '/dddone.png' },
];

const filters = [
  { name: 'Show All', count: 14 },
  { name: 'Design', count: 6 },
  { name: 'Branding', count: 4 },
  { name: 'Illustration', count: 3 },
  { name: 'Motion', count: 1 },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('Show All');

  const filteredItems =
    activeFilter === 'Show All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-5 bg-dark">
      <div className="container text-center pb-5">
        <p className="text-uppercase text-danger small">P o r t f o l i o</p>
        <h2 className="fw-bold mb-4 display-2">Latest Work</h2>

        {/* Filter Tabs */}
        <div className="mb-5 d-flex justify-content-center flex-wrap gap-3">
          {filters.map(({ name, count }) => (
            <button
              key={name}
              className={`btn btn-sm rounded-pill fw-medium px-3 ${
                activeFilter === name ? 'btn-light text-dark' : 'btn-outline-light'
              }`}
              onClick={() => setActiveFilter(name)}
            >
              {name} <span className="mb-5 ">{count}</span>
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="row g-4">
          {filteredItems.map((item, index) => (
            <div key={index} className="col-md-6">
              <div className="position-relative overflow-hidden rounded shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid w-100"
                  style={{ borderRadius: '12px', height: '300px', objectFit: 'cover' }}
                />
                {/* Category Tag */}
                <span
                  className="position-absolute top-0 start-0 m-3 badge bg-white text-dark rounded-pill px-3 py-1 fw-medium"
                  style={{ fontSize: '0.85rem' }}
                >
                  {item.category}
                </span>
                {/* Title Overlay */}
                <h5 className="position-absolute bottom-0 start-0 m-3 text-white fw-bold">
                  {item.title}
                </h5>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-5">
          <a href="#" className="btn btn-outline-light px-4 py-2 fw-bold">
            EXPLORE MORE
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;