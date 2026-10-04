import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const destinations = [
    {
      name: "Mahabaleshwar",
      state: "Maharashtra",
      image: "/images/mahabaleshwar.jpg",
      id: "mahabaleshwar",
    },
    {
      name: "Araku Valley",
      state: "Andhra Pradesh",
      image: "/images/araku-valley.jpg",
      id: "araku-valley",
    },
    {
      name: "Varanasi",
      state: "Uttar Pradesh",
      image: "/images/varanasi.jpg",
      id: "varanasi",
    },
    {
      name: "Ooty",
      state: "Tamil Nadu",
      image: "/images/ooty.jpg",
      id: "ooty",
    },
    {
      name: "Jaipur",
      state: "Rajasthan",
      image: "/images/jaipur.jpg",
      id: "jaipur",
    },
  ];

  return (
    <div className="home-page">

      {/* KEEP YOUR EXISTING HEADER HERE */}

      <main className="home-content">

        <div className="popular-title">
          <span>POPULAR DESTINATIONS</span>
          <h1>Explore Top Destinations</h1>
        </div>

        <div className="destination-cards">

          {destinations.map((destination) => (
            <div className="destination-card" key={destination.id}>

              {/* REAL DESTINATION IMAGE */}
              <div className="destination-image-box">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="destination-real-image"
                />
              </div>

              <div className="destination-card-content">

                <h2>{destination.name}</h2>

                <p>
                  <span className="location-icon">📍</span>
                  {destination.state}
                </p>

                <button
                  className="explore-button"
                  onClick={() =>
                    navigate(`/destination/${destination.id}`)
                  }
                >
                  Explore →
                </button>

              </div>
            </div>
          ))}

        </div>

        {/* KEEP YOUR EXISTING SPECIAL TRAVEL PACKAGES SECTION HERE */}

      </main>

      {/* KEEP YOUR EXISTING CHATBOT HERE */}

    </div>
  );
}

export default Home;