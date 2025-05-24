

const HowWeWork = () => {
  return (
    <section className="py-5 bg-cream">
      <div className="container mb-5">
        <div className="row align-items-start">
          {/* Left Column */}
          <div className="col-lg-6 mb-4">
            <p
              className="text-uppercase text-warning fw-bold mb-4"
              style={{ letterSpacing: "2px", fontSize: "14px" }}
            >
              How We Work
            </p>
            <h1
              className="fw-bold mb-4"
              style={{ fontSize: "48px", color: "#381c00" }}
            >
              Making Your Projects <br /> Look Awesome
            </h1>
            <p className="mb-4 text-muted" style={{ fontSize: "18px" }}>
              Technical skills, design, business understanding, ability to{" "}
              <br />
              put themselves in the merchant's shoes.
            </p>
            <a
              href="#"
              className="text-dark fw-medium"
              style={{ fontSize: "18px", textDecoration: "none" }}
            >
              Read More
            </a>
          </div>

          {/* Right Column with Steps */}
          <div className="col-lg-6">
            <div className="d-flex align-items-center mb-4">
              <h1
                className="fw-bold me-4 display-2"
                style={{ color: "#381c00" }}
              >
                1
              </h1>
              <p className="mb-0 fw-bold fs-3" style={{ color: "#381c00" }}>
                Full service range including
              </p>
            </div>
            <div className="d-flex align-items-center mb-4">
              <h1
                className="fw-bold me-4 display-2"
                style={{ color: "#381c00" }}
              >
                2
              </h1>
              <p className="mb-0 fw-bold fs-3" style={{ color: "#381c00" }}>
                Technical skills, design, business
              </p>
            </div>
            <div className="d-flex align-items-center">
              <h1
                className="fw-bold me-4 display-2"
                style={{ color: "#381c00" }}
              >
                3
              </h1>
              <p className="mb-0 fw-bold fs-3" style={{ color: "#381c00" }}>
                Themselves in the merchant's
              </p>
            </div>
          </div>
        </div>
        <hr
          style={{
            border: "none",
            borderTop: "2px solid rgb(184, 168, 158)",
            marginTop: "6rem",
            marginBottom: "0",
          }}
        />
      </div>
    </section>
  );
};

export default HowWeWork;