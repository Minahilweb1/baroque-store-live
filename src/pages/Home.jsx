import { Link } from "react-router-dom";
import products from "../products.js";

function Home() {
  const categories = [
    {
      name: "Luxury Fashion",
      image: "/images/dress.jpg",
      description: "Elegant looks for every occasion",
    },
    {
      name: "Handbags",
      image: "/images/handbag.jpg",
      description: "The finishing touch to your style",
    },
    {
      name: "Accessories",
      image: "/images/accessories.jpg",
      description: "Beautiful details, timeless appeal",
    },
  ];

  const newArrivals = products.slice(0, 4);

  return (
    <main className="home-page">
      {/* Announcement bar */}
      <div className="announcement-bar">
        DISCOVER TIMELESS ELEGANCE — EXPLORE OUR COLLECTION
      </div>

      {/* Main fashion banner */}
      <section id="home" className="hero-section">
        <img
          src="/images/hero.jpg"
          alt="Baroque inspired fashion collection"
          className="hero-image"
        />

        <div className="hero-content">
          <p className="hero-subtitle">THE ART OF ELEGANCE</p>

          <h2>Own Your Timeless Look</h2>

          <p>
            Discover statement fashion, elegant accessories and
            luxurious styles inspired by classic beauty.
          </p>

          <Link to="/shop" className="hero-button">
            EXPLORE COLLECTION
          </Link>
        </div>
      </section>

      {/* Category collection */}
      <section className="home-categories">
        <div className="home-section-heading">
          <p className="section-eyebrow">CURATED FOR YOU</p>
          <h2>Shop by Category</h2>
          <p>Find the pieces that express your personal style.</p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              to="/shop"
              className="category-card"
              key={category.name}
            >
              <div className="category-image-wrap">
                <img
                  src={category.image}
                  alt={category.name}
                />
              </div>

              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <span>DISCOVER MORE ↗</span>
            </Link>
          ))}
        </div>
      </section>

      {/* New arrivals */}
      <section className="home-new-arrivals">
        <div className="home-section-heading">
          <p className="section-eyebrow">JUST ARRIVED</p>
          <h2>New Arrivals</h2>
          <p>Explore timeless pieces selected for your wardrobe.</p>
        </div>

        <div className="home-product-grid">
          {newArrivals.map((product) => (
            <article className="home-product-card" key={product.id}>
              <Link
                to="/shop"
                className="home-product-image"
              >
                <img
                  src={product.image}
                  alt={product.name}
                />
              </Link>

              <p className="home-product-category">
                {product.category}
              </p>

              <h3>{product.name}</h3>

              <p className="home-product-price">
                ${Number(product.price).toFixed(2)}
              </p>

              <Link to="/shop" className="home-view-link">
                VIEW COLLECTION
              </Link>
            </article>
          ))}
        </div>

        <div className="home-shop-all">
          <Link to="/shop" className="home-outline-button">
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </section>

      {/* Editorial fashion banner */}
      <section className="home-editorial">
        <div className="editorial-image">
          <img
            src="/images/dress.jpg"
            alt="Elegant fashion from our collection"
          />
        </div>

        <div className="editorial-content">
          <p className="section-eyebrow">TIMELESS BY DESIGN</p>

          <h2>Elegance in Every Detail</h2>

          <p>
            From statement pieces to everyday favourites,
            discover styles that bring sophistication to every moment.
          </p>

          <Link to="/shop" className="hero-button">
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>

      {/* Brand benefits */}
      <section className="home-benefits">
        <div className="home-section-heading">
          <p className="section-eyebrow">THE BAROQUE EXPERIENCE</p>
          <h2>Made for Your Style</h2>
        </div>

        <div className="benefits-grid">
          <article className="benefit-item">
            <span>✧</span>
            <h3>Timeless Style</h3>
            <p>Elegant designs inspired by classic beauty.</p>
          </article>

          <article className="benefit-item">
            <span>◇</span>
            <h3>Curated Collections</h3>
            <p>Fashion and accessories chosen with care.</p>
          </article>

          <article className="benefit-item">
            <span>♡</span>
            <h3>Shopping Made Easy</h3>
            <p>Browse your favourites and add them to your cart.</p>
          </article>
        </div>
      </section>

           
      {/* Final fashion banner before footer */}
      <section className="home-final-banner">
        <img
          src="/images/banner.jpg"
          alt="Elegant Baroque-inspired fashion collection"
          className="bottom-banner-image"
        />

        <div className="bottom-banner-content">
          <p className="section-eyebrow">THE ART OF ELEGANCE</p>

          <h2>Discover Your Signature Style</h2>

          <p>
            Explore timeless fashion, beautiful details and
            elegant designs made for every occasion.
          </p>

          <Link to="/shop" className="hero-button">
            SHOP THE COLLECTION
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Home;