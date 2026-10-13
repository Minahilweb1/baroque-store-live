
import { useState } from "react";
import products from "../products.js";

function Shop({ addToCart, onViewDetails }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Fashion",
    "Accessories",
    "Luxury",
    "Jewelry",
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="shop">
      <h2>Our Collection</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        aria-label="Search products"
      />

      <div className="category-buttons">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={category === item ? "active-category" : ""}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <p className="product-price">
                ${Number(product.price).toFixed(2)}
              </p>

              <button
                type="button"
                onClick={() => onViewDetails(product)}
              >
                View Details
              </button>

              <button
                type="button"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </article>
          ))
        ) : (
          <p>No products found. Try another search.</p>
        )}
      </div>
    </section>
  );
}

export default Shop;
