import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import "./Booking.css";

interface BookingData {
  id: string;
  name: string;
  email: string;
  destination: string;
  travelDate: string;
  guests: number;
  amount: number;
  createdAt: number;
  status: "Confirmed" | "Cancelled";
}

function Booking() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState<BookingData[]>([]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const [guests, setGuests] = useState(1);
  const [amount, setAmount] = useState(10000);

  useEffect(() => {
    const saved = localStorage.getItem("akaBookings");

    if (saved) {
      try {
        setBookings(JSON.parse(saved));
      } catch {
        setBookings([]);
      }
    }
  }, []);

  const saveBookings = (items: BookingData[]) => {
    setBookings(items);

    localStorage.setItem(
      "akaBookings",
      JSON.stringify(items)
    );
  };

  const handleBooking = (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !destination.trim() ||
      !travelDate
    ) {
      alert("Please fill all booking details.");
      return;
    }

    const booking: BookingData = {
      id: "AKA-" + Date.now(),
      name,
      email,
      destination,
      travelDate,
      guests,
      amount,
      createdAt: Date.now(),
      status: "Confirmed",
    };

    saveBookings([
      ...bookings,
      booking,
    ]);

    alert(
      `Booking confirmed!\nBooking ID: ${booking.id}`
    );

    setName("");
    setEmail("");
    setDestination("");
    setTravelDate("");
    setGuests(1);
    setAmount(10000);
  };

  const cancelBooking = (id: string) => {
    const booking = bookings.find(
      (item) => item.id === id
    );

    if (!booking) {
      return;
    }

    const twoDays =
      2 * 24 * 60 * 60 * 1000;

    const timePassed =
      Date.now() - booking.createdAt;

    if (timePassed > twoDays) {
      alert(
        "The 2-day refund period has expired. Cancellation may be processed according to the applicable booking terms."
      );
      return;
    }

    const updated = bookings.map((item) =>
      item.id === id
        ? {
            ...item,
            status: "Cancelled" as const,
          }
        : item
    );

    saveBookings(updated);

    alert(
      "Booking cancelled successfully. Refund eligibility is within the 2-day policy window."
    );
  };

  return (
    <div className="booking-page">

      <header className="booking-header">

        <button
          type="button"
          onClick={() => navigate("/home")}
        >
          ← AKA Travels
        </button>

        <h1>🎫 Booking Center</h1>

        <button
          type="button"
          onClick={() => navigate("/policy")}
        >
          📜 Policy
        </button>

      </header>

      <div className="booking-container">

        <form
          className="booking-form"
          onSubmit={handleBooking}
        >

          <h2>Book Your Journey</h2>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Destination"
            value={destination}
            onChange={(e) =>
              setDestination(e.target.value)
            }
          />

          <label>
            Travel Date
          </label>

          <input
            type="date"
            value={travelDate}
            onChange={(e) =>
              setTravelDate(e.target.value)
            }
          />

          <label>
            Guests
          </label>

          <input
            type="number"
            min="1"
            value={guests}
            onChange={(e) =>
              setGuests(Number(e.target.value))
            }
          />

          <label>
            Package Budget
          </label>

          <select
            value={amount}
            onChange={(e) =>
              setAmount(Number(e.target.value))
            }
          >
            <option value={10000}>
              Easy — ₹10,000
            </option>

            <option value={20000}>
              Medium — ₹20,000
            </option>

            <option value={40000}>
              High — ₹40,000
            </option>
          </select>

          <button type="submit">
            Confirm Booking
          </button>

        </form>

        <section className="booking-list">

          <h2>Your Bookings</h2>

          {bookings.length === 0 && (
            <p>No bookings yet.</p>
          )}

          {bookings.map((booking) => (

            <div
              className="booking-item"
              key={booking.id}
            >

              <h3>
                {booking.destination}
              </h3>

              <p>
                Booking ID: {booking.id}
              </p>

              <p>
                Traveler: {booking.name}
              </p>

              <p>
                Email: {booking.email}
              </p>

              <p>
                Date: {booking.travelDate}
              </p>

              <p>
                Guests: {booking.guests}
              </p>

              <p>
                Amount: ₹
                {booking.amount.toLocaleString(
                  "en-IN"
                )}
              </p>

              <strong>
                Status: {booking.status}
              </strong>

              {booking.status === "Confirmed" && (

                <button
                  type="button"
                  onClick={() =>
                    cancelBooking(booking.id)
                  }
                >
                  Cancel Booking
                </button>

              )}

            </div>

          ))}

        </section>

      </div>

      <footer className="booking-footer">
        @AKA travels.in
      </footer>

    </div>
  );
}

export default Booking;