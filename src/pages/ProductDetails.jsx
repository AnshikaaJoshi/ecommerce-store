import { useParams } from "react-router-dom";
import products from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2 className="text-center mt-5">Product Not Found</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="container py-5">
        <div className="row align-items-center">

          <div className="col-md-6 text-center">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "450px" }}
            />
          </div>

          <div className="col-md-6">

            <span className="badge bg-primary mb-3">
              {product.category}
            </span>

            <h2>{product.name}</h2>

            <h4 className="text-primary my-3">
              ₹{product.price}
            </h4>

            <p>
              ⭐ {product.rating} / 5
            </p>

            <p className="text-muted">
              Premium quality product with excellent durability,
              stylish design and fast delivery.
            </p>

            <button
              className="btn btn-primary btn-lg"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductDetails;