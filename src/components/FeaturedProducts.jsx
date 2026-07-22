import products from "../data/products";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  return (
    <div className="container my-5">

      <h2 className="text-center fw-bold mb-5">
        Featured Products
      </h2>

      <div className="row g-4">

        {products.map((product) => (
          <div className="col-md-6 col-lg-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}

      </div>

    </div>
  );
}

export default FeaturedProducts;