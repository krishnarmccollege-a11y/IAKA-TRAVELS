import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./IntroVideo.css";

function IntroVideo() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 8000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="intro-screen">

      <video
        className="intro-video"
        src="/logo.jpg.mp4"
        autoPlay
        muted
        playsInline
        onEnded={() => navigate("/login")}
      />

      <button
        className="intro-skip"
        onClick={() => navigate("/login")}
      >
        Skip →
      </button>

    </div>
  );
}

export default IntroVideo;