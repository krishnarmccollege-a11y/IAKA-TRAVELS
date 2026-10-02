import { useNavigate } from "react-router-dom";
import "./Packages.css";

const packages = [
  {
    name: "Easy Explorer",
    price: 10000,
    icon: "🌱",
    duration: "3 Days / 2 Nights",
    includes: [
      "Budget hotel",
      "Breakfast",
      "Local transportation",
      "Selected attractions",
      "Basic travel support"
    ]
  },
  {
    name: "Comfort Explorer",
    price: 20000,
    icon: "⭐",
    duration: "5 Days / 4 Nights",
    includes: [
      "3-star hotel",
      "Breakfast + selected meals",
      "Local sightseeing",
      "Transport",
      "Popular parks & attractions",
      "24/7 travel support"
    ]
  },
  {
    name: "Royal Explorer",
    price: 40000,
    icon: "👑",
    duration: "7 Days / 6 Nights",
    includes: [
      "Premium hotel",
      "Meals",
      "Private/local transport",
      "Major attractions",
      "Parks & experiences",
      "Priority support",
      "Personalized itinerary"
    ]
  }
];

function Packages() {
  const navigate = useNavigate();

  return (
    <div className="packages-page">

      <header>
        <button onClick={() => navigate("/home")}>
          ← AKA Travels
        </button>

        <h1>Travel Packages</h1>

        <button onClick={() => navigate("/booking")}>
          🎫 Booking
        </button>
      </header>

      <section className="packages-intro">

        <p>TRAVEL ACCORDING TO YOUR BUDGET</p>

        <h2>
          Choose Your Travel Experience
        </h2>

      </section>

      <div className="package-grid">

        {packages.map((item) => (

          <div
            className="package-card"
            key={item.name}
          >

            <div className="package-icon">
              {item.icon}
            </div>

            <h2>{item.name}</h2>

            <div className="package-price">
              ₹{item.price.toLocaleString("en-IN")}
            </div>

            <p>{item.duration}</p>

            <ul>
              {item.includes.map((include) => (
                <li key={include}>
                  ✓ {include}
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate("/booking")}
            >
              Book Package
            </button>

          </div>

        ))}

      </div>

      <p className="package-note">
        * Prices shown are example package budgets.
        Actual prices can change according to dates,
        destination, hotel, transport and availability.
      </p>

    </div>
  );
}

export default Packages;