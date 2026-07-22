import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaShippingFast, FaHeadset, FaLock, FaAward } from "react-icons/fa";

function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">About ShopEase</h1>
          <p className="lead mt-3">
            Your trusted online shopping destination for quality products at
            affordable prices.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="container py-5">
        <div className="row align-items-center">

          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=700"
              alt="About ShopEase"
              className="img-fluid rounded shadow"
            />
          </div>

          <div className="col-lg-6">
            <h2 className="fw-bold mb-3">Our Story</h2>

            <p className="text-muted">
              ShopEase was created with one simple mission — to make online
              shopping easy, affordable, and enjoyable for everyone.
            </p>

            <p className="text-muted">
              We carefully select quality products across electronics,
              fashion, accessories, bags, and home essentials so our
              customers get the best value for money.
            </p>

            <button className="btn btn-primary mt-3">
              Explore Products
            </button>
          </div>

        </div>
      </section>

      {/* Statistics */}
      <section className="container py-5">

        <div className="row text-center">

          <div className="col-md-3 mb-4">
            <h2 className="text-primary fw-bold">10K+</h2>
            <p>Happy Customers</p>
          </div>

          <div className="col-md-3 mb-4">
            <h2 className="text-primary fw-bold">500+</h2>
            <p>Products</p>
          </div>

          <div className="col-md-3 mb-4">
            <h2 className="text-primary fw-bold">150+</h2>
            <p>Brands</p>
          </div>

          <div className="col-md-3 mb-4">
            <h2 className="text-primary fw-bold">24/7</h2>
            <p>Support</p>
          </div>

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="bg-light py-5">

        <div className="container">

          <h2 className="text-center fw-bold mb-5">
            Why Shop With Us?
          </h2>

          <div className="row g-4">

            <div className="col-md-3">
              <div className="card border-0 shadow text-center p-4 h-100">
                <FaShippingFast size={45} className="text-primary mx-auto mb-3" />
                <h5>Fast Delivery</h5>
                <p className="text-muted">
                  Quick and reliable shipping across the country.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow text-center p-4 h-100">
                <FaLock size={45} className="text-primary mx-auto mb-3" />
                <h5>Secure Payments</h5>
                <p className="text-muted">
                  Safe and trusted payment methods.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow text-center p-4 h-100">
                <FaHeadset size={45} className="text-primary mx-auto mb-3" />
                <h5>24/7 Support</h5>
                <p className="text-muted">
                  Friendly customer support anytime.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="card border-0 shadow text-center p-4 h-100">
                <FaAward size={45} className="text-primary mx-auto mb-3" />
                <h5>Premium Quality</h5>
                <p className="text-muted">
                  Genuine products from trusted brands.
                </p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* Team */}
      <section className="container py-5">

        <h2 className="text-center fw-bold mb-5">
          Meet Our Team
        </h2>

        <div className="row">

          <div className="col-md-4">
            <div className="card border-0 shadow text-center p-4">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                className="rounded-circle mx-auto mb-3"
                width="120"
                alt="CEO"
              />
              <h5>Sarah Johnson</h5>
              <p className="text-primary">Founder & CEO</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow text-center p-4">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                className="rounded-circle mx-auto mb-3"
                width="120"
                alt="Manager"
              />
              <h5>Michael Brown</h5>
              <p className="text-primary">Marketing Head</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow text-center p-4">
              <img
                src="https://randomuser.me/api/portraits/women/90.jpg"
                className="rounded-circle mx-auto mb-3"
                width="120"
                alt="Support"
              />
              <h5>Emily Davis</h5>
              <p className="text-primary">Customer Support</p>
            </div>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;