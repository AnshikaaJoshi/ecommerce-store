import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    alert("🎉 Order Placed Successfully!");
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h2 className="text-center mb-5">Checkout</h2>

        <div className="row">

          {/* Billing Details */}
          <div className="col-lg-7">

            <div className="card shadow p-4">

              <h4 className="mb-4">Billing Details</h4>

              <input
                className="form-control mb-3"
                placeholder="Full Name"
              />

              <input
                className="form-control mb-3"
                placeholder="Email"
              />

              <input
                className="form-control mb-3"
                placeholder="Phone Number"
              />

              <textarea
                className="form-control mb-3"
                rows="3"
                placeholder="Address"
              ></textarea>

              <div className="row">

                <div className="col-md-6">
                  <input
                    className="form-control mb-3"
                    placeholder="City"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    className="form-control mb-3"
                    placeholder="State"
                  />
                </div>

              </div>

              <input
                className="form-control mb-3"
                placeholder="ZIP Code"
              />

            </div>

          </div>

          {/* Order Summary */}
          <div className="col-lg-5">

            <div className="card shadow p-4">

              <h4 className="mb-4">Order Summary</h4>

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between mb-3"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>

                  <span>
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}

              <hr />

              <h4>Total: ₹{total}</h4>

              <h5 className="mt-4">
                Payment Method
              </h5>

              <select className="form-select mb-4">

                <option>Cash on Delivery</option>

                <option>UPI</option>

                <option>Credit Card</option>

              </select>

              <button
                className="btn btn-success w-100"
                onClick={handleOrder}
              >
                Place Order
              </button>

            </div>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Checkout;