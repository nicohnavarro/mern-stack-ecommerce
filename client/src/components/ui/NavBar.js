import { Link } from "react-router-dom";
import { useAuth } from "../../context/providers/AuthContext";

const NavBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          NickEcommerce
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link active" aria-current="page" href="#">
              Cart
            </a>
            {isLoggedIn ? (
              <Link className="nav-link" to="/products/new">
                New Product
              </Link>
            ) : (
              <Link className="nav-link" to="/auth/Signup">
                Signup
              </Link>
            )}
            <a className="nav-link" href="#">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
