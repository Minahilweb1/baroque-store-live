
function Contact() {
  function handleContact(event) {
    event.preventDefault();

    alert("Thank you for contacting Baroque Inspired Store!");
    event.target.reset();
  }

  return (
    <section id="contact" className="contact-section">
      <p className="hero-subtitle">GET IN TOUCH</p>

      <h2>Contact Us</h2>

      <p>
        Have a question about our collection? We would love to hear
        from you.
      </p>

      <form onSubmit={handleContact}>
        <label htmlFor="contact-name">Your Name</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="contact-email">Your Email</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="contact-message">Your Message</label>
        <textarea
          id="contact-message"
          name="message"
          placeholder="Write your message..."
          rows="5"
          required
        />

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
