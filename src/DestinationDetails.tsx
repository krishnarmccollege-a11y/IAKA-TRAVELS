import {
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

import { destinationData } from "./destinationData";

import "./DestinationDetails.css";


function DestinationDetails() {

  const navigate = useNavigate();

  const { id } = useParams();

  const [searchParams] = useSearchParams();


  /*
   * Supports BOTH:
   *
   * /destination/shirdi
   *
   * AND
   *
   * /destination-details?name=Shirdi
   */

  const queryName =
    searchParams.get("name");


  /*
   * Find destination by ID first.
   */
  let place = destinationData
    .flatMap((state) => state.places)
    .find(
      (item) =>
        item.id.toLowerCase() ===
        (id || "").toLowerCase()
    );


  /*
   * If ID was not found,
   * try old ?name= URL.
   */
  if (!place && queryName) {

    place = destinationData
      .flatMap((state) => state.places)
      .find(
        (item) =>
          item.name.toLowerCase() ===
          queryName.toLowerCase()
      );

  }


  /*
   * =========================
   * NOT FOUND
   * =========================
   */

  if (!place) {

    return (

      <div className="details-page">

        <header className="details-header">

          <button
            className="details-back-button"
            onClick={() =>
              navigate("/destinations")
            }
          >
            ← Back to Destinations
          </button>

          <h1>
            Destination Details
          </h1>

          <button
            className="details-booking-button"
            onClick={() =>
              navigate("/booking")
            }
          >
            🎫 Book Trip
          </button>

        </header>


        <main className="not-found">

          <div className="not-found-icon">
            📍
          </div>

          <h1>
            Destination Not Found
          </h1>

          <p>
            Please select a destination
            from the destinations page.
          </p>

          <button
            className="explore-destinations-button"
            onClick={() =>
              navigate("/destinations")
            }
          >
            Explore Destinations
          </button>

        </main>

      </div>

    );
  }


  /*
   * =========================
   * GOOGLE MAP
   * =========================
   */

  const openMap = () => {

    const url =
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        place.name
      )}`;

    window.open(
      url,
      "_blank",
      "noopener,noreferrer"
    );

  };


  /*
   * =========================
   * RETURN
   * =========================
   */

  return (

    <div className="destination-detail">


      {/* =========================
          HEADER
      ========================= */}

      <header className="details-header">

        <button
          className="details-back-button"
          onClick={() =>
            navigate("/destinations")
          }
        >
          ← Back to Destinations
        </button>


        <h1>
          Destination Details
        </h1>


        <button
          className="details-booking-button"
          onClick={() =>
            navigate("/booking")
          }
        >
          🎫 Book Trip
        </button>

      </header>


      {/* =========================
          HERO
      ========================= */}

      <section className="detail-hero">


        {/* DESTINATION IMAGE */}

        {place.image && (

          <div className="detail-image-container">

            <img
              src={place.image}
              alt={place.name}
              className="detail-image"

              onError={(e) => {
                console.error(
                  "Details image not found:",
                  e.currentTarget.src
                );
              }}
            />

          </div>

        )}


        <div className="big-place-icon">
          {place.emoji}
        </div>


        <h1>
          {place.name}
        </h1>


        <p>
          {place.description}
        </p>


        <button
          className="hero-map-button"
          onClick={openMap}
        >
          📍 Open Google Maps
        </button>

      </section>


      {/* =========================
          GOOGLE MAP
      ========================= */}

      <section className="map-section">

        <div className="map-heading">

          <div>

            <h2>
              📍 Location Map
            </h2>

            <p>
              {place.name}
            </p>

          </div>


          <button
            className="map-open-button"
            onClick={openMap}
          >
            Open in Google Maps ↗
          </button>

        </div>


        <div className="map-container">

          <iframe
            title={`${place.name} Google Map`}

            src={
              `https://www.google.com/maps?q=${encodeURIComponent(
                place.name
              )}&output=embed`
            }

            width="100%"

            height="450"

            style={{
              border: 0,
            }}

            loading="lazy"

            allowFullScreen

            referrerPolicy="no-referrer-when-downgrade"
          />

        </div>

      </section>


      {/* =========================
          TRAVEL ROAD MAP
      ========================= */}

      <section className="road-map">

        <h2>
          🛣️ Travel Road Map
        </h2>


        <div className="route-line">

          {place.route
            .split("→")
            .map(
              (location, index, locations) => (

                <div
                  className="route-point"
                  key={`${location}-${index}`}
                >

                  <span>
                    📍
                  </span>

                  <strong>
                    {location.trim()}
                  </strong>


                  {index <
                    locations.length - 1 && (

                    <b>
                      →
                    </b>

                  )}

                </div>

              )
            )}

        </div>

      </section>


      {/* =========================
          INFORMATION GRID
      ========================= */}

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


      {/* =========================
          BOOK SECTION
      ========================= */}

      <section className="book-section">

        <h2>
          Ready to explore{" "}
          {place.name}?
        </h2>


        <p>
          Plan your trip and start
          your journey today.
        </p>


        <button
          onClick={() =>
            navigate("/booking")
          }
        >
          🎫 Book This Trip
        </button>

      </section>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="details-footer">

        © AKA Travels.in

      </footer>

    </div>

  );
}


/*
 * =========================
 * INFO BOX
 * =========================
 */

interface InfoBoxProps {

  icon: string;

  title: string;

  items: string[];

}


function InfoBox({
  icon,
  title,
  items,
}: InfoBoxProps) {

  return (

    <section className="info-box">

      <h2>
        {icon} {title}
      </h2>


      <ul>

        {items.map(
          (item, index) => (

            <li
              key={`${item}-${index}`}
            >
              ✓ {item}
            </li>

          )
        )}

      </ul>

    </section>

  );

}


export default DestinationDetails;