import { useNavigate } from "react-router-dom";
import "./Destinations.css";
import { destinationData } from "./destinationData";

function Destinations() {
  const navigate = useNavigate();

  return (
    <div className="destinations-page">

      {/* ================= HEADER ================= */}
      <header className="destinations-header">

        <button
          className="back-button"
          onClick={() => navigate("/home")}
        >
          ← Back
        </button>

        <div className="destinations-title">
          <h1>Destinations</h1>
          <p>EXPLORE INDIA</p>
        </div>

        <button
          className="booking-button"
          onClick={() => navigate("/booking")}
        >
          🎫 Booking
        </button>

      </header>


      {/* ================= INTRO ================= */}
      <section className="destination-intro">

        <h2>Explore Beautiful India</h2>

        <p>
          Discover famous destinations, historic places,
          beautiful landscapes and cultural experiences.
        </p>

      </section>


      {/* ================= STATES ================= */}
      {destinationData.map((state) => (

        <section
          className="state-section"
          key={state.state}
        >

          {/* STATE IMAGE */}
          <div className="state-banner">

            <img
              src={state.image}
              alt={state.state}
              className="state-banner-image"
            />

            <div className="state-overlay">

              <h2>{state.state}</h2>

              <span>
                {state.places.length} Destinations
              </span>

            </div>

          </div>


          {/* DESTINATION CARDS */}
          <div className="destination-grid">

            {state.places.map((destination) => (

              <div
                className="destination-card"
                key={destination.id}
                onClick={() =>
                  navigate(
                    `/destination/${destination.id}`
                  )
                }
              >

                {/* IMAGE */}
                <div className="destination-image-container">

                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="destination-image"
                    onError={(e) => {
                      console.error(
                        "Image not found:",
                        e.currentTarget.src
                      );
                    }}
                  />

                </div>


                {/* CONTENT */}
                <div className="destination-card-content">

                  <h3>
                    {destination.emoji}{" "}
                    {destination.name}
                  </h3>

                  <p className="destination-route">
                    📍 {destination.route}
                  </p>

                  <p className="destination-description">
                    {destination.description}
                  </p>

                  <button
                    className="explore-button"
                    onClick={(e) => {

                      e.stopPropagation();

                      navigate(
                        `/destination/${destination.id}`
                      );

                    }}
                  >
                    Explore →
                  </button>

                </div>

              </div>

            ))}

          </div>

        </section>

      ))}


      {/* ================= FOOTER ================= */}
      <footer className="destinations-footer">

        <h2>AKA Travels</h2>

        <p>
          Explore India • Discover New Places •
          Create Beautiful Memories
        </p>

      </footer>

    </div>
  );
}

export default Destinations;