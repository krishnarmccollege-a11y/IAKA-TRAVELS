import { useNavigate } from "react-router-dom";
import { destinationData } from "./destinationData";
import "./Destinations.css";

function Destinations() {
  const navigate = useNavigate();

  const openMap = (route: string) => {
    const destination = route.split("→").pop()?.trim() || "";

    const url =
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        destination
      )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="destinations-page">

      <header className="destination-header">

        <button onClick={() => navigate("/home")}>
          ← AKA Travels
        </button>

        <h1>Explore India 🇮🇳</h1>

        <button onClick={() => navigate("/booking")}>
          🎫 Booking
        </button>

      </header>

      <div className="destination-intro">

        <p>EXPLORE • EXPERIENCE • REMEMBER</p>

        <h2>
          Famous Places Across India
        </h2>

        <span>
          Select a destination to discover attractions,
          hotels, restaurants, parks and travel routes.
        </span>

      </div>

      <main>

        {destinationData.map((state) => (

          <section
            className="state-section"
            key={state.state}
          >

            <div className="state-title">

              <h2>
                {state.emoji} {state.state}
              </h2>

              <span>
                {state.places.length} destinations
              </span>

            </div>

            <div className="place-grid">

              {state.places.map((place) => (

                <article
                  className="place-card"
                  key={place.id}
                >

                  <div className="place-icon">
                    {place.emoji}
                  </div>

                  <h3>
                    {place.name}
                  </h3>

                  <p className="route">
                    🛣️ {place.route}
                  </p>

                  <p>
                    {place.description}
                  </p>

                  <div className="place-actions">

                    <button
                      onClick={() =>
                        openMap(place.route)
                      }
                    >
                      📍 Open Map
                    </button>

                    <button
                      onClick={() =>
                        navigate(`/destinations/${place.id}`)
                      }
                    >
                      Explore →
                    </button>

                  </div>

                </article>

              ))}

            </div>

          </section>

        ))}

      </main>

    </div>
  );
}

export default Destinations;