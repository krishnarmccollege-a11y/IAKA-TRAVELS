import { useNavigate, useParams } from "react-router-dom";
import { destinationData } from "./destinationData";
import "./DestinationDetails.css";

function DestinationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const place = destinationData
    .flatMap((state) => state.places)
    .find((item) => item.id === id);

  if (!place) {
    return (
      <div className="not-found">
        <h1>Destination not found</h1>

        <button onClick={() => navigate("/destinations")}>
          Back to Destinations
        </button>
      </div>
    );
  }

  const openMap = () => {
    const url =
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        place.name
      )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="destination-detail">

      <header>

        <button
          onClick={() => navigate("/destinations")}
        >
          ← Destinations
        </button>

        <button
          onClick={() => navigate("/booking")}
        >
          🎫 Book Trip
        </button>

      </header>

      <section className="detail-hero">

        <div className="big-place-icon">
          {place.emoji}
        </div>

        <h1>{place.name}</h1>

        <p>{place.description}</p>

        <button onClick={openMap}>
          📍 Open Google Maps
        </button>

      </section>

      <div className="road-map">

        <h2>🛣️ Travel Road Map</h2>

        <div className="route-line">

          {place.route
            .split("→")
            .map((location, index) => (

              <div
                className="route-point"
                key={index}
              >

                <span>
                  📍
                </span>

                <strong>
                  {location.trim()}
                </strong>

                {index <
                  place.route.split("→").length - 1 && (
                  <b>→</b>
                )}

              </div>

            ))}

        </div>

      </div>

      <div className="detail-grid">

        <InfoBox
          icon="🏛️"
          title="Famous Places"
          items={place.attractions}
        />

        <InfoBox
          icon="🏨"
          title="Hotels"
          items={place.hotels}
        />

        <InfoBox
          icon="🍛"
          title="Restaurants"
          items={place.restaurants}
        />

        <InfoBox
          icon="🌳"
          title="Parks & Gardens"
          items={place.parks}
        />

      </div>

      <section className="book-section">

        <h2>
          Ready to explore {place.name}?
        </h2>

        <button
          onClick={() => navigate("/booking")}
        >
          🎫 Book This Trip
        </button>

      </section>

      <footer>
        @AKA travels .in
      </footer>

    </div>
  );
}

interface InfoBoxProps {
  icon: string;
  title: string;
  items: string[];
}

function InfoBox({
  icon,
  title,
  items
}: InfoBoxProps) {

  return (
    <section className="info-box">

      <h2>
        {icon} {title}
      </h2>

      <ul>
        {items.map((item) => (
          <li key={item}>
            ✓ {item}
          </li>
        ))}
      </ul>

    </section>
  );
}

export default DestinationDetails;