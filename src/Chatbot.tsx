import { useEffect, useState } from "react";
import "./Chatbot.css";

interface Message {
  sender: "user" | "bot";
  text: string;
}

/* =========================
   OFFLINE CHATBOT
========================= */

function getBotAnswer(question: string): string {
  const q = question.toLowerCase().trim();

  // Greeting
  if (
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("hey") ||
    q.includes("namaste")
  ) {
    return "Hello! 👋 Welcome to IAKA Travels. How can I help you with your journey?";
  }

  // Booking problem
  if (
    q.includes("booking problem") ||
    q.includes("booking issue") ||
    q.includes("booking not") ||
    q.includes("booking failed")
  ) {
    return "I'm sorry you're facing a booking problem. 😟 Please check your destination, travel date, number of guests and payment status. If the problem continues, please contact our support team.";
  }

  // Payment problem
  if (
    q.includes("payment problem") ||
    q.includes("payment failed") ||
    q.includes("payment issue") ||
    q.includes("transaction failed")
  ) {
    return "For payment problems 💳, please check your internet connection and payment details. If money was deducted but your booking is not confirmed, please contact support with your transaction details.";
  }

  // Payment successful but booking not confirmed
  if (
    q.includes("money deducted") ||
    q.includes("money debited") ||
    q.includes("payment successful") ||
    q.includes("paid but")
  ) {
    return "If your money was deducted but the booking is not confirmed, don't worry. Please keep your transaction ID and contact customer support so the payment can be checked.";
  }

  // Booking / ticket
  if (
    q.includes("book") ||
    q.includes("ticket") ||
    q.includes("booking")
  ) {
    return "🎫 You can create a booking from the Booking Center. Choose your destination, travel date, number of guests and package.";
  }

  // Packages
  if (
    q.includes("package") ||
    q.includes("budget") ||
    q.includes("price") ||
    q.includes("cost")
  ) {
    return "💰 We currently provide example travel budgets of ₹10,000, ₹20,000 and ₹40,000. Open Packages to compare available options.";
  }

  // Refund
  if (
    q.includes("refund") ||
    q.includes("money back")
  ) {
    return "💰 Our demo policy allows refund eligibility requests within 2 days (48 hours) from booking creation. Please open the Policy page for complete details.";
  }

  // Cancellation
  if (
    q.includes("cancel") ||
    q.includes("cancellation")
  ) {
    return "❌ To cancel your trip, check your booking details and cancellation policy. Refund eligibility depends on the booking policy.";
  }

  // Hotel
  if (
    q.includes("hotel") ||
    q.includes("stay") ||
    q.includes("room")
  ) {
    return "🏨 IAKA Travels provides destination-based hotel suggestions. Open Destinations and select a place to see hotel information.";
  }

  // Restaurant
  if (
    q.includes("restaurant") ||
    q.includes("food") ||
    q.includes("eat")
  ) {
    return "🍛 You can explore restaurant suggestions on each destination's detail page.";
  }

  // Flight
  if (
    q.includes("flight") ||
    q.includes("airport") ||
    q.includes("plane")
  ) {
    return "✈️ For flight information, open the Flights section. You can check available flight-related information there.";
  }

  // Route / Map
  if (
    q.includes("route") ||
    q.includes("map") ||
    q.includes("location") ||
    q.includes("where")
  ) {
    return "📍 Open Destinations, select a place and use the Open Map button to view the destination on Google Maps.";
  }

  // Maharashtra
  if (q.includes("maharashtra")) {
    return "🏔️ Maharashtra destinations include Shirdi, Raigad Fort, Mahabaleshwar, Alibaug and Trimbakeshwar.";
  }

  if (q.includes("shirdi")) {
    return "🛕 Shirdi is famous for Sai Baba Temple. It is one of Maharashtra's most popular spiritual destinations.";
  }

  if (q.includes("raigad")) {
    return "🏰 Raigad Fort is a famous historical fort in Maharashtra and was the capital of Chhatrapati Shivaji Maharaj's empire.";
  }

  if (q.includes("mahabaleshwar")) {
    return "🌄 Mahabaleshwar is famous for beautiful viewpoints, hills, waterfalls and pleasant weather.";
  }

  if (q.includes("alibaug")) {
    return "🏖️ Alibaug is a popular coastal destination famous for beaches, forts and relaxing weekend trips.";
  }

  if (q.includes("trimbakeshwar")) {
    return "🛕 Trimbakeshwar is famous for the Trimbakeshwar Jyotirlinga Temple near Nashik.";
  }

  // Rajasthan
  if (q.includes("rajasthan")) {
    return "🏜️ Rajasthan destinations include Jaipur, Udaipur, Jodhpur, Jaisalmer, Mount Abu and Pushkar.";
  }

  if (q.includes("jaipur")) {
    return "🏰 Jaipur is famous for Amber Fort, City Palace, Hawa Mahal and Rajasthan's royal heritage.";
  }

  // Uttar Pradesh
  if (
    q.includes("uttar") ||
    q.includes("uttar pradesh")
  ) {
    return "🛕 Uttar Pradesh destinations include Agra, Ayodhya, Varanasi, Mathura & Vrindavan, Prayagraj and Lucknow.";
  }

  if (
    q.includes("varanasi") ||
    q.includes("kashi")
  ) {
    return "🛕 Varanasi, also known as Kashi, is famous for the Ganga Ghats, temples and Ganga Aarti.";
  }

  if (q.includes("agra")) {
    return "🏰 Agra is famous for the Taj Mahal, Agra Fort and Mughal architecture.";
  }

  if (q.includes("ayodhya")) {
    return "🛕 Ayodhya is an important spiritual destination known for its temples and Ram Mandir.";
  }

  // Tamil Nadu
  if (
    q.includes("tamil") ||
    q.includes("tamil nadu")
  ) {
    return "🌴 Tamil Nadu destinations include Chennai, Ooty, Kodaikanal, Rameswaram, Kanyakumari and Mahabalipuram.";
  }

  if (q.includes("ooty")) {
    return "🌄 Ooty is a beautiful hill station famous for tea gardens, cool weather, lakes and scenic views.";
  }

  // Andhra Pradesh
  if (
    q.includes("andhra") ||
    q.includes("andhra pradesh")
  ) {
    return "🌄 Andhra Pradesh destinations include Tirupati, Visakhapatnam, Araku Valley, Srisailam and Amaravati.";
  }

  if (q.includes("araku")) {
    return "🌄 Araku Valley is famous for green valleys, coffee plantations, waterfalls and beautiful mountain scenery.";
  }

  if (q.includes("tirupati")) {
    return "🛕 Tirupati is famous for the Sri Venkateswara Temple at Tirumala.";
  }

  // Login
  if (
    q.includes("login") ||
    q.includes("password") ||
    q.includes("account")
  ) {
    return "🔐 If you are having login problems, please check your email/password and try again. If the problem continues, contact support.";
  }

  // Contact / Support
  if (
    q.includes("contact") ||
    q.includes("support") ||
    q.includes("customer care") ||
    q.includes("agent") ||
    q.includes("help")
  ) {
    return "📞 You can use the Contact page for customer support information. Please provide your booking or transaction details when contacting support.";
  }

  // Thanks
  if (
    q.includes("thank") ||
    q.includes("thanks")
  ) {
    return "You're welcome! 😊 Have a wonderful journey with IAKA Travels. ✈️🌍";
  }

  // Default
  return "I can help you with:\n\n🎫 Booking\n💳 Payment problems\n💰 Packages\n❌ Cancellation & Refund\n🏨 Hotels\n✈️ Flights\n📍 Destinations & Maps\n🍛 Restaurants\n📞 Customer Support\n\nPlease tell me your problem. 😊";
}

/* =========================
   ONLINE AI
========================= */

async function getOnlineAnswer(
  question: string,
  messages: Message[]
): Promise<string | null> {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: question,
        conversation: messages.slice(-10),
      }),
    });

    if (!response.ok) {
      return null;
    }

    const data = await response.json();

    if (
      !data ||
      typeof data.reply !== "string" ||
      !data.reply.trim()
    ) {
      return null;
    }

    return data.reply.trim();
  } catch {
    return null;
  }
}

/* =========================
   CHATBOT COMPONENT
========================= */

function Chatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text:
        "Hi! 👋 I am IAKA Travel Assistant. Ask me anything about your journey.",
    },
  ]);

  const [input, setInput] = useState("");

  const [typing, setTyping] = useState(false);

  const [isOnline, setIsOnline] = useState(
    typeof navigator !== "undefined"
      ? navigator.onLine
      : false
  );

  /* Internet status */
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  /* =========================
     SEND MESSAGE
  ========================= */

  const sendMessage = async () => {
    const question = input.trim();

    if (!question || typing) {
      return;
    }

    const userMessage: Message = {
      sender: "user",
      text: question,
    };

    const updatedMessages = [
      ...messages,
      userMessage,
    ];

    setMessages(updatedMessages);
    setInput("");
    setTyping(true);

    let answer: string | null = null;

    /*
      FIRST:
      Try Online AI
    */
    if (navigator.onLine) {
      answer = await getOnlineAnswer(
        question,
        updatedMessages
      );
    }

    /*
      SECOND:
      If Online AI failed,
      use Offline FAQ
    */
    if (!answer) {
      answer = getBotAnswer(question);
    }

    const botMessage: Message = {
      sender: "bot",
      text: answer,
    };

    setMessages((old) => [
      ...old,
      botMessage,
    ]);

    setTyping(false);
  };

  /* Quick question */
  const askQuickQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <>
      {/* =========================
          CHAT LAUNCHER
      ========================= */}

      {!open && (
        <button
          className="chat-launcher"
          onClick={() => setOpen(true)}
          aria-label="Open IAKA AI"
        >
          🤖
          <span>IAKA AI</span>
        </button>
      )}

      {/* =========================
          CHAT WINDOW
      ========================= */}

      {open && (
        <div className="chat-window">

          {/* HEADER */}

          <div className="chat-header">

            <div className="chat-title">
              <strong>
                🤖 IAKA Travel Assistant
              </strong>

              <span
                className={
                  isOnline
                    ? "chat-status online"
                    : "chat-status offline"
                }
              >
                {isOnline
                  ? "🟢 Online • AI + Backup"
                  : "⚪ Offline • Travel Help"}
              </span>
            </div>

            <button
              className="chat-close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

          </div>

          {/* QUICK QUESTIONS */}

          {messages.length === 1 && (
            <div className="quick-help">

              <button
                onClick={() =>
                  askQuickQuestion(
                    "How can I book a trip?"
                  )
                }
              >
                🎫 Booking
              </button>

              <button
                onClick={() =>
                  askQuickQuestion(
                    "I have a payment problem"
                  )
                }
              >
                💳 Payment
              </button>

              <button
                onClick={() =>
                  askQuickQuestion(
                    "Show me hotel information"
                  )
                }
              >
                🏨 Hotels
              </button>

              <button
                onClick={() =>
                  askQuickQuestion(
                    "Tell me about packages"
                  )
                }
              >
                💰 Packages
              </button>

              <button
                onClick={() =>
                  askQuickQuestion(
                    "I want to cancel my booking"
                  )
                }
              >
                ❌ Cancellation
              </button>

              <button
                onClick={() =>
                  askQuickQuestion(
                    "Tell me about flights"
                  )
                }
              >
                ✈️ Flights
              </button>

            </div>
          )}

          {/* MESSAGES */}

          <div className="chat-messages">

            {messages.map(
              (message, index) => (
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
              )
            )}

            {/* TYPING */}

            {typing && (
              <div className="message bot-message typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}

          </div>

          {/* INPUT */}

          <div className="chat-input">

            <input
              value={input}
              placeholder="Ask IAKA AI..."
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) => {
                if (
                  e.key === "Enter" &&
                  !e.shiftKey
                ) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
            />

            <button
              onClick={sendMessage}
              disabled={
                !input.trim() || typing
              }
            >
              ➤
            </button>

          </div>

        </div>
      )}
    </>
  );
}

export default Chatbot;