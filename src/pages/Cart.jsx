import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <h2 className="mb-4 text-center">Shopping Cart</h2>

        {cart.length === 0 ? (
          <h4 className="text-center text-muted">
            Your cart is empty 🛒
          </h4>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="card mb-3 shadow-sm p-3"
              >
                <div className="row align-items-center">

                  <div className="col-md-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                    />
                  </div>

                  <div className="col-md-3">
                    <h5>{item.name}</h5>
                    <p>₹{item.price}</p>
                  </div>

                  <div className="col-md-3">

                    <button
                      className="btn btn-outline-secondary me-2"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      className="btn btn-outline-secondary ms-2"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>

                  </div>

                  <div className="col-md-2">
                    <strong>
                      ₹{item.price * item.quantity}
                    </strong>
                  </div>

                  <div className="col-md-2">

                    <button
                      className="btn btn-danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>

                  </div>

                </div>
              </div>
            ))}

            <div className="text-end mt-4">

              <h3>Total: ₹{total}</h3>

              <Link to="/checkout" className="btn btn-success btn-lg"> Proceed to Checkout</Link>

            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Cart;