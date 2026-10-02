import { useNavigate } from "react-router-dom";
import "./Splash.css";

function Splash() {
  const navigate = useNavigate();

  return (
    <div className="splash-page">

      <video
        className="splash-video"
        src="/iaka-logo.mp4"
        autoPlay
        muted
        playsInline
        onEnded={() => navigate("/login")}
      />

      <button
        className="skip-button"
        onClick={() => navigate("/login")}
      >
        Continue
      </button>

    </div>
  );
}

export default Splash;