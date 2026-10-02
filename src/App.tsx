import { Routes, Route } from "react-router-dom";

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

      <Route
        path="/"
        element={<IntroVideo />}
      />

      <Route
        path="/login"
        element={<IakaTravelAuth />}
      />

      <Route
        path="/home"
        element={<Home />}
      />

      <Route
        path="/destinations"
        element={<Destinations />}
      />

      <Route
        path="/destination/:id"
        element={<DestinationDetails />}
      />

      <Route
        path="/packages"
        element={<Packages />}
      />

      <Route
        path="/hotels"
        element={<Hotels />}
      />

      <Route
        path="/flights"
        element={<Flights />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />

      <Route
        path="/booking"
        element={<Booking />}
      />

      <Route
        path="/policy"
        element={<Policy />}
      />

      <Route
        path="/chatbot"
        element={<Chatbot />}
      />

    </Routes>
  );
}

export default App;