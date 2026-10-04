import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoVideo from "./assets/logo.mp4";
import "./IntroVideo.css";

function IntroVideo() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleVideoEnd = () => {
    navigate("/login");
  };

  const handleSkip = () => {
    navigate("/login");
  };

  return (
    <div className="intro-container">

      <video
        className="intro-video"
        src={logoVideo}
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
      />

      <div className="intro-dark-overlay"></div>

      <div className="intro-content">
        <p className="welcome-text">
          WELCOME TO
        </p>

        <h1>IAKA TRAVELS</h1>

        <p className="tagline">
          EXPLORE • EXPERIENCE • REMEMBER
        </p>
      </div>

      <button
        className="skip-button"
        onClick={handleSkip}
      >
        Skip →
      </button>

    </div>
  );
}

export default IntroVideo;