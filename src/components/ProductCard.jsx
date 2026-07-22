import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="card product-card h-100 shadow-sm border-0">

      {/* Discount Badge */}
      <span className="badge bg-danger position-absolute m-2">
        20% OFF
      </span>

      {/* Wishlist */}
      <button
        className="btn btn-light rounded-circle position-absolute top-0 end-0 m-2"
        onClick={() => addToWishlist(product)}
      >
        <FaHeart className="text-danger" />
      </button>

      {/* Product Image */}
      <div className="product-image-container">
        <img src={product.image} className="card-img-top" alt={product.name}/>
      </div>

      <div className="card-body d-flex flex-column">

        <small className="text-muted">
          {product.category}
        </small>

        <h5 className="fw-bold mt-1">
          {product.name}
        </h5>

        <div className="text-warning mb-2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />

          <small className="text-dark ms-2">
            ({Math.floor(Math.random() * 400 + 100)})
          </small>
        </div>

        <div className="mb-3">

          <span className="fs-4 fw-bold text-primary">
            ₹{product.price}
          </span>

          <span className="text-muted text-decoration-line-through ms-2">
            ₹{Math.floor(product.price * 1.2)}
          </span>

        </div>

        <div className="mt-auto">

          <Link
            to={`/product/${product.id}`}
            className="btn btn-outline-primary w-100 mb-2"
          >
            View Details
          </Link>

          <button
            className="btn btn-primary w-100"
            onClick={() => addToCart(product)}
          >
            <FaShoppingCart className="me-2" />
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;