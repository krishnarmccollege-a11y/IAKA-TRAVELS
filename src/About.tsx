import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", padding: "40px", textAlign: "center" }}>

      <button onClick={() => navigate("/home")}>
        ← Home
      </button>

      <h1>🌍 About AKA Travels</h1>

      <h2>
        Emotion is to Travel ❤️
      </h2>

      <p>
        AKA Travels is designed as a digital travel platform
        where travelers can discover destinations, compare
        travel packages, explore stays and plan journeys.
      </p>

      <p>
        Our goal is to combine travel discovery,
        destination information, booking tools and
        an AI travel assistant into one platform.
      </p>

      <h3>
        Explore • Experience • Remember
      </h3>

      <footer>
        @AKA travels .in
      </footer>

    </div>
  );
}

export default About;