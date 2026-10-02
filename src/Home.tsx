import { useNavigate } from "react-router-dom";
import Chatbot from "./Chatbot";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const destinations = [
    {
      name: "Maharashtra",
      place: "Mahabaleshwar",
      emoji: "🌄"
    },
    {
      name: "Andhra Pradesh",
      place: "Araku Valley",
      emoji: "🏔️"
    },
    {
      name: "Uttar Pradesh",
      place: "Varanasi",
      emoji: "🛕"
    },
    {
      name: "Tamil Nadu",
      place: "Ooty",
      emoji: "🌿"
    },
    {
      name: "Rajasthan",
      place: "Jaipur",
      emoji: "🏰"
    }
  ];

  return (
    <div className="home-page">

      {/* HEADER */}

      <header className="main-header">

        <div
          className="logo"
          onClick={() => navigate("/home")}
        >
          <span>🌍</span>

          <div>
            <strong>AKA</strong>
            <small>Travels</small>
          </div>
        </div>

        <nav>

          <button onClick={() => navigate("/home")}>
            🏠 Home
          </button>

          <button onClick={() => navigate("/destinations")}>
            📍 Destinations
          </button>

          <button onClick={() => navigate("/packages")}>
            🎒 Packages
          </button>

          <button onClick={() => navigate("/hotels")}>
            🏨 Hotels
          </button>

          <button onClick={() => navigate("/about")}>
            ℹ️ About
          </button>

          <button onClick={() => navigate("/contact")}>
            ☎️ Contact
          </button>

          <button onClick={() => navigate("/booking")}>
            🎫 Booking
          </button>

          <button onClick={() => navigate("/policy")}>
            📜 Policy
          </button>

        </nav>

      </header>

      {/* HERO */}

      <section className="hero-section">

        <div className="hero-content">

          <p className="welcome">
            WELCOME TO AKA TRAVELS
          </p>

          <h1>
            Your Dream Journey
            <br />
            Starts <span>Here</span>
          </h1>

          <p>
            Discover India with AKA Travels.
            Explore destinations, hotels,
            restaurants, parks and unforgettable
            experiences.
          </p>

          <div className="hero-buttons">

            <button
              onClick={() => navigate("/destinations")}
            >
              Explore Destinations
            </button>

            <button
              onClick={() => navigate("/packages")}
            >
              View Packages
            </button>

          </div>

        </div>

        {/* SEARCH */}

        <div className="travel-search">

          <h3>✈️ Plan Your Journey</h3>

          <div className="search-grid">

            <input placeholder="From" />

            <input placeholder="Destination" />

            <input
              type="date"
            />

            <select>
              <option>Travel Type</option>
              <option>Family</option>
              <option>Couple</option>
              <option>Solo</option>
              <option>Friends</option>
            </select>

          </div>

          <button
            onClick={() => navigate("/destinations")}
          >
            🔎 Search Trips
          </button>

        </div>

      </section>

      {/* FEATURES */}

      <section className="features">

        <div>
          <span>✈️</span>
          <strong>Best Prices</strong>
          <small>Affordable travel plans</small>
        </div>

        <div>
          <span>🛡️</span>
          <strong>Safe & Secure</strong>
          <small>Trusted travel service</small>
        </div>

        <div>
          <span>🎧</span>
          <strong>24/7 Support</strong>
          <small>Travel assistance</small>
        </div>

        <div>
          <span>🌎</span>
          <strong>Indian Destinations</strong>
          <small>Explore amazing places</small>
        </div>

      </section>

      {/* DESTINATIONS */}

      <section className="popular-section">

        <div className="section-title">
          <p>POPULAR DESTINATIONS</p>

          <h2>
            Explore Top Destinations
          </h2>
        </div>

        <div className="destination-cards">

          {destinations.map((item) => (

            <div
              className="destination-card"
              key={item.name}
              onClick={() => navigate("/destinations")}
            >

              <div className="destination-image">
                {item.emoji}
              </div>

              <h3>{item.place}</h3>

              <p>📍 {item.name}</p>

              <span>
                Explore →
              </span>

            </div>

          ))}

        </div>

      </section>

      {/* PACKAGES */}

      <section className="package-banner">

        <div>

          <p>SPECIAL TRAVEL PACKAGES</p>

          <h2>
            Travel More. Spend Smarter.
          </h2>

          <p>
            Choose a package according to
            your travel budget.
          </p>

          <button
            onClick={() => navigate("/packages")}
          >
            View Packages →
          </button>

        </div>

      </section>

      {/* CHATBOT */}

      <Chatbot />

      {/* FOOTER */}

      <footer>

        <h2>🌍 AKA Travels</h2>

        <p>
          Emotion is to Travel ❤️
        </p>

        <p>
          Explore • Experience • Remember
        </p>

        <hr />

        <p>
          @AKA travels .in
        </p>

      </footer>

    </div>
  );
}

export default Home;