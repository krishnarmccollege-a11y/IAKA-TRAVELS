import { useNavigate } from "react-router-dom";
import "./Hotels.css";

const hotels = [
  {
    name: "Taj Hotels",
    location: "Multiple Indian Destinations",
    type: "Premium",
    icon: "🏨"
  },
  {
    name: "ITC Hotels",
    location: "Major Indian Cities",
    type: "Luxury",
    icon: "🏨"
  },
  {
    name: "AKA Budget Stays",
    location: "Travel Destinations",
    type: "Budget",
    icon: "🛏️"
  },
  {
    name: "AKA Family Resorts",
    location: "Hill Stations & Beaches",
    type: "Family",
    icon: "🏝️"
  }
];

function Hotels() {
  const navigate = useNavigate();

  return (
    <div className="hotels-page">

      <header>

        <button onClick={() => navigate("/home")}>
          ← AKA Travels
        </button>

        <h1>🏨 Hotels</h1>

        <button onClick={() => navigate("/booking")}>
          Book Trip
        </button>

      </header>

      <section className="hotel-intro">

        <p>STAY COMFORTABLY</p>

        <h2>
          Find Your Travel Stay
        </h2>

      </section>

      <div className="hotel-grid">

        {hotels.map((hotel) => (

          <div
            className="hotel-card"
            key={hotel.name}
          >

            <div>
              {hotel.icon}
            </div>

            <h2>{hotel.name}</h2>

            <p>📍 {hotel.location}</p>

            <strong>
              {hotel.type}
            </strong>

            <button
              onClick={() => navigate("/booking")}
            >
              Book Stay
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Hotels;