import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="container py-5">
      <div className="row align-items-center">

        {/* Left Side */}
        <div className="col-lg-6">
          <h1 className="display-4 fw-bold">
            Discover Your
            <span className="text-primary"> Perfect Style</span>
          </h1>

          <p className="lead text-muted mt-3">
            Shop the latest fashion, electronics, shoes, and accessories
            at unbeatable prices.
          </p>

          <div className="mt-4">
            <Link to="/products" className="btn btn-primary btn-lg me-3">
              Shop Now
            </Link>

            <Link to="/products" className="btn btn-outline-dark btn-lg">Explore</Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-lg-6 text-center mt-5 mt-lg-0">
          <img
  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop"
  className="img-fluid rounded-4 shadow"
  alt="Shopping"
/>
        </div>

      </div>
    </section>
  );
}

export default Hero;