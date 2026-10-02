import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !message) {
      alert("Please fill all fields.");
      return;
    }

    alert("Thank you! Your message has been received.");

    setName("");
    setMessage("");
  };

  return (
    <div className="contact-page">

      <header>
        <button onClick={() => navigate("/home")}>
          ← Home
        </button>

        <h1>☎️ Contact AKA Travels</h1>
      </header>

      <main>

        <section className="contact-info">

          <h2>We are here to help</h2>

          <p>
            📧 Email: support@akatravels.in
          </p>

          <p>
            ☎️ Customer Support: 24/7
          </p>

          <p>
            🤖 AI Travel Assistant: Available online
          </p>

        </section>

        <form onSubmit={sendMessage}>

          <input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Your Question"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </main>

    </div>
  );
}

export default Contact;