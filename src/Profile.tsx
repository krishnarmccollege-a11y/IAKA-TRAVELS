import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="simple-page">

      <h1>👤 My Profile</h1>

      <p>Welcome to your AKA Travel profile.</p>

      <button onClick={() => navigate("/home")}>
        ← Back to Home
      </button>

    </div>
  );
}

export default Profile;