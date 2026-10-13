function ProductDetails({ product, addToCart, onBack }) {
  if (!product) {
    return null;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>

      <p>Category: {product.category}</p>

      <p>{product.description}</p>

      <h3>${Number(product.price).toFixed(2)}</h3>

      <button
        type="button"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>

      <button type="button" onClick={onBack}>
        Back to Collection
      </button>
    </div>
  );
}

export default ProductDetails;