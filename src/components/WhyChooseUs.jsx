import { FaShippingFast, FaLock, FaUndo, FaHeadset } from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaShippingFast size={40} />,
      title: "Free Shipping",
      desc: "Free shipping on all orders above ₹999",
    },
    {
      icon: <FaLock size={40} />,
      title: "Secure Payment",
      desc: "100% safe and secure payment",
    },
    {
      icon: <FaUndo size={40} />,
      title: "Easy Returns",
      desc: "7-day easy return policy",
    },
    {
      icon: <FaHeadset size={40} />,
      title: "24/7 Support",
      desc: "We're here whenever you need us",
    },
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center fw-bold mb-5">
        Why Choose ShopEase?
      </h2>

      <div className="row g-4">
        {features.map((feature, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="card border-0 shadow-sm text-center p-4 why-card h-100">

              <div className="text-primary mb-3">
                {feature.icon}
              </div>

              <h5>{feature.title}</h5>

              <p className="text-muted">
                {feature.desc}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;