import { FaSearch } from "react-icons/fa";

function SearchBar({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
}) {

  return (

    <div className="row mb-5">

      <div className="col-md-4">

        <div className="input-group">

          <span className="input-group-text">
            <FaSearch />
          </span>

          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      <div className="col-md-4">

        <select
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >

          <option>All</option>
          <option>Electronics</option>
          <option>Fashion</option>
          <option>Furniture</option>
          <option>Bags</option>

        </select>

      </div>

      <div className="col-md-4">

        <select
          className="form-select"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >

          <option value="">Sort</option>

          <option value="low-high">
            Price Low → High
          </option>

          <option value="high-low">
            Price High → Low
          </option>

        </select>

      </div>

    </div>

  );
}

export default SearchBar;