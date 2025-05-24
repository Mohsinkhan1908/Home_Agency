// src/components/Team.jsx
import React from 'react';

const teamMembers = [
  {
    name: 'Azah Anyeni',
    role: 'Designer',
    image: '/team1.png',
  },
  {
    name: 'Roelof Bekkenenks',
    role: 'React Developer',
    image: '/team2.png',
  },
  {
    name: 'Leonardo Oliveira',
    role: 'Illustrator',
    image: '/team3.png',
  },
  {
    name: 'Izabella Tabakova',
    role: 'Product Designer',
    image: '/team4.png',
  },
];

const Team = () => {
  return (
    <section className="py-5 bg-dark text-white">
      <div className="container text-start py-5">
        <p className="text-uppercase text-danger fs-5">OUR TEAM</p>
        <h2 className="fw-bold display-1 mb-4">Team of Designers <br/> and Developers</h2>
        <div className="row g-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm h-100 bg-dark">
                <img
                  src={member.image}
                  alt={member.name}
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'contain' }}
                />
                <div className="card-body text-white text-center">
                  <h5 className="card-title mb-1">{member.name}</h5>
                  <p className="small">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;