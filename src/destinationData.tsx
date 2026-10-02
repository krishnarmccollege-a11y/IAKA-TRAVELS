export interface Place {
  id: string;
  name: string;
  emoji: string;
  route: string;
  description: string;
  attractions: string[];
  hotels: string[];
  restaurants: string[];
  parks: string[];
}

export interface StateDestination {
  state: string;
  emoji: string;
  places: Place[];
}

export const destinationData: StateDestination[] = [

  {
    state: "Maharashtra",
    emoji: "🇮🇳",
    places: [

      {
        id: "shirdi",
        name: "Shirdi",
        emoji: "🛕",
        route: "Mumbai → Nashik → Shirdi",
        description:
          "A major spiritual destination known for Sai Baba Temple.",
        attractions: [
          "Shri Sai Baba Temple",
          "Dwarkamai",
          "Chavadi",
          "Shani Shingnapur"
        ],
        hotels: [
          "Sai Leela",
          "Sun-n-Sand Shirdi",
          "Hotel Temple Tree"
        ],
        restaurants: [
          "Woodlands Restaurant",
          "Rajdhani Restaurant",
          "Local Maharashtrian Restaurants"
        ],
        parks: [
          "Lendi Garden",
          "Sai Teerth Theme Park"
        ]
      },

      {
        id: "raigad",
        name: "Raigad Fort",
        emoji: "🏰",
        route: "Mumbai → Panvel → Mangaon → Raigad",
        description:
          "Historic hill fort and an important heritage destination.",
        attractions: [
          "Raigad Fort",
          "Takmak Tok",
          "Rajwada",
          "Raigad Ropeway"
        ],
        hotels: [
          "MTDC Raigad",
          "Local Hill Resorts",
          "Raigad Fort Area Hotels"
        ],
        restaurants: [
          "Local Maharashtrian Restaurants",
          "Highway Restaurants",
          "Fort Area Food Stalls"
        ],
        parks: [
          "Raigad Fort Nature Area",
          "Mountain View Points"
        ]
      },

      {
        id: "mahabaleshwar",
        name: "Mahabaleshwar",
        emoji: "🌄",
        route: "Mumbai → Pune → Wai → Mahabaleshwar",
        description:
          "A popular hill station famous for viewpoints, forests and strawberries.",
        attractions: [
          "Arthur's Seat",
          "Venna Lake",
          "Elephant's Head Point",
          "Pratapgad Fort"
        ],
        hotels: [
          "Le Meridien Mahabaleshwar",
          "Evershine Resort",
          "MTDC Resort"
        ],
        restaurants: [
          "Mapro Garden",
          "The Grapevine Restaurant",
          "Local Maharashtrian Restaurants"
        ],
        parks: [
          "Venna Lake Garden",
          "Mapro Garden"
        ]
      },

      {
        id: "alibaug",
        name: "Alibaug",
        emoji: "🏖️",
        route: "Mumbai → Panvel → Pen → Alibaug",
        description:
          "Coastal destination known for beaches and historic forts.",
        attractions: [
          "Alibaug Beach",
          "Kolaba Fort",
          "Kihim Beach",
          "Nagaon Beach"
        ],
        hotels: [
          "Radisson Blu Resort Alibaug",
          "U Tropicana Alibaug",
          "Beach Resorts"
        ],
        restaurants: [
          "Coastal Seafood Restaurants",
          "Beachside Cafes",
          "Local Maharashtrian Restaurants"
        ],
        parks: [
          "Alibaug Beach Garden",
          "Kihim Nature Area"
        ]
      },

      {
        id: "trimbakeshwar",
        name: "Trimbakeshwar",
        emoji: "🛕",
        route: "Mumbai → Nashik → Trimbakeshwar",
        description:
          "Historic pilgrimage destination near Nashik.",
        attractions: [
          "Trimbakeshwar Temple",
          "Brahmagiri Hills",
          "Kushavarta Kund",
          "Anjaneri Hills"
        ],
        hotels: [
          "MTDC Trimbakeshwar",
          "Local Guest Houses",
          "Nashik Hotels"
        ],
        restaurants: [
          "Local Vegetarian Restaurants",
          "Nashik Restaurants"
        ],
        parks: [
          "Brahmagiri Nature Area",
          "Anjaneri Hills"
        ]
      }

    ]
  },

  {
    state: "Andhra Pradesh",
    emoji: "🇮🇳",
    places: [

      {
        id: "tirupati",
        name: "Tirupati",
        emoji: "🛕",
        route: "Chennai → Tiruvallur → Tirupati",
        description: "Major pilgrimage destination.",
        attractions: [
          "Tirumala Venkateswara Temple",
          "Kapila Theertham",
          "Sri Padmavathi Temple"
        ],
        hotels: [
          "Tirumala Tirupati Devasthanams Accommodation",
          "Taj Tirupati",
          "Local Hotels"
        ],
        restaurants: [
          "Local South Indian Restaurants",
          "Temple Area Restaurants"
        ],
        parks: [
          "Tirumala Nature Areas",
          "Regional Parks"
        ]
      },

      {
        id: "visakhapatnam",
        name: "Visakhapatnam",
        emoji: "🌊",
        route: "Vijayawada → Rajahmundry → Anakapalle → Visakhapatnam",
        description: "Coastal city with beaches and hills.",
        attractions: [
          "RK Beach",
          "Kailasagiri",
          "INS Kurusura Submarine Museum",
          "Dolphin's Nose"
        ],
        hotels: [
          "Novotel Visakhapatnam",
          "The Gateway Hotel",
          "Beach Road Hotels"
        ],
        restaurants: [
          "Seafood Restaurants",
          "Beach Road Restaurants",
          "Andhra Cuisine Restaurants"
        ],
        parks: [
          "Kailasagiri",
          "Indira Gandhi Zoological Park"
        ]
      },

      {
        id: "araku",
        name: "Araku Valley",
        emoji: "🏔️",
        route: "Visakhapatnam → Vizianagaram → Araku Valley",
        description: "Scenic valley known for mountains and coffee plantations.",
        attractions: [
          "Borra Caves",
          "Coffee Plantations",
          "Tribal Museum",
          "Katiki Waterfalls"
        ],
        hotels: [
          "Haritha Valley Resort",
          "Araku Resorts",
          "Local Hotels"
        ],
        restaurants: [
          "Tribal Cuisine Restaurants",
          "Local Andhra Restaurants"
        ],
        parks: [
          "Padmapuram Gardens",
          "Araku Nature Areas"
        ]
      },

      {
        id: "srisailam",
        name: "Srisailam",
        emoji: "🛕",
        route: "Hyderabad → Kurnool → Atmakur → Srisailam",
        description: "Spiritual and forest destination.",
        attractions: [
          "Mallikarjuna Temple",
          "Srisailam Dam",
          "Akkamahadevi Caves",
          "Srisailam Tiger Reserve"
        ],
        hotels: [
          "Haritha Srisailam",
          "Tourism Guest Houses",
          "Local Hotels"
        ],
        restaurants: [
          "Local Vegetarian Restaurants",
          "Andhra Restaurants"
        ],
        parks: [
          "Srisailam Tiger Reserve",
          "Nagarjunasagar-Srisailam Nature Area"
        ]
      },

      {
        id: "amaravati",
        name: "Amaravati",
        emoji: "🏛️",
        route: "Vijayawada → Mangalagiri → Amaravati",
        description: "Historic and cultural destination.",
        attractions: [
          "Amaravati Stupa",
          "Amaralingeswara Temple",
          "Dhyana Buddha Statue"
        ],
        hotels: [
          "Vijayawada Hotels",
          "Amaravati Guest Houses"
        ],
        restaurants: [
          "Andhra Cuisine Restaurants",
          "Vijayawada Restaurants"
        ],
        parks: [
          "Amaravati Riverside Areas",
          "Local Parks"
        ]
      }

    ]
  },

  {
    state: "Uttar Pradesh",
    emoji: "🇮🇳",
    places: [

      {
        id: "agra",
        name: "Agra",
        emoji: "🕌",
        route: "Delhi → Mathura → Agra",
        description: "Historic city famous for the Taj Mahal.",
        attractions: [
          "Taj Mahal",
          "Agra Fort",
          "Mehtab Bagh",
          "Itmad-ud-Daulah"
        ],
        hotels: [
          "ITC Mughal",
          "Taj Hotel & Convention Centre",
          "Local Agra Hotels"
        ],
        restaurants: [
          "Mughlai Restaurants",
          "Local Agra Restaurants",
          "Rooftop Restaurants"
        ],
        parks: [
          "Mehtab Bagh",
          "Taj Nature Walk"
        ]
      },

      {
        id: "ayodhya",
        name: "Ayodhya",
        emoji: "🛕",
        route: "Lucknow → Barabanki → Ayodhya",
        description: "Important cultural and pilgrimage destination.",
        attractions: [
          "Ram Mandir",
          "Hanuman Garhi",
          "Saryu River",
          "Kanak Bhawan"
        ],
        hotels: [
          "Ayodhya Tourism Hotels",
          "Local Hotels",
          "Guest Houses"
        ],
        restaurants: [
          "North Indian Restaurants",
          "Local Vegetarian Restaurants"
        ],
        parks: [
          "Ram Ki Paidi",
          "Saryu Riverside Areas"
        ]
      },

      {
        id: "varanasi",
        name: "Varanasi",
        emoji: "🛕",
        route: "Lucknow → Sultanpur → Varanasi",
        description: "Historic city on the Ganges.",
        attractions: [
          "Kashi Vishwanath Temple",
          "Dashashwamedh Ghat",
          "Assi Ghat",
          "Sarnath"
        ],
        hotels: [
          "Taj Ganges",
          "BrijRama Palace",
          "Ganges View Hotels"
        ],
        restaurants: [
          "Banarasi Restaurants",
          "Local Vegetarian Restaurants",
          "Ghat Cafes"
        ],
        parks: [
          "Ravindrapuri Park",
          "Sarnath Gardens",
          "Riverside Ghats"
        ]
      },

      {
        id: "mathura-vrindavan",
        name: "Mathura & Vrindavan",
        emoji: "🛕",
        route: "Delhi → Noida → Mathura → Vrindavan",
        description: "Major cultural and pilgrimage region.",
        attractions: [
          "Krishna Janmabhoomi",
          "Banke Bihari Temple",
          "ISKCON Vrindavan",
          "Prem Mandir"
        ],
        hotels: [
          "Nidhivan Sarovar Portico",
          "Local Vrindavan Hotels",
          "Mathura Hotels"
        ],
        restaurants: [
          "Vegetarian Restaurants",
          "Local Braj Cuisine"
        ],
        parks: [
          "Prem Mandir Gardens",
          "Vrindavan Riverside Areas"
        ]
      },

      {
        id: "prayagraj",
        name: "Prayagraj",
        emoji: "🏛️",
        route: "Lucknow → Rae Bareli → Prayagraj",
        description: "Historic city at the Sangam.",
        attractions: [
          "Triveni Sangam",
          "Allahabad Fort",
          "Anand Bhavan",
          "Khusro Bagh"
        ],
        hotels: [
          "Hotel Kanha Shyam",
          "Prayagraj Hotels",
          "Guest Houses"
        ],
        restaurants: [
          "North Indian Restaurants",
          "Local Restaurants"
        ],
        parks: [
          "Khusro Bagh",
          "Company Garden"
        ]
      },

      {
        id: "lucknow",
        name: "Lucknow",
        emoji: "🌆",
        route: "Delhi → Agra → Kanpur → Lucknow",
        description: "Capital city known for culture and cuisine.",
        attractions: [
          "Bara Imambara",
          "Chota Imambara",
          "Rumi Darwaza",
          "Hazratganj"
        ],
        hotels: [
          "Taj Mahal Lucknow",
          "Renaissance Lucknow",
          "Local Lucknow Hotels"
        ],
        restaurants: [
          "Awadhi Restaurants",
          "Tunday Kababi",
          "Hazratganj Restaurants"
        ],
        parks: [
          "Janeshwar Mishra Park",
          "Ambedkar Memorial Park"
        ]
      }

    ]
  },

  {
    state: "Tamil Nadu",
    emoji: "🇮🇳",
    places: [

      {
        id: "chennai",
        name: "Chennai",
        emoji: "🏛️",
        route: "Bengaluru → Kanchipuram → Chennai",
        description: "Major coastal city of South India.",
        attractions: [
          "Marina Beach",
          "Kapaleeshwarar Temple",
          "Fort St George",
          "Government Museum"
        ],
        hotels: [
          "ITC Grand Chola",
          "Taj Coromandel",
          "Chennai City Hotels"
        ],
        restaurants: [
          "South Indian Restaurants",
          "Marina Beach Restaurants",
          "Chennai Cafes"
        ],
        parks: [
          "Guindy National Park",
          "Semmozhi Poonga"
        ]
      },

      {
        id: "ooty",
        name: "Ooty",
        emoji: "🌿",
        route: "Chennai → Salem → Coimbatore → Mettupalayam → Ooty",
        description: "Popular hill station in the Nilgiris.",
        attractions: [
          "Ooty Lake",
          "Botanical Garden",
          "Doddabetta Peak",
          "Nilgiri Mountain Railway"
        ],
        hotels: [
          "Savoy Ooty",
          "Sterling Ooty",
          "Local Ooty Resorts"
        ],
        restaurants: [
          "Hill Station Restaurants",
          "South Indian Restaurants",
          "Tea Cafes"
        ],
        parks: [
          "Government Botanical Garden",
          "Rose Garden"
        ]
      },

      {
        id: "kodaikanal",
        name: "Kodaikanal",
        emoji: "🌄",
        route: "Chennai → Salem → Dindigul → Kodaikanal",
        description: "Hill station famous for its lake and forests.",
        attractions: [
          "Kodaikanal Lake",
          "Coaker's Walk",
          "Pillar Rocks",
          "Bryant Park"
        ],
        hotels: [
          "The Carlton",
          "Sterling Kodaikanal",
          "Local Resorts"
        ],
        restaurants: [
          "Hill Station Cafes",
          "South Indian Restaurants"
        ],
        parks: [
          "Bryant Park",
          "Coaker's Walk"
        ]
      },

      {
        id: "rameswaram",
        name: "Rameswaram",
        emoji: "🛕",
        route: "Madurai → Paramakudi → Ramanathapuram → Rameswaram",
        description: "Island pilgrimage destination.",
        attractions: [
          "Ramanathaswamy Temple",
          "Pamban Bridge",
          "Dhanushkodi",
          "Agni Theertham"
        ],
        hotels: [
          "Hyatt Place Rameswaram",
          "Hotel Pearl Residency",
          "Local Hotels"
        ],
        restaurants: [
          "South Indian Restaurants",
          "Seafood Restaurants"
        ],
        parks: [
          "Dhanushkodi Coastal Area",
          "Local Beach Areas"
        ]
      },

      {
        id: "kanyakumari",
        name: "Kanyakumari",
        emoji: "🌊",
        route: "Madurai → Tirunelveli → Nagercoil → Kanyakumari",
        description: "Southern coastal destination.",
        attractions: [
          "Vivekananda Rock Memorial",
          "Thiruvalluvar Statue",
          "Kanyakumari Beach",
          "Sunrise Point"
        ],
        hotels: [
          "The Gopinivas Grand",
          "Seashore Hotel",
          "Local Hotels"
        ],
        restaurants: [
          "South Indian Restaurants",
          "Seafood Restaurants"
        ],
        parks: [
          "Beach Promenade",
          "Sunset Point"
        ]
      },

      {
        id: "mahabalipuram",
        name: "Mahabalipuram",
        emoji: "🏛️",
        route: "Chennai → ECR → Mahabalipuram",
        description: "Historic coastal heritage destination.",
        attractions: [
          "Shore Temple",
          "Pancha Rathas",
          "Arjuna's Penance",
          "Mahabalipuram Beach"
        ],
        hotels: [
          "Radisson Blu Resort Temple Bay",
          "InterContinental Chennai Mahabalipuram",
          "Local Resorts"
        ],
        restaurants: [
          "Seafood Restaurants",
          "ECR Restaurants"
        ],
        parks: [
          "Mahabalipuram Beach",
          "Heritage Areas"
        ]
      }

    ]
  },

  {
    state: "Rajasthan",
    emoji: "🇮🇳",
    places: [

      {
        id: "jaipur",
        name: "Jaipur",
        emoji: "🏰",
        route: "Delhi → Gurugram → Neemrana → Jaipur",
        description: "The Pink City, known for forts and palaces.",
        attractions: [
          "Amber Fort",
          "City Palace",
          "Hawa Mahal",
          "Jantar Mantar"
        ],
        hotels: [
          "Rambagh Palace",
          "ITC Rajputana",
          "Jaipur City Hotels"
        ],
        restaurants: [
          "Rajasthani Restaurants",
          "Chokhi Dhani",
          "Jaipur Cafes"
        ],
        parks: [
          "Central Park",
          "Ram Niwas Garden"
        ]
      },

      {
        id: "udaipur",
        name: "Udaipur",
        emoji: "🏰",
        route: "Jaipur → Ajmer → Bhilwara → Udaipur",
        description: "City of lakes and royal architecture.",
        attractions: [
          "City Palace",
          "Lake Pichola",
          "Jag Mandir",
          "Sajjangarh Palace"
        ],
        hotels: [
          "Taj Lake Palace",
          "The Leela Palace Udaipur",
          "Udaipur Hotels"
        ],
        restaurants: [
          "Lake View Restaurants",
          "Rajasthani Restaurants"
        ],
        parks: [
          "Saheliyon-ki-Bari",
          "Gulab Bagh"
        ]
      },

      {
        id: "jodhpur",
        name: "Jodhpur",
        emoji: "🏰",
        route: "Jaipur → Ajmer → Beawar → Pali → Jodhpur",
        description: "Blue City dominated by Mehrangarh Fort.",
        attractions: [
          "Mehrangarh Fort",
          "Jaswant Thada",
          "Umaid Bhawan Palace",
          "Clock Tower"
        ],
        hotels: [
          "RAAS Jodhpur",
          "Umaid Bhawan Palace",
          "Jodhpur Hotels"
        ],
        restaurants: [
          "Rajasthani Restaurants",
          "Rooftop Restaurants"
        ],
        parks: [
          "Rao Jodha Desert Rock Park",
          "Local Gardens"
        ]
      },

      {
        id: "jaisalmer",
        name: "Jaisalmer",
        emoji: "🏜️",
        route: "Jodhpur → Pokaran → Jaisalmer",
        description: "Golden city famous for desert experiences.",
        attractions: [
          "Jaisalmer Fort",
          "Sam Sand Dunes",
          "Patwon Ki Haveli",
          "Gadisar Lake"
        ],
        hotels: [
          "Suryagarh",
          "Desert Camps",
          "Jaisalmer Hotels"
        ],
        restaurants: [
          "Rajasthani Restaurants",
          "Desert Camp Dining"
        ],
        parks: [
          "Desert National Park",
          "Gadisar Lake Area"
        ]
      },

      {
        id: "mount-abu",
        name: "Mount Abu",
        emoji: "⛰️",
        route: "Ahmedabad → Palanpur → Abu Road → Mount Abu",
        description: "Rajasthan's hill station.",
        attractions: [
          "Nakki Lake",
          "Dilwara Temples",
          "Guru Shikhar",
          "Sunset Point"
        ],
        hotels: [
          "Ratan Villas",
          "Hotel Hillock",
          "Mount Abu Hotels"
        ],
        restaurants: [
          "Rajasthani Restaurants",
          "Hill Station Cafes"
        ],
        parks: [
          "Mount Abu Wildlife Sanctuary",
          "Nakki Lake Garden"
        ]
      },

      {
        id: "pushkar",
        name: "Pushkar",
        emoji: "🏛️",
        route: "Jaipur → Kishangarh → Ajmer → Pushkar",
        description: "Historic town around Pushkar Lake.",
        attractions: [
          "Brahma Temple",
          "Pushkar Lake",
          "Savitri Temple",
          "Pushkar Camel Fair Area"
        ],
        hotels: [
          "Ananta Spa & Resorts",
          "Pushkar Palace",
          "Local Hotels"
        ],
        restaurants: [
          "Vegetarian Restaurants",
          "Pushkar Cafes"
        ],
        parks: [
          "Pushkar Lake Area",
          "Desert Camp Areas"
        ]
      }

    ]
  }

];