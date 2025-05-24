import React from 'react';
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

const pricingPlans = [
  {
    title: 'Consultation',
    price: 'Free',
    description: 'Your digital marketing efforts, instead of handling in-house.',
    features: ['Brand Design', 'Market Analysis', 'Production'],
    activeFeatures: [true, false, false],
    isPopular: false,
  },
  {
    title: 'Design',
    price: '$1500',
    description: 'Provide your business with a variety of digital solutions to promote.',
    features: ['Brand Design', 'Market Analysis', 'Production'],
    activeFeatures: [true, true, false],
    isPopular: true,
  },
  {
    title: 'Design + Code',
    price: '$2900',
    description: 'Help you hit your marketing goals and grow your business.',
    features: ['Brand Design', 'Market Analysis', 'Production'],
    activeFeatures: [true, true, true],
    isPopular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-5 bg-cream">
      <div className="container py-5">
        <p className="text-uppercase text-danger fw-semibold fs-5">Pricing</p>
        <h2 className="fw-bold display-3 mb-5">Check Our <br/> Pricing Plans</h2>

        <div className="row justify-content-center g-4">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className={`card h-100 border-2 ${
                  plan.isPopular ? 'shadow-lg bg-white' : 'bg-transparent border'
                } p-4 position-relative`}
                style={{ borderRadius: '12px' }}
              >
                {plan.isPopular && (
                  <span
                    className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger"
                    style={{ top: '-12px' }}
                  >
                    Popular
                  </span>
                )}

                <div className="card-body text-start">
                  <p className="text-uppercase text-danger fw-semibold small mb-1">{plan.title}</p>
                  <h2 className="fw-bold mb-2">{plan.price}</h2>
                  <p className="text-muted mb-4" style={{ minHeight: '56px' }}>
                    {plan.description}
                  </p>

                  <ul className="list-unstyled mb-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="d-flex align-items-center mb-2">
                        <span
                          className={`me-2 ${
                            plan.activeFeatures[i] ? 'text-danger' : 'text-muted'
                          }`}
                          style={{ fontSize: '1rem' }}
                        >
                          {plan.activeFeatures[i] ? <FiPlusCircle/> : <FiMinusCircle/>}
                        </span>
                        <strong className={`${!plan.activeFeatures[i] && 'text-muted'}`}>
                          {feature}
                        </strong>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className={`btn max-w-50 fw-semibold ${
                      plan.isPopular
                        ? 'btn-danger text-white'
                        : 'btn-outline-dark'
                    }`}
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;