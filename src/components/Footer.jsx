import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">

      <div className="container">

        <div className="row">

          {/* Logo */}
          <div className="col-md-4 mb-4">

            <h3 className="text-primary fw-bold">
              ShopEase
            </h3>

            <p className="text-secondary">
              Your one-stop destination for fashion,
              electronics, accessories and more.
            </p>

          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">

            <h5>Quick Links</h5>

            <ul className="list-unstyled">

              <li><a href="/" className="footer-link">Home</a></li>

              <li><a href="/products" className="footer-link">Products</a></li>

              <li><a href="/about" className="footer-link">About</a></li>

              <li><a href="/contact" className="footer-link">Contact</a></li>

            </ul>

          </div>

          {/* Customer Care */}
          <div className="col-md-3 mb-4">

            <h5>Customer Care</h5>

            <ul className="list-unstyled">

              <li>Help Center</li>

              <li>Shipping</li>

              <li>Returns</li>

              <li>Privacy Policy</li>

            </ul>

          </div>

          {/* Social */}
          <div className="col-md-3 mb-4">

            <h5>Follow Us</h5>

            <div className="d-flex gap-3 mt-3">

              <FaFacebookF size={22} />

              <FaInstagram size={22} />

              <FaTwitter size={22} />

              <FaLinkedinIn size={22} />

            </div>

          </div>

        </div>

        <hr />

        <p className="text-center text-secondary mb-0">
          © 2026 ShopEase. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;