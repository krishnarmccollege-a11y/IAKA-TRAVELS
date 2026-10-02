import { useState } from "react";
import "./Chatbot.css";

interface Message {
  sender: "user" | "bot";
  text: string;
}

function getBotAnswer(question: string): string {

  const q = question.toLowerCase();

  if (
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("hey")
  ) {
    return "Hello! 👋 Welcome to AKA Travels. How can I help you with your journey?";
  }

  if (
    q.includes("package") ||
    q.includes("budget") ||
    q.includes("price")
  ) {
    return "We currently provide example travel budgets of ₹10,000, ₹20,000 and ₹40,000. Open Packages to compare what's included.";
  }

  if (
    q.includes("refund") ||
    q.includes("cancel")
  ) {
    return "Our stated demo policy allows refund eligibility requests within 2 days (48 hours) from booking creation. Open Booking or Policy for details.";
  }

  if (
    q.includes("hotel")
  ) {
    return "AKA Travels provides destination-based hotel suggestions. Open Destinations and select a place to see its hotel information.";
  }

  if (
    q.includes("restaurant") ||
    q.includes("food")
  ) {
    return "You can explore restaurant suggestions on each destination's detail page.";
  }

  if (
    q.includes("maharashtra")
  ) {
    return "Maharashtra destinations include Shirdi, Raigad Fort, Mahabaleshwar, Alibaug and Trimbakeshwar.";
  }

  if (
    q.includes("rajasthan")
  ) {
    return "Rajasthan destinations include Jaipur, Udaipur, Jodhpur, Jaisalmer, Mount Abu and Pushkar.";
  }

  if (
    q.includes("uttar") ||
    q.includes("varanasi") ||
    q.includes("ayodhya") ||
    q.includes("agra")
  ) {
    return "Uttar Pradesh destinations include Agra, Ayodhya, Varanasi, Mathura & Vrindavan, Prayagraj and Lucknow.";
  }

  if (
    q.includes("tamil") ||
    q.includes("ooty") ||
    q.includes("chennai")
  ) {
    return "Tamil Nadu destinations include Chennai, Ooty, Kodaikanal, Rameswaram, Kanyakumari and Mahabalipuram.";
  }

  if (
    q.includes("andhra") ||
    q.includes("tirupati") ||
    q.includes("araku")
  ) {
    return "Andhra Pradesh destinations include Tirupati, Visakhapatnam, Araku Valley, Srisailam and Amaravati.";
  }

  if (
    q.includes("book") ||
    q.includes("ticket")
  ) {
    return "You can create a booking from the Booking Center. Choose your destination, date, guests and package budget.";
  }

  if (
    q.includes("route") ||
    q.includes("map")
  ) {
    return "Open Destinations, select a place and use the Open Map button to view the destination on Google Maps.";
  }

  if (
    q.includes("contact") ||
    q.includes("support")
  ) {
    return "You can use the Contact page for customer support information.";
  }

  return "I can help with destinations, road maps, hotels, restaurants, packages, booking, cancellation and refund information. Please tell me what you need. 😊";
}

function Chatbot() {

  const [open, setOpen] = useState(false);

  const [messages, setMessages] =
    useState<Message[]>([
      {
        sender: "bot",
        text:
          "Hi! 👋 I am AKA Travel Assistant. Ask me anything about your journey."
      }
    ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {

    if (!input.trim()) return;

    const userMessage: Message = {
      sender: "user",
      text: input
    };

    const botMessage: Message = {
      sender: "bot",
      text: getBotAnswer(input)
    };

    setMessages((old) => [
      ...old,
      userMessage,
      botMessage
    ]);

    setInput("");
  };

  return (
    <>
      {!open && (
        <button
          className="chat-launcher"
          onClick={() => setOpen(true)}
        >
          🤖
          <span>AKA AI</span>
        </button>
      )}

      {open && (

        <div className="chat-window">

          <div className="chat-header">

            <strong>
              🤖 AKA Travel Assistant
            </strong>

            <button
              onClick={() => setOpen(false)}
            >
              ×
            </button>

          </div>

          <div className="chat-messages">

            {messages.map((message, index) => (

              <div
                key={index}
                className={
                  message.sender === "user"
                    ? "message user-message"
                    : "message bot-message"
                }
              >
                {message.text}
              </div>

            ))}

          </div>

          <div className="chat-input">

            <input
              value={input}
              placeholder="Ask AKA AI..."
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
            />

            <button onClick={sendMessage}>
              ➤
            </button>

          </div>

        </div>

      )}
    </>
  );
}

export default Chatbot;