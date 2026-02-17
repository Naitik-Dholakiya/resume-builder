import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          ATS Resume Builder
        </Link>

        <div className="ms-auto d-flex align-items-center">

          {location.pathname !== "/builder" && (
            <Link to="/builder" className="btn primary-btn text-white">
              Build Resume
            </Link>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;