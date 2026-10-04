import { useNavigate } from "react-router-dom";
import Chatbot from "./Chatbot.tsx";
import "./Home.css";

// IAKA logo
import logoImage from "./assets/iaka-logo.png";

function Home() {
  const navigate = useNavigate();

  const destinations = [
    {
      name: "Maharashtra",
      place: "Mahabaleshwar",
      image: "/mahabaleshwar.jpg",
    },
    {
      name: "Andhra Pradesh",
      place: "Araku Valley",
      image: "/araku.jpg",
    },
    {
      name: "Uttar Pradesh",
      place: "Varanasi",
      image: "/varanasi.jpg",
    },
    {
      name: "Tamil Nadu",
      place: "Ooty",
      image: "/ooty.jpg",
    },
    {
      name: "Rajasthan",
      place: "Jaipur",
      image: "/jaipur.jpg",
    },
  ];

  return (
    <div className="home-page">

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="main-header">

        {/* LOGO */}

        <div
          className="logo"
          onClick={() => navigate("/home")}
        >

          <img
            src={logoImage}
            alt="IAKA Travels Logo"
            className="logo-image"
          />

          <div className="logo-text">

            <strong>IAKA</strong>

            <small>TRAVELS</small>

          </div>

        </div>


        {/* NAVIGATION */}

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


      {/* =========================================
          HERO SECTION
      ========================================= */}

      <section className="hero-section">

        <div className="hero-content">

          <p className="welcome">
            WELCOME TO IAKA TRAVELS
          </p>

          <h1>
            Your Dream Journey
            <br />
            Starts <span>Here</span>
          </h1>

          <p>
            Discover India with IAKA Travels.
            Explore destinations, hotels,
            restaurants, parks and unforgettable
            experiences.
          </p>


          {/* HERO BUTTONS */}

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


        {/* =========================================
            TRAVEL SEARCH
        ========================================= */}

        <div className="travel-search">

          <h3>
            ✈️ Plan Your Journey
          </h3>

          <div className="search-grid">

            <input
              type="text"
              placeholder="From"
            />

            <input
              type="text"
              placeholder="Destination"
            />

            <input
              type="date"
            />

            <select defaultValue="">
              <option value="" disabled>
                Travel Type
              </option>

              <option value="family">
                Family
              </option>

              <option value="couple">
                Couple
              </option>

              <option value="solo">
                Solo
              </option>

              <option value="friends">
                Friends
              </option>

            </select>

          </div>


          <button
            onClick={() => navigate("/destinations")}
          >
            🔎 Search Trips
          </button>

        </div>

      </section>


      {/* =========================================
          FEATURES
      ========================================= */}

      <section className="features">

        <div className="feature-item">

          <span>✈️</span>

          <strong>
            Best Prices
          </strong>

          <small>
            Affordable travel plans
          </small>

        </div>


        <div className="feature-item">

          <span>🛡️</span>

          <strong>
            Safe & Secure
          </strong>

          <small>
            Trusted travel service
          </small>

        </div>


        <div className="feature-item">

          <span>🎧</span>

          <strong>
            24/7 Support
          </strong>

          <small>
            Travel assistance
          </small>

        </div>


        <div className="feature-item">

          <span>🌎</span>

          <strong>
            Indian Destinations
          </strong>

          <small>
            Explore amazing places
          </small>

        </div>

      </section>


      {/* =========================================
          POPULAR DESTINATIONS
      ========================================= */}

      <section className="popular-section">

        <div className="section-title">

          <p>
            POPULAR DESTINATIONS
          </p>

          <h2>
            Explore Top Destinations
          </h2>

        </div>


        {/* DESTINATION CARDS */}

        <div className="destination-cards">

          {destinations.map((item) => (

            <div
              className="destination-card"
              key={item.name}
              onClick={() => navigate("/destinations")}
            >

              {/* IMAGE */}

              <div className="destination-image-box">

                <img
                  src={item.image}
                  alt={item.place}
                />

              </div>


              {/* INFORMATION */}

              <div className="destination-info">

                <h3>
                  {item.place}
                </h3>

                <p>
                  📍 {item.name}
                </p>

                <span>
                  Explore →
                </span>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================================
          PACKAGE BANNER
      ========================================= */}

      <section className="package-banner">

        <div>

          <p>
            SPECIAL TRAVEL PACKAGES
          </p>

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


      {/* =========================================
          CHATBOT
      ========================================= */}

      <Chatbot />


      {/* =========================================
          FOOTER
      ========================================= */}

      <footer>

        <h2>
          IAKA Travels
        </h2>

        <p>
          Emotion is to Travel ❤️
        </p>

        <p>
          Explore • Experience • Remember
        </p>

        <hr />

        <p>
          @IAKA travels .in
        </p>

      </footer>

    </div>
  );
}

export default Home;