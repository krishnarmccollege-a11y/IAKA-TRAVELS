import { Routes, Route, Navigate } from "react-router-dom";

import IntroVideo from "./IntroVideo";
import IakaTravelAuth from "./IakaTravelAuth";
import Home from "./Home";
import Destinations from "./Destinations";
import DestinationDetails from "./DestinationDetails";
import Packages from "./Packages";
import Hotels from "./Hotels";
import About from "./About";
import Contact from "./Contact";
import Flights from "./Flights";
import Booking from "./Booking";
import Policy from "./Policy";
import Chatbot from "./Chatbot";

function App() {
  return (
    <Routes>

      {/* =========================
          INTRO VIDEO
      ========================= */}
      <Route
        path="/"
        element={<IntroVideo />}
      />


      {/* =========================
          LOGIN
      ========================= */}
      <Route
        path="/login"
        element={<IakaTravelAuth />}
      />


      {/* =========================
          HOME
      ========================= */}
      <Route
        path="/home"
        element={<Home />}
      />


      {/* =========================
          DESTINATIONS
      ========================= */}
      <Route
        path="/destinations"
        element={<Destinations />}
      />


      {/* =========================
          DESTINATION DETAILS
          Example:
          /destination/shirdi
      ========================= */}
      <Route
        path="/destination/:id"
        element={<DestinationDetails />}
      />


      {/* =========================
          OLD DETAILS URL SUPPORT
          Example:
          /destination-details?name=Shirdi
      ========================= */}
      <Route
        path="/destination-details"
        element={<DestinationDetails />}
      />


      {/* =========================
          PACKAGES
      ========================= */}
      <Route
        path="/packages"
        element={<Packages />}
      />


      {/* =========================
          HOTELS
      ========================= */}
      <Route
        path="/hotels"
        element={<Hotels />}
      />


      {/* =========================
          FLIGHTS
      ========================= */}
      <Route
        path="/flights"
        element={<Flights />}
      />


      {/* =========================
          ABOUT
      ========================= */}
      <Route
        path="/about"
        element={<About />}
      />


      {/* =========================
          CONTACT
      ========================= */}
      <Route
        path="/contact"
        element={<Contact />}
      />


      {/* =========================
          BOOKING
      ========================= */}
      <Route
        path="/booking"
        element={<Booking />}
      />


      {/* =========================
          POLICY
      ========================= */}
      <Route
        path="/policy"
        element={<Policy />}
      />


      {/* =========================
          CHATBOT
      ========================= */}
      <Route
        path="/chatbot"
        element={<Chatbot />}
      />


      {/* =========================
          UNKNOWN URL
      ========================= */}
      <Route
        path="*"
        element={
          <Navigate
            to="/destinations"
            replace
          />
        }
      />

    </Routes>
  );
}

export default App;