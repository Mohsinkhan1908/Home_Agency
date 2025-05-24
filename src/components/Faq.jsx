import React, { useState } from 'react';

const faqData = [
  {
    question: 'A digital agency is a business',
    answer:
      'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.',
  },
  {
    question: 'Hire to outsource your digital',
    answer: 'A digital agency helps you outsource digital marketing needs efficiently.',
  },
  {
    question: 'Marketing efforts',
    answer: 'Marketing efforts include SEO, SEM, social media, email marketing and more.',
  },
  {
    question: 'Can provide your business',
    answer: 'They provide scalable, measurable marketing solutions tailored to your needs.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-5 bg-cream">
      <div className="container py-5">
        <div className="row g-4 align-items-start">
          {/* Left Column */}
          <div className="col-lg-4">
            <p className="text-uppercase text-danger fw-semibold small mb-2">FAQ</p>
            <h2 className="fw-bold mb-3 display-5">Frequently Asked <br /> Questions</h2>
            <p className="text-muted mb-3">
              A digital agency is a business you hire to outsource your digital marketing efforts,
              instead of handling in-house.
            </p>
            <a href="#" className="fw-semibold text-dark text-decoration-none">Contact Us</a>
          </div>

          {/* Right Column */}
          <div className="col-lg-8">
            <div className="rounded overflow-hidden shadow-sm">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={`p-4 border-bottom ${
                    index === activeIndex
                      ? 'bg-white'
                      : 'bg-transparent'
                  }`}
                  style={{
                    backgroundColor: index === activeIndex ? '#ffffff' : '#fdf1ec',
                    borderColor: '#f1d7cd',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <div
                    className="d-flex justify-content-between align-items-center cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <h5 className="mb-0 fw-bold text-dark">
                      {item.question}
                    </h5>
                    <span
                      className="text-danger fs-4"
                      style={{ marginLeft: 'auto' }}
                    >
                      {index === activeIndex ? '▴' : '▾'}
                    </span>
                  </div>

                  {index === activeIndex && (
                    <p className="mt-3 text-muted mb-0" style={{ lineHeight: '1.6' }}>
                      {item.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
