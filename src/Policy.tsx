import { useNavigate } from "react-router-dom";
import "./Policy.css";

function Policy() {
  const navigate = useNavigate();

  return (
    <div className="policy-page">

      <header className="policy-header">
        <h1>✈️ AKA TRAVELS</h1>

        <button onClick={() => navigate("/home")}>
          ← Back Home
        </button>
      </header>

      <main className="policy-container">

        <div className="policy-title">
          <h2>Travel Policy</h2>
          <p>
            Please read our booking and cancellation policies
            before making your reservation.
          </p>
        </div>

        <section className="policy-card">
          <h3>🎫 Booking Policy</h3>

          <p>
            Customers can book flights, hotels, travel packages
            and other available travel services through AKA Travels.
          </p>

          <ul>
            <li>Enter correct customer information.</li>
            <li>Check travel dates before confirming.</li>
            <li>Keep your booking confirmation safely.</li>
          </ul>
        </section>

        <section className="policy-card">
          <h3>❌ Cancellation Policy</h3>

          <p>
            Customers can request cancellation through the
            Booking page.
          </p>

          <div className="policy-highlight">
            <strong>Refund Information:</strong>
            <p>
              Refund requests are subject to the applicable
              booking conditions and cancellation charges.
              Your final refund amount can depend on the
              airline, hotel, package or service provider.
            </p>
          </div>
        </section>

        <section className="policy-card">
          <h3>💰 Refund Policy</h3>

          <p>
            If a booking is eligible for a refund, the refund
            will be processed according to the applicable
            booking terms.
          </p>

          <ul>
            <li>Cancellation request must be submitted through the booking system.</li>
            <li>Refund eligibility depends on the service booked.</li>
            <li>Applicable cancellation charges may be deducted.</li>
            <li>Processing time may vary depending on the payment provider.</li>
          </ul>
        </section>

        <section className="policy-card">
          <h3>🔐 Privacy Policy</h3>

          <p>
            Customer information should be used only for
            providing travel-related services and support.
          </p>
        </section>

      </main>

      <footer className="policy-footer">
        © 2026 AKA Travels.in — Emotion is to Travel ❤️
      </footer>

    </div>
  );
}

export default Policy;