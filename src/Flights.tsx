import { useNavigate } from "react-router-dom";

function Flights() {
  const navigate = useNavigate();

  return (
    <div className="simple-page">

      <h1>✈ Flights</h1>

      <p>
        Search and book your flights.
      </p>

      <button onClick={() => navigate("/home")}>
        ← Back to Home
      </button>

    </div>
  );
}

export default Flights;