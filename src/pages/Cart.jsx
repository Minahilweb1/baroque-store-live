
function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  cartTotal,
  handleCheckout,
}) {
  return (
    <>
      <section id="cart" className="cart-section">
        <h2>Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>

                  <p>
                    Price: ${Number(item.price).toFixed(2)}
                  </p>

                  <p>Quantity: {item.quantity}</p>

                  <p>
                    Subtotal: $
                    {(Number(item.price) * item.quantity).toFixed(2)}
                  </p>

                  <div className="quantity-controls">
                    <button
                      type="button"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <h3>Cart Total: ${cartTotal.toFixed(2)}</h3>
          </>
        )}
      </section>

      <section id="checkout" className="checkout-section">
        <h2>Checkout</h2>

        <form onSubmit={handleCheckout}>
          <label htmlFor="customer-name">Full Name</label>
          <input
            id="customer-name"
            name="name"
            type="text"
            placeholder="Enter your full name"
            required
          />

          <label htmlFor="customer-email">Email Address</label>
          <input
            id="customer-email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="customer-address">Delivery Address</label>
          <textarea
            id="customer-address"
            name="address"
            placeholder="Enter your delivery address"
            required
          />

          <button type="submit">Place Order</button>
        </form>
      </section>
    </>
  );
}

export default Cart;
