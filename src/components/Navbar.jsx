import { Link } from "react-router-dom";
import {
  FaShoppingCart,
  FaUser,
  FaSearch,
  FaHeart,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar() {
    const { cartCount } = useCart();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">

        <Link className="navbar-brand fw-bold fs-3 text-primary" to="/">
          ShopEase
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>

          <div className="d-flex align-items-center gap-3">

            <FaSearch size={18} />

            <FaUser size={18} />

            <Link to="/cart" className="position-relative text-dark">

            <FaShoppingCart size={22} />

            {cartCount > 0 && (
            <span
             className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            >
             {cartCount}
            </span>
            )}

            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;