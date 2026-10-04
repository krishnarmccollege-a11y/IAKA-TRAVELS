export interface DestinationPlace {
  id: string;
  name: string;
  emoji: string;
  image?: string;
  route: string;
  description: string;
  attractions: string[];
  hotels: string[];
  restaurants: string[];
  parks: string[];
}

export interface DestinationState {
  state: string;
  image: string;
  places: DestinationPlace[];
}

export const destinationData: DestinationState[] = [
  {
    state: "Maharashtra",
    image: "/maharashtra.jpg",

    places: [
      {
        id: "shirdi",
        name: "Shirdi",
        emoji: "🛕",
        image: "/shirdi.jpg",

        route: "Mumbai → Nashik → Shirdi",

        description:
          "A famous pilgrimage destination known for the Sai Baba Temple.",

        attractions: [
          "Sai Baba Temple",
          "Dwarkamai",
          "Chavadi",
          "Lendi Garden",
        ],

        hotels: [
          "Hotel Sai Grand",
          "Hotel Temple View",
          "Sai Residency",
        ],

        restaurants: [
          "Sai Sagar Food Court",
          "Local Maharashtrian Restaurants",
        ],

        parks: [
          "Lendi Garden",
        ],
      },

      {
        id: "raigad",
        name: "Raigad Fort",
        emoji: "🏰",
        image: "/raigad.jpg",

        route: "Mumbai → Panvel → Mangaon → Raigad",

        description:
          "Historic hill fort surrounded by the beautiful Sahyadri mountains.",

        attractions: [
          "Raigad Fort",
          "Maha Darwaja",
          "Takmak Tok",
          "Rajwada",
        ],

        hotels: [
          "MTDC Accommodation",
          "Local Hotels",
        ],

        restaurants: [
          "Local Maharashtrian Restaurants",
        ],

        parks: [
          "Raigad Fort Hills",
        ],
      },

      {
        id: "mahabaleshwar",
        name: "Mahabaleshwar",
        emoji: "🏔️",
        image: "/mahabaleshwar.jpg",

        route: "Mumbai → Pune → Wai → Mahabaleshwar",

        description:
          "Popular hill station famous for viewpoints, valleys and strawberries.",

        attractions: [
          "Arthur's Seat",
          "Venna Lake",
          "Pratapgad Fort",
          "Mapro Garden",
        ],

        hotels: [
          "MTDC Resort",
          "Hill View Hotels",
          "Valley View Resorts",
        ],

        restaurants: [
          "Mapro Garden",
          "Local Maharashtrian Restaurants",
        ],

        parks: [
          "Venna Lake Garden",
        ],
      },

      {
        id: "alibaug",
        name: "Alibaug",
        emoji: "🏖️",
        image: "/alibaug.jpg",

        route: "Mumbai → Panvel → Alibaug",

        description:
          "Beautiful coastal destination famous for beaches and forts.",

        attractions: [
          "Alibaug Beach",
          "Kolaba Fort",
          "Kihim Beach",
        ],

        hotels: [
          "Beach Resorts",
          "Local Hotels",
        ],

        restaurants: [
          "Seafood Restaurants",
          "Local Maharashtrian Restaurants",
        ],

        parks: [
          "Alibaug Beach Area",
        ],
      },

      {
        id: "trimbakeshwar",
        name: "Trimbakeshwar",
        emoji: "🛕",
        image: "/trimbakeshwar.jpg",

        route: "Mumbai → Nashik → Trimbakeshwar",

        description:
          "A famous pilgrimage destination near Nashik known for the Trimbakeshwar Jyotirlinga.",

        attractions: [
          "Trimbakeshwar Temple",
          "Brahmagiri Hills",
          "Kushavarta Kund",
        ],

        hotels: [
          "Local Hotels",
          "Temple Area Accommodation",
        ],

        restaurants: [
          "Local Maharashtrian Restaurants",
        ],

        parks: [
          "Brahmagiri Hills",
        ],
      },
    ],
  },

  {
    state: "Andhra Pradesh",
    image: "/andhra-pradesh.jpg",

    places: [
      {
        id: "araku",
        name: "Araku Valley",
        emoji: "⛰️",
        image: "/araku.jpg",

        route: "Visakhapatnam → Araku",

        description:
          "A beautiful hill destination famous for valleys, coffee plantations and waterfalls.",

        attractions: [
          "Araku Valley",
          "Borra Caves",
          "Coffee Plantations",
        ],

        hotels: [
          "Haritha Resort",
          "Local Hotels",
        ],

        restaurants: [
          "Local Restaurants",
        ],

        parks: [
          "Araku Valley",
        ],
      },

      {
        id: "tirupati",
        name: "Tirupati",
        emoji: "🛕",
        image: "/tirupati.jpg",

        route: "Chennai → Tirupati",

        description:
          "One of India's most famous pilgrimage destinations.",

        attractions: [
          "Tirumala Temple",
          "Sri Venkateswara Temple",
        ],

        hotels: [
          "Tirumala Hotels",
          "Local Hotels",
        ],

        restaurants: [
          "Local South Indian Restaurants",
        ],

        parks: [
          "Tirumala Hills",
        ],
      },

      {
        id: "amaravati",
        name: "Amaravati",
        emoji: "🏛️",
        image: "/amaravati.jpg",

        route: "Vijayawada → Amaravati",

        description:
          "Historic and cultural destination of Andhra Pradesh.",

        attractions: [
          "Amaravati Stupa",
          "Amaralingeswara Temple",
        ],

        hotels: [
          "Local Hotels",
        ],

        restaurants: [
          "Local Restaurants",
        ],

        parks: [
          "Amaravati Parks",
        ],
      },
    ],
  },

  {
    state: "Uttar Pradesh",
    image: "/agra.jpg",

    places: [
      {
        id: "agra",
        name: "Agra",
        emoji: "🏛️",
        image: "/agra.jpg",

        route: "Delhi → Agra",

        description:
          "Home to the world-famous Taj Mahal.",

        attractions: [
          "Taj Mahal",
          "Agra Fort",
          "Mehtab Bagh",
        ],

        hotels: [
          "Taj View Hotels",
          "Local Hotels",
        ],

        restaurants: [
          "Mughlai Restaurants",
          "Local Restaurants",
        ],

        parks: [
          "Mehtab Bagh",
        ],
      },

      {
        id: "ayodhya",
        name: "Ayodhya",
        emoji: "🛕",
        image: "/ayodhya.jpg",

        route: "Lucknow → Ayodhya",

        description:
          "A major cultural and pilgrimage destination.",

        attractions: [
          "Ram Mandir",
          "Hanuman Garhi",
          "Saryu River",
        ],

        hotels: [
          "Local Hotels",
        ],

        restaurants: [
          "Local Restaurants",
        ],

        parks: [
          "Ram Ki Paidi",
        ],
      },

      {
        id: "varanasi",
        name: "Varanasi",
        emoji: "🛕",
        image: "/mathura.jpg",

        route: "Lucknow → Varanasi",

        description:
          "One of India's oldest and most important spiritual cities.",

        attractions: [
          "Kashi Vishwanath Temple",
          "Dashashwamedh Ghat",
          "Ganga Aarti",
        ],

        hotels: [
          "Ghat Side Hotels",
          "Local Hotels",
        ],

        restaurants: [
          "Local North Indian Restaurants",
        ],

        parks: [
          "Ganga Ghats",
        ],
      },

      {
        id: "mathura",
        name: "Mathura",
        emoji: "🛕",
        image: "/mathura.jpg",

        route: "Delhi → Mathura",

        description:
          "Famous for its Krishna temples and cultural heritage.",

        attractions: [
          "Krishna Janmabhoomi",
          "Dwarkadhish Temple",
        ],

        hotels: [
          "Local Hotels",
        ],

        restaurants: [
          "Local Restaurants",
        ],

        parks: [
          "Vishram Ghat",
        ],
      },

      {
        id: "lucknow",
        name: "Lucknow",
        emoji: "🏛️",
        image: "/lucknow.jpg",

        route: "Delhi → Lucknow",

        description:
          "Known for its historical monuments and rich culture.",

        attractions: [
          "Bara Imambara",
          "Chota Imambara",
          "Rumi Darwaza",
        ],

        hotels: [
          "Local Hotels",
          "City Hotels",
        ],

        restaurants: [
          "Awadhi Restaurants",
        ],

        parks: [
          "Janeshwar Mishra Park",
        ],
      },
    ],
  },

  {
    state: "Tamil Nadu",
    image: "/tamil-nadu.jpg",

    places: [
      {
        id: "ooty",
        name: "Ooty",
        emoji: "🏔️",
        image: "/ooty.jpg",

        route: "Coimbatore → Ooty",

        description:
          "Popular hill station famous for its pleasant climate and tea gardens.",

        attractions: [
          "Ooty Lake",
          "Botanical Garden",
          "Doddabetta Peak",
        ],

        hotels: [
          "Hill View Hotels",
          "Local Resorts",
        ],

        restaurants: [
          "Local Restaurants",
        ],

        parks: [
          "Botanical Garden",
        ],
      },

      {
        id: "chennai",
        name: "Chennai",
        emoji: "🌊",
        image: "/chennai.jpg",

        route: "Bengaluru → Chennai",

        description:
          "Major coastal city with beaches, temples and cultural attractions.",

        attractions: [
          "Marina Beach",
          "Kapaleeshwarar Temple",
          "Fort St. George",
        ],

        hotels: [
          "City Hotels",
        ],

        restaurants: [
          "South Indian Restaurants",
        ],

        parks: [
          "Semmozhi Poonga",
        ],
      },

      {
        id: "madurai",
        name: "Madurai",
        emoji: "🛕",
        image: "/madurai.jpg",

        route: "Chennai → Madurai",

        description:
          "Historic city famous for the Meenakshi Amman Temple.",

        attractions: [
          "Meenakshi Amman Temple",
          "Thirumalai Nayakkar Palace",
        ],

        hotels: [
          "City Hotels",
        ],

        restaurants: [
          "South Indian Restaurants",
        ],

        parks: [
          "Local Gardens",
        ],
      },

      {
        id: "kanyakumari",
        name: "Kanyakumari",
        emoji: "🌅",
        image: "/kanyakumari.jpg",

        route: "Madurai → Kanyakumari",

        description:
          "Famous for its spectacular sunrise and sunset views.",

        attractions: [
          "Vivekananda Rock Memorial",
          "Thiruvalluvar Statue",
        ],

        hotels: [
          "Beach Hotels",
        ],

        restaurants: [
          "Local Restaurants",
        ],

        parks: [
          "Beach Area",
        ],
      },

      {
        id: "rameswaram",
        name: "Rameswaram",
        emoji: "🛕",
        image: "/rameswaram.jpg",

        route: "Madurai → Rameswaram",

        description:
          "Important pilgrimage destination surrounded by beautiful coastal scenery.",

        attractions: [
          "Ramanathaswamy Temple",
          "Pamban Bridge",
          "Dhanushkodi",
        ],

        hotels: [
          "Local Hotels",
        ],

        restaurants: [
          "South Indian Restaurants",
        ],

        parks: [
          "Dhanushkodi Beach",
        ],
      },
    ],
  },

  {
    state: "Rajasthan",
    image: "/rajasthan.jpg",

    places: [
      {
        id: "jaipur",
        name: "Jaipur",
        emoji: "🏰",
        image: "/jaipur.jpg",

        route: "Delhi → Jaipur",

        description:
          "The Pink City famous for forts, palaces and royal heritage.",

        attractions: [
          "Amber Fort",
          "Hawa Mahal",
          "City Palace",
        ],

        hotels: [
          "City Hotels",
          "Heritage Hotels",
        ],

        restaurants: [
          "Rajasthani Restaurants",
        ],

        parks: [
          "Central Park",
        ],
      },

      {
        id: "jaisalmer",
        name: "Jaisalmer",
        emoji: "🏜️",
        image: "/jaisalmer.jpg",

        route: "Jodhpur → Jaisalmer",

        description:
          "Golden City famous for its desert and magnificent fort.",

        attractions: [
          "Jaisalmer Fort",
          "Sam Sand Dunes",
          "Patwon Ki Haveli",
        ],

        hotels: [
          "Desert Resorts",
          "Heritage Hotels",
        ],

        restaurants: [
          "Rajasthani Restaurants",
        ],

        parks: [
          "Desert Area",
        ],
      },

      {
        id: "jodhpur",
        name: "Jodhpur",
        emoji: "🏰",
        image: "/jodhpur.jpg",

        route: "Jaipur → Jodhpur",

        description:
          "The Blue City famous for Mehrangarh Fort.",

        attractions: [
          "Mehrangarh Fort",
          "Jaswant Thada",
          "Umaid Bhawan Palace",
        ],

        hotels: [
          "Heritage Hotels",
          "City Hotels",
        ],

        restaurants: [
          "Rajasthani Restaurants",
        ],

        parks: [
          "Rao Jodha Desert Rock Park",
        ],
      },
    ],
  },
];