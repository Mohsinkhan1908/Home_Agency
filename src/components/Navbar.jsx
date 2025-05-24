import 'bootstrap/dist/js/bootstrap.bundle';

const Navbar = () => {

     const navItems = [
        { name: 'About', link: '#' },
        { name: 'Services', link: '#' },
        { name: 'Pricing', link: '#' },
        { name: 'Blog', link: '#' },
     ];
     const contactItem = { name: 'Contact', link: '#', className: 'ms-auto border border-white mx-5 rounded px-3 fw-bold' };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm py-3">
      <div className="container justify-content-center ">
        <a className="navbar-brand fw-bold" href="#"><img src="logo.png" alt="logo" /></a>
        <button className="navbar-toggler border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon bg-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 custom-gap">
            {navItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className={`nav-link text-white ${item.className || ''}`}  href={item.link}>
                  {item.name}
                </a>
              </li>
            ))}
            {/* <li className="nav-item"><a className="nav-link text-white" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Services</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Pricing</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Blog</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#">Contact</a></li> */}
          </ul>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className={`nav-link text-white ${contactItem.className}`} href={contactItem.link}>
                {contactItem.name}
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;