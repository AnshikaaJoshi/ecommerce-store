import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead">
            We'd love to hear from you. Reach out anytime!
          </p>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="container py-5">
        <div className="row g-5">

          {/* Contact Form */}
          <div className="col-lg-7">

            <h2 className="fw-bold mb-4">Send us a Message</h2>

            <form>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button className="btn btn-primary btn-lg">
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Info */}
          <div className="col-lg-5">

            <div className="card shadow border-0 p-4">

              <h3 className="mb-4">Contact Information</h3>

              <p>
                <FaMapMarkerAlt className="text-primary me-2" />
                123 Market Street, New Delhi, India
              </p>

              <p>
                <FaPhoneAlt className="text-primary me-2" />
                +91 98765 43210
              </p>

              <p>
                <FaEnvelope className="text-primary me-2" />
                support@shopease.com
              </p>

              <p>
                <FaClock className="text-primary me-2" />
                Mon - Sat : 9:00 AM - 8:00 PM
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Google Map */}
      <section className="container pb-5">

        <h2 className="text-center fw-bold mb-4">
          Find Us
        </h2>

        <div className="ratio ratio-16x9 rounded shadow">

          <iframe
            src="https://www.google.com/maps?q=New+Delhi&output=embed"
            title="Google Map"
            allowFullScreen
            loading="lazy"
          ></iframe>

        </div>

      </section>

      {/* FAQ */}
      <section className="container pb-5">

        <h2 className="text-center fw-bold mb-4">
          Frequently Asked Questions
        </h2>

        <div className="accordion" id="faq">

          <div className="accordion-item">
            <h2 className="accordion-header">

              <button
                className="accordion-button"
                data-bs-toggle="collapse"
                data-bs-target="#q1"
              >
                How long does shipping take?
              </button>

            </h2>

            <div
              id="q1"
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body">
                Orders are usually delivered within 3–7 business days.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">

              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#q2"
              >
                Can I return my product?
              </button>

            </h2>

            <div
              id="q2"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                Yes. We offer a 7-day easy return policy.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">

              <button
                className="accordion-button collapsed"
                data-bs-toggle="collapse"
                data-bs-target="#q3"
              >
                Do you provide customer support?
              </button>

            </h2>

            <div
              id="q3"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                Yes, our support team is available Monday to Saturday.
              </div>
            </div>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;