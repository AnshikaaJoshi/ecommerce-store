import {Link} from "react-router-dom";
import {
  FaMobileAlt,
  FaTshirt,
  FaCouch,
  FaShoppingBag,
  FaGem,
  FaGamepad,
} from "react-icons/fa";

const categories = [
  { name: "Electronics", icon: <FaMobileAlt size={40} /> },
  { name: "Fashion", icon: <FaTshirt size={40} /> },
  { name: "Gaming", icon: <FaGamepad size={40} /> },
  { name: "Furniture", icon: <FaCouch size={40} /> },
  { name: "Bags", icon: <FaShoppingBag size={40} /> },
  { name: "Accessories", icon: <FaGem size={40} /> },
];

function Categories() {
  return (
    <div className="container my-5">

      <h2 className="text-center fw-bold mb-5">
        Shop by Category
      </h2>

      <div className="row g-4">

        {categories.map((item, index) => (
          <div className="col-md-4 col-lg-2" key={index}>

      <Link to={`/products?category=${item.name}`} className="text-decoration-none text-dark">
    <div className="card border-0 shadow-sm text-center p-4 category-card">
    <div className="text-primary mb-3">
        {item.icon}
      </div>
    <h6>{item.name}</h6>
    </div>
    </Link>

</div>
        ))}

      </div>

    </div>
  );
}

export default Categories;