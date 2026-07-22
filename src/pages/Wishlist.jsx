import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useWishlist } from "../context/WishlistContext";

function Wishlist() {

  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <>
      <Navbar />

      <div className="container py-5">

        <h2 className="mb-4 text-center">
          My Wishlist ❤️
        </h2>

        {wishlist.length === 0 ? (
          <h4 className="text-center text-muted">
            Wishlist is Empty
          </h4>
        ) : (
          <div className="row g-4">

            {wishlist.map((item) => (

              <div className="col-md-4" key={item.id}>

                <div className="card shadow">

                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                  />

                  <div className="card-body">

                    <h5>{item.name}</h5>

                    <h4 className="text-primary">
                      ₹{item.price}
                    </h4>

                    <button
                      className="btn btn-danger w-100"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      Remove
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>
        )}

      </div>

      <Footer />
    </>
  );
}

export default Wishlist;