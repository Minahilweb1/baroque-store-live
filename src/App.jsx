
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import ProductDetails from "./ProductDetails.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";

import "./App.css";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });

    alert(`${product.name} added to cart!`);
  }

  function increaseQuantity(id) {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(id) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  const cartTotal = cart.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  function handleCheckout(event) {
    event.preventDefault();

    if (cart.length === 0) {
      alert("Please add a product to your cart first.");
      return;
    }

    alert("Thank you! Your order details have been submitted.");
    setCart([]);
    event.target.reset();
  }

  return (
    <>
      <header>
        <Link to="/" className="logo-link">
          <h1>Baroque Inspired Store</h1>
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/shop"
            element={
              selectedProduct ? (
                <ProductDetails
                  product={selectedProduct}
                  addToCart={addToCart}
                  onBack={() => setSelectedProduct(null)}
                />
              ) : (
                <Shop
                  addToCart={addToCart}
                  onViewDetails={setSelectedProduct}
                />
              )
            }
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeFromCart={removeFromCart}
                cartTotal={cartTotal}
                handleCheckout={handleCheckout}
              />
            }
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={
              <section>
                <h2>Page Not Found</h2>
                <Link to="/">Return to Home</Link>
              </section>
            }
          />
        </Routes>
      </main>

      <footer>
        <p>Baroque Inspired Store</p>
        <p>Timeless elegance, inspired by classic beauty.</p>
        <p>© 2026 Baroque Inspired Store</p>
      </footer>
    </>
  );
}

export default App;
