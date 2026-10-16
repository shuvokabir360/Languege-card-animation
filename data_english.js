// 500 Essential English Sentences with Bengali Meaning
const englishSentences = [
  {
    "id": 1,
    "foreign": "Hello, good morning!",
    "bengali": "হ্যালো, শুভ সকাল!"
  },
  {
    "id": 2,
    "foreign": "Good afternoon, everyone.",
    "bengali": "সবাইকে শুভ দুপুর।"
  },
  {
    "id": 3,
    "foreign": "Good evening, sir.",
    "bengali": "শুভ সন্ধ্যা, স্যার।"
  },
  {
    "id": 4,
    "foreign": "How are you doing today?",
    "bengali": "আজ আপনি কেমন আছেন?"
  },
  {
    "id": 5,
    "foreign": "I am doing well, thank you.",
    "bengali": "আমি ভালো আছি, ধন্যবাদ।"
  },
  {
    "id": 6,
    "foreign": "What is your name?",
    "bengali": "আপনার নাম কী?"
  },
  {
    "id": 7,
    "foreign": "My name is Kabir.",
    "bengali": "আমার নাম কবির।"
  },
  {
    "id": 8,
    "foreign": "Nice to meet you.",
    "bengali": "আপনার সাথে দেখা হয়ে ভালো লাগলো।"
  },
  {
    "id": 9,
    "foreign": "Glad to see you again.",
    "bengali": "আপনাকে আবার দেখে আনন্দিত হলাম।"
  },
  {
    "id": 10,
    "foreign": "Where are you from?",
    "bengali": "আপনি কোথা থেকে এসেছেন?"
  },
  {
    "id": 11,
    "foreign": "I am from Bangladesh.",
    "bengali": "আমি বাংলাদেশ থেকে এসেছি।"
  },
  {
    "id": 12,
    "foreign": "What do you do?",
    "bengali": "আপনি কী কাজ করেন?"
  },
  {
    "id": 13,
    "foreign": "I am a student.",
    "bengali": "আমি একজন শিক্ষার্থী।"
  },
  {
    "id": 14,
    "foreign": "I work in an office.",
    "bengali": "আমি একটি অফিসে কাজ করি।"
  },
  {
    "id": 15,
    "foreign": "How old are you?",
    "bengali": "আপনার বয়স কত?"
  },
  {
    "id": 16,
    "foreign": "I am twenty-five years old.",
    "bengali": "আমার বয়স পঁচিশ বছর।"
  },
  {
    "id": 17,
    "foreign": "Do you speak English?",
    "bengali": "আপনি কি ইংরেজিতে কথা বলেন?"
  },
  {
    "id": 18,
    "foreign": "Yes, a little bit.",
    "bengali": "হ্যাঁ, সামান্য বলতে পারি।"
  },
  {
    "id": 19,
    "foreign": "Could you speak slowly, please?",
    "bengali": "দয়া করে একটু আস্তে বলবেন কি?"
  },
  {
    "id": 20,
    "foreign": "Excuse me, sir.",
    "bengali": "মাফ করবেন, স্যার।"
  },
  {
    "id": 21,
    "foreign": "I am really sorry.",
    "bengali": "আমি সত্যিই দুঃখিত।"
  },
  {
    "id": 22,
    "foreign": "No problem at all.",
    "bengali": "কোনো সমস্যা নেই।"
  },
  {
    "id": 23,
    "foreign": "You are most welcome.",
    "bengali": "আপনাকে সাদর সম্ভাষণ।"
  },
  {
    "id": 24,
    "foreign": "Thank you very much.",
    "bengali": "আপনাকে অনেক ধন্যবাদ।"
  },
  {
    "id": 25,
    "foreign": "Have a great day ahead!",
    "bengali": "আপনার আগামী দিনটি সুন্দর কাটুক!"
  },
  {
    "id": 26,
    "foreign": "See you tomorrow.",
    "bengali": "কাল দেখা হবে।"
  },
  {
    "id": 27,
    "foreign": "Take care of yourself.",
    "bengali": "নিজের যত্ন নেবেন।"
  },
  {
    "id": 28,
    "foreign": "Good night and sweet dreams.",
    "bengali": "শুভ রাত্রি এবং সুন্দর স্বপ্ন দেখুন।"
  },
  {
    "id": 29,
    "foreign": "Are you busy right now?",
    "bengali": "আপনি কি এখন ব্যস্ত আছেন?"
  },
  {
    "id": 30,
    "foreign": "I have some free time.",
    "bengali": "আমার কিছু অবসর সময় আছে।"
  },
  {
    "id": 31,
    "foreign": "Let's stay in touch.",
    "bengali": "যোগাযোগ বজায় রাখবেন।"
  },
  {
    "id": 32,
    "foreign": "Can I have your number?",
    "bengali": "আমি কি আপনার ফোন নম্বর পেতে পারি?"
  },
  {
    "id": 33,
    "foreign": "Sure, here is my number.",
    "bengali": "অবশ্যই, এই নিন আমার নম্বর।"
  },
  {
    "id": 34,
    "foreign": "It was a pleasure meeting you.",
    "bengali": "আপনার সাথে পরিচিত হয়ে আনন্দিত হলাম।"
  },
  {
    "id": 35,
    "foreign": "I must leave now.",
    "bengali": "আমাকে এখন যেতে হবে।"
  },
  {
    "id": 36,
    "foreign": "Please have a seat.",
    "bengali": "দয়া করে বসুন।"
  },
  {
    "id": 37,
    "foreign": "May I come in?",
    "bengali": "আমি কি ভেতরে আসতে পারি?"
  },
  {
    "id": 38,
    "foreign": "Long time no see!",
    "bengali": "অনেক দিন পর দেখা হলো!"
  },
  {
    "id": 39,
    "foreign": "How is everything going?",
    "bengali": "সব কেমন চলছে?"
  },
  {
    "id": 40,
    "foreign": "Everything is going great.",
    "bengali": "সবকিছু দারুণ চলছে।"
  },
  {
    "id": 41,
    "foreign": "What are you doing now?",
    "bengali": "তুমি এখন কী করছ?"
  },
  {
    "id": 42,
    "foreign": "I am learning English.",
    "bengali": "আমি ইংরেজি শিখছি।"
  },
  {
    "id": 43,
    "foreign": "Can you help me for a minute?",
    "bengali": "আপনি কি আমাকে এক মিনিট সাহায্য করবেন?"
  },
  {
    "id": 44,
    "foreign": "Yes, what do you need?",
    "bengali": "হ্যাঁ, আপনার কী প্রয়োজন?"
  },
  {
    "id": 45,
    "foreign": "I don't understand this.",
    "bengali": "আমি এটা বুঝতে পারছি না।"
  },
  {
    "id": 46,
    "foreign": "Could you explain it again?",
    "bengali": "আপনি কি এটি আবার বুঝিয়ে বলবেন?"
  },
  {
    "id": 47,
    "foreign": "I completely agree with you.",
    "bengali": "আমি আপনার সাথে পুরোপুরি একমত।"
  },
  {
    "id": 48,
    "foreign": "I think so too.",
    "bengali": "আমিও তাই মনে করি।"
  },
  {
    "id": 49,
    "foreign": "I don't think that is right.",
    "bengali": "আমার মনে হয় না এটা সঠিক।"
  },
  {
    "id": 50,
    "foreign": "What do you think about this?",
    "bengali": "এ বিষয়ে আপনার মতামত কী?"
  },
  {
    "id": 51,
    "foreign": "In my opinion, it is good.",
    "bengali": "আমার মতে এটি বেশ ভালো।"
  },
  {
    "id": 52,
    "foreign": "What happened here?",
    "bengali": "এখানে কী ঘটেছে?"
  },
  {
    "id": 53,
    "foreign": "Nothing serious, don't worry.",
    "bengali": "গুরুতর কিছু নয়, চিন্তা করবেন না।"
  },
  {
    "id": 54,
    "foreign": "Are you ready to go?",
    "bengali": "আপনি কি বের হওয়ার জন্য তৈরি?"
  },
  {
    "id": 55,
    "foreign": "Give me five minutes, please.",
    "bengali": "দয়া করে আমাকে পাঁচ মিনিট সময় দিন।"
  },
  {
    "id": 56,
    "foreign": "I am ready now.",
    "bengali": "আমি এখন প্রস্তুত।"
  },
  {
    "id": 57,
    "foreign": "Let's go together.",
    "bengali": "চলুন আমরা একসাথে যাই।"
  },
  {
    "id": 58,
    "foreign": "Wait for me, please.",
    "bengali": "দয়া করে আমার জন্য একটু অপেক্ষা করুন।"
  },
  {
    "id": 59,
    "foreign": "I am in a hurry.",
    "bengali": "আমার খুব তাড়া আছে।"
  },
  {
    "id": 60,
    "foreign": "Don't rush, take your time.",
    "bengali": "তাড়াহুড়ো করবেন না, সময় নিয়ে করুন।"
  },
  {
    "id": 61,
    "foreign": "What are your plans for today?",
    "bengali": "আজকে আপনার কী পরিকল্পনা?"
  },
  {
    "id": 62,
    "foreign": "I have no special plans.",
    "bengali": "আমার বিশেষ কোনো পরিকল্পনা নেই।"
  },
  {
    "id": 63,
    "foreign": "It sounds interesting.",
    "bengali": "শুনতে খুব আকর্ষণীয় লাগছে।"
  },
  {
    "id": 64,
    "foreign": "I am so excited about it.",
    "bengali": "আমি এটার জন্য খুবই রোমাঞ্চিত।"
  },
  {
    "id": 65,
    "foreign": "Don't worry, be happy.",
    "bengali": "চিন্তা করবেন না, হাসিখুশি থাকুন।"
  },
  {
    "id": 66,
    "foreign": "Everything will be fine.",
    "bengali": "সব ঠিক হয়ে যাবে।"
  },
  {
    "id": 67,
    "foreign": "I made a mistake.",
    "bengali": "আমি একটি ভুল করে ফেলেছি।"
  },
  {
    "id": 68,
    "foreign": "Never mind, it happens.",
    "bengali": "কিছু মনে করবেন না, এমনটা হতেই পারে।"
  },
  {
    "id": 69,
    "foreign": "Can I ask you a question?",
    "bengali": "আমি কি আপনাকে একটি প্রশ্ন করতে পারি?"
  },
  {
    "id": 70,
    "foreign": "Go ahead, please ask.",
    "bengali": "অবশ্যই, জিজ্ঞাসা করুন।"
  },
  {
    "id": 71,
    "foreign": "Do you know where it is?",
    "bengali": "আপনি কি জানেন এটি কোথায়?"
  },
  {
    "id": 72,
    "foreign": "I am not quite sure.",
    "bengali": "আমি পুরোপুরি নিশ্চিত নই।"
  },
  {
    "id": 73,
    "foreign": "Let me check on that.",
    "bengali": "আমাকে একটু দেখতে দিন।"
  },
  {
    "id": 74,
    "foreign": "Thank you for your kindness.",
    "bengali": "আপনার দয়ার জন্য আন্তরিক ধন্যবাদ।"
  },
  {
    "id": 75,
    "foreign": "I appreciate your help.",
    "bengali": "আমি আপনার সাহায্যের প্রশংসা করি।"
  },
  {
    "id": 76,
    "foreign": "What a surprise to see you!",
    "bengali": "আপনাকে দেখে কী যে ভালো লাগছে!"
  },
  {
    "id": 77,
    "foreign": "Is anyone sitting here?",
    "bengali": "এখানে কি কেউ বসেছেন?"
  },
  {
    "id": 78,
    "foreign": "No, this seat is empty.",
    "bengali": "না, এই সিটটি খালি আছে।"
  },
  {
    "id": 79,
    "foreign": "Please feel free to sit.",
    "bengali": "দয়া করে নিঃসংকোচে বসুন।"
  },
  {
    "id": 80,
    "foreign": "Would you like some tea?",
    "bengali": "আপনি কি একটু চা খাবেন?"
  },
  {
    "id": 81,
    "foreign": "Yes, that would be lovely.",
    "bengali": "হ্যাঁ, খুব ভালো হয়।"
  },
  {
    "id": 82,
    "foreign": "No thanks, I am full.",
    "bengali": "না ধন্যবাদ, আমার পেট ভরা আছে।"
  },
  {
    "id": 83,
    "foreign": "It was very nice.",
    "bengali": "এটা খুব সুন্দর ছিল।"
  },
  {
    "id": 84,
    "foreign": "Keep up the good work.",
    "bengali": "ভালো কাজটি চালিয়ে যান।"
  },
  {
    "id": 85,
    "foreign": "Best of luck to you!",
    "bengali": "আপনার জন্য শুভকামনা রইলো!"
  },
  {
    "id": 86,
    "foreign": "Where is the international airport?",
    "bengali": "আন্তর্জাতিক বিমানবন্দরটি কোথায়?"
  },
  {
    "id": 87,
    "foreign": "Where is terminal two?",
    "bengali": "টার্মিনাল দুই কোন দিকে?"
  },
  {
    "id": 88,
    "foreign": "Where is the check-in counter?",
    "bengali": "চেক-ইন কাউন্টারটি কোথায়?"
  },
  {
    "id": 89,
    "foreign": "Here is my passport and ticket.",
    "bengali": "এই নিন আমার পাসপোর্ট এবং টিকিট।"
  },
  {
    "id": 90,
    "foreign": "How many bags are you checking?",
    "bengali": "আপনি কয়টি ব্যাগ দিচ্ছেন?"
  },
  {
    "id": 91,
    "foreign": "I have one check-in bag.",
    "bengali": "আমার একটি চেক-ইন ব্যাগ আছে।"
  },
  {
    "id": 92,
    "foreign": "This is my hand luggage.",
    "bengali": "এটি আমার হাতব্যাগ।"
  },
  {
    "id": 93,
    "foreign": "Is my flight on time?",
    "bengali": "আমার ফ্লাইট কি সময়মতো ছাড়বে?"
  },
  {
    "id": 94,
    "foreign": "The flight is delayed.",
    "bengali": "ফ্লাইটটি বিলম্বিত হয়েছে।"
  },
  {
    "id": 95,
    "foreign": "Which gate does the flight board?",
    "bengali": "কোন গেট দিয়ে ফ্লাইটে উঠতে হবে?"
  },
  {
    "id": 96,
    "foreign": "Boarding has started now.",
    "bengali": "এখন বিমানে ওঠা শুরু হয়েছে।"
  },
  {
    "id": 97,
    "foreign": "Where is the immigration counter?",
    "bengali": "ইমিগ্রেশন কাউন্টারটি কোন দিকে?"
  },
  {
    "id": 98,
    "foreign": "I am traveling for tourism.",
    "bengali": "আমি ভ্রমণের উদ্দেশ্যে যাচ্ছি।"
  },
  {
    "id": 99,
    "foreign": "I will stay for two weeks.",
    "bengali": "আমি দুই সপ্তাহ অবস্থান করব।"
  },
  {
    "id": 100,
    "foreign": "Where can I collect my baggage?",
    "bengali": "আমি কোথায় আমার লাগেজ সংগ্রহ করব?"
  },
  {
    "id": 101,
    "foreign": "My luggage is missing.",
    "bengali": "আমার লাগেজ খুঁজে পাওয়া যাচ্ছে না।"
  },
  {
    "id": 102,
    "foreign": "Where is the customs exit?",
    "bengali": "কাস্টমস বের হওয়ার পথ কোথায়?"
  },
  {
    "id": 103,
    "foreign": "Where is the train station?",
    "bengali": "রেলওয়ে স্টেশনটি কোথায়?"
  },
  {
    "id": 104,
    "foreign": "I want to buy a train ticket.",
    "bengali": "আমি ট্রেনের একটি টিকিট কিনতে চাই।"
  },
  {
    "id": 105,
    "foreign": "One ticket to central city, please.",
    "bengali": "শহরের কেন্দ্রের একটি টিকিট দিন, দয়া করে।"
  },
  {
    "id": 106,
    "foreign": "Which platform for the express train?",
    "bengali": "এক্সপ্রেস ট্রেন কোন প্ল্যাটফর্মে আসবে?"
  },
  {
    "id": 107,
    "foreign": "The train arrives at platform three.",
    "bengali": "ট্রেনটি তিন নম্বর প্ল্যাটফর্মে আসছে।"
  },
  {
    "id": 108,
    "foreign": "What time is the next train?",
    "bengali": "পরবর্তী ট্রেনটি কখন ছাড়বে?"
  },
  {
    "id": 109,
    "foreign": "Is this seat reserved?",
    "bengali": "এই সিটটি কি সংরক্ষিত?"
  },
  {
    "id": 110,
    "foreign": "Where is the metro station?",
    "bengali": "মেট্রো স্টেশনটি কোথায়?"
  },
  {
    "id": 111,
    "foreign": "How do I buy a metro card?",
    "bengali": "আমি কীভাবে একটি মেট্রো কার্ড কিনব?"
  },
  {
    "id": 112,
    "foreign": "Which line goes to downtown?",
    "bengali": "কোন লাইনটি ডাউনটাউন যায়?"
  },
  {
    "id": 113,
    "foreign": "You need to change at the next station.",
    "bengali": "আপনাকে পরের স্টেশনে ট্রেন বদল করতে হবে।"
  },
  {
    "id": 114,
    "foreign": "Where is the bus stop?",
    "bengali": "বাস স্টপটি কোথায়?"
  },
  {
    "id": 115,
    "foreign": "Does this bus go to the city center?",
    "bengali": "এই বাসটি কি সিটি সেন্টারে যায়?"
  },
  {
    "id": 116,
    "foreign": "How much is the bus fare?",
    "bengali": "বাসের ভাড়া কত?"
  },
  {
    "id": 117,
    "foreign": "Please tell me when we arrive.",
    "bengali": "আমরা পৌঁছালে দয়া করে আমাকে বলবেন।"
  },
  {
    "id": 118,
    "foreign": "Get off at the next stop.",
    "bengali": "পরের স্টপে নেমে যান।"
  },
  {
    "id": 119,
    "foreign": "Where can I find a taxi?",
    "bengali": "আমি ট্যাক্সি কোথায় পাব?"
  },
  {
    "id": 120,
    "foreign": "Please take me to this address.",
    "bengali": "দয়া করে আমাকে এই ঠিকানায় নিয়ে যান।"
  },
  {
    "id": 121,
    "foreign": "Please turn on the meter.",
    "bengali": "দয়া করে মিটার চালু করুন।"
  },
  {
    "id": 122,
    "foreign": "How long will the trip take?",
    "bengali": "যাত্রায় কতক্ষণ সময় লাগবে?"
  },
  {
    "id": 123,
    "foreign": "About thirty minutes, sir.",
    "bengali": "প্রায় ত্রিশ মিনিট লাগবে, স্যার।"
  },
  {
    "id": 124,
    "foreign": "Please stop here.",
    "bengali": "দয়া করে গাড়িটি এখানে থামান।"
  },
  {
    "id": 125,
    "foreign": "Keep the change, thank you.",
    "bengali": "বাকি খুচরা টাকা রাখুন, ধন্যবাদ।"
  },
  {
    "id": 126,
    "foreign": "Is it safe to walk around here?",
    "bengali": "এখানে হেঁটে ঘোরাঘুরি করা কি নিরাপদ?"
  },
  {
    "id": 127,
    "foreign": "I am looking for a tourist map.",
    "bengali": "আমি একটি পর্যটন মানচিত্র খুঁজছি।"
  },
  {
    "id": 128,
    "foreign": "Have a safe and happy journey!",
    "bengali": "আপনার যাত্রা শুভ ও আনন্দময় হোক!"
  },
  {
    "id": 129,
    "foreign": "I have a room reservation.",
    "bengali": "আমার একটি রুম বুকিং করা আছে।"
  },
  {
    "id": 130,
    "foreign": "My reservation is under Kabir.",
    "bengali": "বুকিংটি কবির নামে করা আছে।"
  },
  {
    "id": 131,
    "foreign": "Do you have any vacant rooms?",
    "bengali": "আপনাদের কি কোনো খালি রুম আছে?"
  },
  {
    "id": 132,
    "foreign": "I need a single room, please.",
    "bengali": "আমার একটি সিঙ্গেল রুম দরকার।"
  },
  {
    "id": 133,
    "foreign": "I would like a double room.",
    "bengali": "আমি একটি ডাবল রুম নিতে চাই।"
  },
  {
    "id": 134,
    "foreign": "How much is the room per night?",
    "bengali": "প্রতি রাতের জন্য রুমের ভাড়া কত?"
  },
  {
    "id": 135,
    "foreign": "Does the price include breakfast?",
    "bengali": "ভাড়ার সাথে কি সকালের নাশতা অন্তর্ভুক্ত?"
  },
  {
    "id": 136,
    "foreign": "What time is check-in?",
    "bengali": "চেক-ইন করার সময় কখন?"
  },
  {
    "id": 137,
    "foreign": "What time is check-out?",
    "bengali": "চেক-আউট করার শেষ সময় কখন?"
  },
  {
    "id": 138,
    "foreign": "Could I check in early?",
    "bengali": "আমি কি একটু আগে চেক-ইন করতে পারি?"
  },
  {
    "id": 139,
    "foreign": "Here is your room key card.",
    "bengali": "এই নিন আপনার রুমের কি-কার্ড।"
  },
  {
    "id": 140,
    "foreign": "Your room is on the fifth floor.",
    "bengali": "আপনার রুমটি পাঁচ তলায়।"
  },
  {
    "id": 141,
    "foreign": "Where is the elevator?",
    "bengali": "লিফটটি কোন দিকে?"
  },
  {
    "id": 142,
    "foreign": "What is the Wi-Fi password?",
    "bengali": "ওয়াইফাইয়ের পাসওয়ার্ড কী?"
  },
  {
    "id": 143,
    "foreign": "The Wi-Fi signal is very weak.",
    "bengali": "ওয়াইফাই সিগন্যাল খুব দুর্বল।"
  },
  {
    "id": 144,
    "foreign": "Can I have an extra pillow?",
    "bengali": "আমি কি একটি অতিরিক্ত বালিশ পেতে পারি?"
  },
  {
    "id": 145,
    "foreign": "Please send an extra blanket.",
    "bengali": "দয়া করে একটি বাড়তি কম্বল পাঠিয়ে দিন।"
  },
  {
    "id": 146,
    "foreign": "There is no hot water in the bathroom.",
    "bengali": "বাথরুমে কোনো গরম পানি আসছে না।"
  },
  {
    "id": 147,
    "foreign": "The air conditioner is not working.",
    "bengali": "এসি কাজ করছে না।"
  },
  {
    "id": 148,
    "foreign": "Could you clean my room, please?",
    "bengali": "দয়া করে আমার রুমটি একটু পরিষ্কার করে দেবেন?"
  },
  {
    "id": 149,
    "foreign": "Please do not disturb right now.",
    "bengali": "এখন বিরক্ত করবেন না, দয়া করে।"
  },
  {
    "id": 150,
    "foreign": "Where is the hotel dining hall?",
    "bengali": "হোটেলের ডাইনিং হলটি কোথায়?"
  },
  {
    "id": 151,
    "foreign": "Can I leave my bags here for a few hours?",
    "bengali": "আমি কি আমার ব্যাগগুলো এখানে কয়েক ঘণ্টার জন্য রাখতে পারি?"
  },
  {
    "id": 152,
    "foreign": "Sure, we will store them safely.",
    "bengali": "অবশ্যই, আমরা নিরাপদে সংরক্ষণ করব।"
  },
  {
    "id": 153,
    "foreign": "I would like to extend my stay by one night.",
    "bengali": "আমি আরও এক রাত থাকতে চাই।"
  },
  {
    "id": 154,
    "foreign": "I am ready to check out now.",
    "bengali": "আমি এখন চেক-আউট করতে প্রস্তুত।"
  },
  {
    "id": 155,
    "foreign": "Can I pay by credit card?",
    "bengali": "আমি কি ক্রেডিট কার্ড দিয়ে পেমেন্ট করতে পারি?"
  },
  {
    "id": 156,
    "foreign": "Could you call a taxi for me?",
    "bengali": "আপনি কি আমার জন্য একটি ট্যাক্সি ডেকে দেবেন?"
  },
  {
    "id": 157,
    "foreign": "Thank you for your excellent service.",
    "bengali": "আপনাদের চমৎকার সেবার জন্য অনেক ধন্যবাদ।"
  },
  {
    "id": 158,
    "foreign": "I really enjoyed my stay here.",
    "bengali": "এখানে আমার থাকার অভিজ্ঞতা খুব ভালো ছিল।"
  },
  {
    "id": 159,
    "foreign": "A table for two, please.",
    "bengali": "দুইজনের জন্য একটি টেবিল দিন, দয়া করে।"
  },
  {
    "id": 160,
    "foreign": "Do we need a reservation?",
    "bengali": "আমাদের কি আগে থেকে টেবিল বুক করতে হবে?"
  },
  {
    "id": 161,
    "foreign": "Could we see the menu, please?",
    "bengali": "আমরা কি মেন্যু কার্ডটি দেখতে পারি?"
  },
  {
    "id": 162,
    "foreign": "What do you recommend here?",
    "bengali": "এখানকার কোন খাবারটি আপনি সাজেস্ট করবেন?"
  },
  {
    "id": 163,
    "foreign": "What is the special dish today?",
    "bengali": "আজকের বিশেষ খাবার কী?"
  },
  {
    "id": 164,
    "foreign": "I would like a bottle of mineral water.",
    "bengali": "আমি এক বোতল মিনারেল ওয়াটার চাই।"
  },
  {
    "id": 165,
    "foreign": "Could we have two cups of black coffee?",
    "bengali": "আমরা কি দুই কাপ ব্ল্যাক কফি পেতে পারি?"
  },
  {
    "id": 166,
    "foreign": "I am a vegetarian.",
    "bengali": "আমি নিরামিষভোজী।"
  },
  {
    "id": 167,
    "foreign": "Is this food spicy?",
    "bengali": "এই খাবারটি কি ঝাল?"
  },
  {
    "id": 168,
    "foreign": "Please make it less spicy.",
    "bengali": "দয়া করে ঝাল কম দেবেন।"
  },
  {
    "id": 169,
    "foreign": "I have a peanut allergy.",
    "bengali": "বাদামে আমার অ্যালার্জি আছে।"
  },
  {
    "id": 170,
    "foreign": "Does this dish contain seafood?",
    "bengali": "এই খাবারে কি সামুদ্রিক মাছ আছে?"
  },
  {
    "id": 171,
    "foreign": "We are ready to order now.",
    "bengali": "আমরা এখন খাবারের অর্ডার দিতে প্রস্তুত।"
  },
  {
    "id": 172,
    "foreign": "I would like fried chicken and rice.",
    "bengali": "আমি ফ্রাইড চিকেন এবং ভাত নিতে চাই।"
  },
  {
    "id": 173,
    "foreign": "Can we have some extra napkins?",
    "bengali": "আমরা কি কিছু অতিরিক্ত টিস্যু পেতে পারি?"
  },
  {
    "id": 174,
    "foreign": "Could you bring some salt and pepper?",
    "bengali": "একটু লবণ ও গোলমরিচ এনে দেবেন কি?"
  },
  {
    "id": 175,
    "foreign": "How long will the food take?",
    "bengali": "খাবার আসতে কতক্ষণ সময় লাগবে?"
  },
  {
    "id": 176,
    "foreign": "It will take about fifteen minutes.",
    "bengali": "প্রায় পনেরো মিনিট সময় লাগবে।"
  },
  {
    "id": 177,
    "foreign": "The food is absolutely delicious!",
    "bengali": "খাবারটি সত্যিই অত্যন্ত সুস্বাদু!"
  },
  {
    "id": 178,
    "foreign": "Everything tastes so fresh.",
    "bengali": "সব খাবারই বেশ তাজা ও সতেজ।"
  },
  {
    "id": 179,
    "foreign": "Excuse me, this is not what I ordered.",
    "bengali": "মাফ করবেন, আমি এই খাবারের অর্ডার দিইনি।"
  },
  {
    "id": 180,
    "foreign": "Could you please warm this up?",
    "bengali": "এটি কি একটু গরম করে দেওয়া যাবে?"
  },
  {
    "id": 181,
    "foreign": "Can I get a glass of warm water?",
    "bengali": "আমি কি এক গ্লাস কুসুম গরম পানি পেতে পারি?"
  },
  {
    "id": 182,
    "foreign": "We would like some dessert.",
    "bengali": "আমরা কিছু মিষ্টি জাতীয় ডেজার্ট নিতে চাই।"
  },
  {
    "id": 183,
    "foreign": "Do you have fresh fruit juice?",
    "bengali": "আপনাদের কাছে কি তাজা ফলের জুস আছে?"
  },
  {
    "id": 184,
    "foreign": "Could we have the bill, please?",
    "bengali": "আমাদের বিলটি একটু এনে দেবেন?"
  },
  {
    "id": 185,
    "foreign": "Can we pay separately?",
    "bengali": "আমরা কি আলাদাভাবে বিল দিতে পারি?"
  },
  {
    "id": 186,
    "foreign": "Is service charge included in the bill?",
    "bengali": "বিলের সাথে কি সার্ভিস চার্জ যুক্ত আছে?"
  },
  {
    "id": 187,
    "foreign": "Please pack the leftovers.",
    "bengali": "বাকি খাবারটুকু দয়া করে পার্সেল করে দিন।"
  },
  {
    "id": 188,
    "foreign": "Thank you for the wonderful meal.",
    "bengali": "চমৎকার এই খাবারের জন্য ধন্যবাদ।"
  },
  {
    "id": 189,
    "foreign": "Excuse me, where is the nearest bank?",
    "bengali": "মাফ করবেন, সবচেয়ে কাছের ব্যাংকটি কোথায়?"
  },
  {
    "id": 190,
    "foreign": "How do I get to this shopping mall?",
    "bengali": "এই শপিং মলে আমি কীভাবে যাব?"
  },
  {
    "id": 191,
    "foreign": "Is it far from here?",
    "bengali": "এটা কি এখান থেকে অনেক দূরে?"
  },
  {
    "id": 192,
    "foreign": "No, it is just a five-minute walk.",
    "bengali": "না, হেঁটে যেতে মাত্র পাঁচ মিনিট লাগবে।"
  },
  {
    "id": 193,
    "foreign": "Go straight ahead.",
    "bengali": "সোজা সামনের দিকে এগিয়ে যান।"
  },
  {
    "id": 194,
    "foreign": "Turn right at the traffic signal.",
    "bengali": "ট্রাফিক সিগন্যালে গিয়ে ডানে মোড় নিন।"
  },
  {
    "id": 195,
    "foreign": "Turn left at the next crossroads.",
    "bengali": "পরের চৌরাস্তায় গিয়ে বাঁয়ে ঘুরুন।"
  },
  {
    "id": 196,
    "foreign": "It is on your right-hand side.",
    "bengali": "এটি আপনার ডান পাশে পড়বে।"
  },
  {
    "id": 197,
    "foreign": "It is right across the street.",
    "bengali": "এটি রাস্তার ঠিক উল্টো দিকে অবস্থিত।"
  },
  {
    "id": 198,
    "foreign": "You are going in the wrong direction.",
    "bengali": "আপনি ভুল দিকে যাচ্ছেন।"
  },
  {
    "id": 199,
    "foreign": "Please show me on Google Maps.",
    "bengali": "দয়া করে আমাকে গুগল ম্যাপে একটু দেখিয়ে দিন।"
  },
  {
    "id": 200,
    "foreign": "Where is the public restroom?",
    "bengali": "পাবলিক ওয়াশরুমটি কোন দিকে?"
  },
  {
    "id": 201,
    "foreign": "Where can I find an ATM machine?",
    "bengali": "কোথায় একটি এটিএম বুথ পাওয়া যাবে?"
  },
  {
    "id": 202,
    "foreign": "Is there a pharmacy nearby?",
    "bengali": "কাছাকাছি কি কোনো ওষুধের দোকান আছে?"
  },
  {
    "id": 203,
    "foreign": "Where is the central park?",
    "bengali": "সেন্ট্রাল পার্কটি কোন দিকে?"
  },
  {
    "id": 204,
    "foreign": "Which way to the railway station?",
    "bengali": "রেল স্টেশনের রাস্তা কোন দিক দিয়ে?"
  },
  {
    "id": 205,
    "foreign": "Can I walk there easily?",
    "bengali": "আমি কি হেঁটে অনায়াসে যেতে পারব?"
  },
  {
    "id": 206,
    "foreign": "It is better to take a taxi.",
    "bengali": "ট্যাক্সি নেওয়াটাই বেশি ভালো হবে।"
  },
  {
    "id": 207,
    "foreign": "I am completely lost.",
    "bengali": "আমি পুরোপুরি পথ হারিয়ে ফেলেছি।"
  },
  {
    "id": 208,
    "foreign": "Don't worry, follow me.",
    "bengali": "চিন্তা করবেন না, আমার সাথে আসুন।"
  },
  {
    "id": 209,
    "foreign": "Thank you for guiding me.",
    "bengali": "আমাকে পথ দেখিয়ে দেওয়ার জন্য ধন্যবাদ।"
  },
  {
    "id": 210,
    "foreign": "How much does this cost?",
    "bengali": "এটার দাম কত?"
  },
  {
    "id": 211,
    "foreign": "Do you have this in a larger size?",
    "bengali": "এটির কি বড় সাইজ আপনাদের কাছে আছে?"
  },
  {
    "id": 212,
    "foreign": "Do you have this in medium size?",
    "bengali": "এটির মিডিয়াম সাইজ কি হবে?"
  },
  {
    "id": 213,
    "foreign": "Can I try this on?",
    "bengali": "আমি কি এটা একটু ট্রায়াল দিয়ে দেখতে পারি?"
  },
  {
    "id": 214,
    "foreign": "Where is the fitting room?",
    "bengali": "ট্রায়াল রুমটি কোথায়?"
  },
  {
    "id": 215,
    "foreign": "It fits me perfectly.",
    "bengali": "এটা আমার গায়ে একেবারে ফিট হয়েছে।"
  },
  {
    "id": 216,
    "foreign": "It is too tight for me.",
    "bengali": "এটা আমার জন্য অনেক বেশি টাইট।"
  },
  {
    "id": 217,
    "foreign": "Do you have other colors available?",
    "bengali": "এটির কি অন্য কোনো রঙ আছে?"
  },
  {
    "id": 218,
    "foreign": "The price is a bit too high.",
    "bengali": "দামটা একটু বেশি মনে হচ্ছে।"
  },
  {
    "id": 219,
    "foreign": "Can you give me a discount?",
    "bengali": "আপনি কি কিছুটা ছাড় দেবেন?"
  },
  {
    "id": 220,
    "foreign": "What is your best final price?",
    "bengali": "আপনার একদম শেষ দাম কত?"
  },
  {
    "id": 221,
    "foreign": "I can give you ten dollars.",
    "bengali": "আমি আপনাকে দশ ডলার দিতে পারি।"
  },
  {
    "id": 222,
    "foreign": "Okay, I will take it.",
    "bengali": "ঠিক আছে, আমি এটা নিব।"
  },
  {
    "id": 223,
    "foreign": "I am just looking around, thank you.",
    "bengali": "আমি শুধু দেখছি, ধন্যবাদ।"
  },
  {
    "id": 224,
    "foreign": "Can I pay with cash?",
    "bengali": "আমি কি ক্যাশ টাকায় পেমেন্ট করতে পারি?"
  },
  {
    "id": 225,
    "foreign": "Do you accept credit cards?",
    "bengali": "আপনারা কি ক্রেডিট কার্ড গ্রহণ করেন?"
  },
  {
    "id": 226,
    "foreign": "Can I get a receipt, please?",
    "bengali": "আমি কি একটি রশিদ পেতে পারি?"
  },
  {
    "id": 227,
    "foreign": "Can I return this if there is a defect?",
    "bengali": "কোনো ত্রুটি থাকলে কি এটা ফেরত দেওয়া যাবে?"
  },
  {
    "id": 228,
    "foreign": "Please pack this as a gift.",
    "bengali": "দয়া করে এটি উপহার হিসেবে প্যাকেট করে দিন।"
  },
  {
    "id": 229,
    "foreign": "Thank you, have a nice day!",
    "bengali": "ধন্যবাদ, দিনটি আপনার ভালো কাটুক!"
  },
  {
    "id": 230,
    "foreign": "We have a team meeting at ten.",
    "bengali": "দশটায় আমাদের একটি টিম মিটিং আছে।"
  },
  {
    "id": 231,
    "foreign": "Did you receive my email?",
    "bengali": "আপনি কি আমার পাঠানো ইমেইলটি পেয়েছেন?"
  },
  {
    "id": 232,
    "foreign": "I will reply to you shortly.",
    "bengali": "আমি শীঘ্রই আপনাকে উত্তর দেব।"
  },
  {
    "id": 233,
    "foreign": "Please send me the report file.",
    "bengali": "দয়া করে আমাকে রিপোর্টের ফাইলটি পাঠান।"
  },
  {
    "id": 234,
    "foreign": "Let's discuss this project tomorrow.",
    "bengali": "চলুন আগামীকাল এই প্রজেক্ট নিয়ে আলোচনা করি।"
  },
  {
    "id": 235,
    "foreign": "I am working on this task now.",
    "bengali": "আমি এখন এই কাজটি নিয়ে কাজ করছি।"
  },
  {
    "id": 236,
    "foreign": "When is the final deadline?",
    "bengali": "কাজের শেষ সময়সীমা কবে?"
  },
  {
    "id": 237,
    "foreign": "The deadline is next Monday.",
    "bengali": "সময়সীমা আগামী সোমবার।"
  },
  {
    "id": 238,
    "foreign": "Good luck with your new exam.",
    "bengali": "তোমার নতুন পরীক্ষার জন্য শুভকামনা।"
  },
  {
    "id": 239,
    "foreign": "I have to study hard tonight.",
    "bengali": "আমাকে আজ রাতে অনেক মন দিয়ে পড়তে হবে।"
  },
  {
    "id": 240,
    "foreign": "Can you share your class notes?",
    "bengali": "তুমি কি ক্লাসের নোটগুলো শেয়ার করতে পারবে?"
  },
  {
    "id": 241,
    "foreign": "Knowledge is true power.",
    "bengali": "জ্ঞানই প্রকৃত শক্তি।"
  },
  {
    "id": 242,
    "foreign": "I am not feeling very well.",
    "bengali": "আমার শরীরটা খুব একটা ভালো লাগছে না।"
  },
  {
    "id": 243,
    "foreign": "I have a terrible headache.",
    "bengali": "আমার ভীষণ মাথা ব্যথা করছে।"
  },
  {
    "id": 244,
    "foreign": "I have a fever and cold.",
    "bengali": "আমার জ্বর এবং ঠান্ডা লেগেছে।"
  },
  {
    "id": 245,
    "foreign": "My stomach hurts badly.",
    "bengali": "আমার পেট খুব ব্যথা করছে।"
  },
  {
    "id": 246,
    "foreign": "I need to see a doctor immediately.",
    "bengali": "আমার অবিলম্বে একজন ডাক্তার দেখানো প্রয়োজন।"
  },
  {
    "id": 247,
    "foreign": "Where is the nearest hospital?",
    "bengali": "সবচেয়ে কাছের হাসপাতালটি কোথায়?"
  },
  {
    "id": 248,
    "foreign": "Please call an ambulance quickly!",
    "bengali": "দয়া করে দ্রুত একটি অ্যাম্বুলেন্স ডাকুন!"
  },
  {
    "id": 249,
    "foreign": "Do you have medicine for cough?",
    "bengali": "আপনাদের কাছে কি কাশির ওষুধ আছে?"
  },
  {
    "id": 250,
    "foreign": "How many times a day should I take this?",
    "bengali": "এটি দিনে কতবার করে খেতে হবে?"
  },
  {
    "id": 251,
    "foreign": "Take one tablet after dinner.",
    "bengali": "রাতের খাবারের পর একটি করে ট্যাবলেট খাবেন।"
  },
  {
    "id": 252,
    "foreign": "Drink plenty of warm water.",
    "bengali": "প্রচুর পরিমাণে কুসুম গরম পানি পান করুন।"
  },
  {
    "id": 253,
    "foreign": "Get well soon, my friend.",
    "bengali": "তাড়াতাড়ি সুস্থ হয়ে উঠুন, বন্ধু।"
  },
  {
    "id": 254,
    "foreign": "Help me, please!",
    "bengali": "দয়া করে আমাকে সাহায্য করুন!"
  },
  {
    "id": 255,
    "foreign": "Call the police right away!",
    "bengali": "অবিলম্বে পুলিশকে কল করুন!"
  },
  {
    "id": 256,
    "foreign": "Someone stole my wallet.",
    "bengali": "কেউ একজন আমার মানিব্যাগ চুরি করেছে।"
  },
  {
    "id": 257,
    "foreign": "I have lost my passport.",
    "bengali": "আমি আমার পাসপোর্ট হারিয়ে ফেলেছি।"
  },
  {
    "id": 258,
    "foreign": "Where is the police station?",
    "bengali": "থানা বা পুলিশ স্টেশনটি কোথায়?"
  },
  {
    "id": 259,
    "foreign": "I need to report an incident.",
    "bengali": "আমি একটি ঘটনার ব্যাপারে অভিযোগ করতে চাই।"
  },
  {
    "id": 260,
    "foreign": "Please stay calm, help is coming.",
    "bengali": "দয়া করে শান্ত থাকুন, সাহায্য আসছে।"
  },
  {
    "id": 261,
    "foreign": "Can I use your mobile phone?",
    "bengali": "আমি কি আপনার মোবাইল ফোনটি ব্যবহার করতে পারি?"
  },
  {
    "id": 262,
    "foreign": "I am so happy to hear that.",
    "bengali": "খবরটি শুনে আমি ভীষণ আনন্দিত।"
  },
  {
    "id": 263,
    "foreign": "That sounds wonderful!",
    "bengali": "ব্যাপারটা সত্যিই চমৎকার লাগছে!"
  },
  {
    "id": 264,
    "foreign": "I am so proud of you.",
    "bengali": "আমি তোমাকে নিয়ে অত্যন্ত গর্বিত।"
  },
  {
    "id": 265,
    "foreign": "Thank you for always supporting me.",
    "bengali": "সবসময় পাশে থাকার জন্য ধন্যবাদ।"
  },
  {
    "id": 266,
    "foreign": "I believe in you completely.",
    "bengali": "আমি তোমার ওপর সম্পূর্ণ বিশ্বাস রাখি।"
  },
  {
    "id": 267,
    "foreign": "Never give up on your dreams.",
    "bengali": "কখনও নিজের স্বপ্নের পিছু ছাড়বেন না।"
  },
  {
    "id": 268,
    "foreign": "It is never too late to learn.",
    "bengali": "শেখার কোনো বয়স বা শেষ নেই।"
  },
  {
    "id": 269,
    "foreign": "Practice makes a man perfect.",
    "bengali": "অনুশীলনই মানুষকে নিখুঁত করে তোলে।"
  },
  {
    "id": 270,
    "foreign": "Live life with a smile.",
    "bengali": "হাসিমুখে জীবন উপভোগ করুন।"
  },
  {
    "id": 271,
    "foreign": "Take care and stay safe.",
    "bengali": "ভালো থাকুন এবং নিরাপদে থাকুন।"
  },
  {
    "id": 272,
    "foreign": "My phone battery is very low.",
    "bengali": "আমার ফোনের চার্জ একদম কম।"
  },
  {
    "id": 273,
    "foreign": "Do you have a phone charger?",
    "bengali": "আপনার কাছে কি একটি ফোন চার্জার আছে?"
  },
  {
    "id": 274,
    "foreign": "Can I connect to your hotspot?",
    "bengali": "আমি কি আপনার হটস্পটে কানেক্ট করতে পারি?"
  },
  {
    "id": 275,
    "foreign": "What time is it now?",
    "bengali": "এখন কয়টা বাজে?"
  },
  {
    "id": 276,
    "foreign": "It is quarter past four.",
    "bengali": "এখন চারটা বেজে পনেরো মিনিট।"
  },
  {
    "id": 277,
    "foreign": "See you at five o'clock sharp.",
    "bengali": "ঠিক পাঁচটায় দেখা হবে।"
  },
  {
    "id": 278,
    "foreign": "Thank you and goodbye!",
    "bengali": "ধন্যবাদ এবং বিদায়!"
  },
  {
    "id": 279,
    "foreign": "Where are you going right now?",
    "bengali": "আপনি এখন কোথায় যাচ্ছেন?"
  },
  {
    "id": 280,
    "foreign": "I am going to the market.",
    "bengali": "আমি বাজারে যাচ্ছি।"
  },
  {
    "id": 281,
    "foreign": "What did you have for breakfast?",
    "bengali": "সকালের নাশতায় আপনি কী খেয়েছেন?"
  },
  {
    "id": 282,
    "foreign": "I had bread and eggs.",
    "bengali": "আমি রুটি ও ডিম খেয়েছি।"
  },
  {
    "id": 283,
    "foreign": "The weather is lovely today.",
    "bengali": "আজকের আবহাওয়া বেশ মনোরম।"
  },
  {
    "id": 284,
    "foreign": "It is raining heavily outside.",
    "bengali": "বাইরে বেশ ভারী বৃষ্টি হচ্ছে।"
  },
  {
    "id": 285,
    "foreign": "Don't forget to take an umbrella.",
    "bengali": "সাথে ছাতা নিতে ভুলবেন না।"
  },
  {
    "id": 286,
    "foreign": "How much time do we have left?",
    "bengali": "আমাদের আর কত সময় বাকি আছে?"
  },
  {
    "id": 287,
    "foreign": "We have plenty of time.",
    "bengali": "আমাদের হাতে যথেষ্ট সময় আছে।"
  },
  {
    "id": 288,
    "foreign": "Hurry up or we will be late.",
    "bengali": "তাড়াতাড়ি করুন নইলে আমাদের দেরি হয়ে যাবে।"
  },
  {
    "id": 289,
    "foreign": "Can you turn on the light?",
    "bengali": "আপনি কি লাইটটি জ্বালিয়ে দেবেন?"
  },
  {
    "id": 290,
    "foreign": "Please turn off the fan.",
    "bengali": "দয়া করে ফ্যানটি বন্ধ করুন।"
  },
  {
    "id": 291,
    "foreign": "Close the window, please.",
    "bengali": "দয়া করে জানালাটি বন্ধ করুন।"
  },
  {
    "id": 292,
    "foreign": "Open the door, please.",
    "bengali": "দয়া করে দরজাটি খুলুন।"
  },
  {
    "id": 293,
    "foreign": "Who is knocking at the door?",
    "bengali": "দরজায় কে কড়া নাড়ছে?"
  },
  {
    "id": 294,
    "foreign": "Let me open it.",
    "bengali": "আমাকে দরজাটি খুলতে দিন।"
  },
  {
    "id": 295,
    "foreign": "Are you coming with us?",
    "bengali": "তুমি কি আমাদের সাথে আসছ?"
  },
  {
    "id": 296,
    "foreign": "Yes, count me in.",
    "bengali": "হ্যাঁ, আমাকেও সাথে নাও।"
  },
  {
    "id": 297,
    "foreign": "I am not interested in this.",
    "bengali": "এ ব্যাপারে আমার কোনো আগ্রহ নেই।"
  },
  {
    "id": 298,
    "foreign": "What kind of music do you like?",
    "bengali": "আপনি কী ধরনের গান পছন্দ করেন?"
  },
  {
    "id": 299,
    "foreign": "I love listening to soft songs.",
    "bengali": "আমি ধীরগতির মিষ্টি গান শুনতে ভালোবাসি।"
  },
  {
    "id": 300,
    "foreign": "Do you like watching movies?",
    "bengali": "আপনি কি সিনেমা দেখতে পছন্দ করেন?"
  },
  {
    "id": 301,
    "foreign": "Yes, especially comedy movies.",
    "bengali": "হ্যাঁ, বিশেষ করে হাসির সিনেমা।"
  },
  {
    "id": 302,
    "foreign": "Let's watch a movie together.",
    "bengali": "চলুন একসাথে একটি সিনেমা দেখি।"
  },
  {
    "id": 303,
    "foreign": "Have you been to this place before?",
    "bengali": "আপনি কি আগে কখনও এই জায়গায় এসেছেন?"
  },
  {
    "id": 304,
    "foreign": "This is my first time here.",
    "bengali": "এখানে আমি এবারই প্রথম এসেছি।"
  },
  {
    "id": 305,
    "foreign": "It is a truly beautiful country.",
    "bengali": "এটি সত্যিই একটি দারুণ সুন্দর দেশ।"
  },
  {
    "id": 306,
    "foreign": "The local people are very friendly.",
    "bengali": "এখানকার স্থানীয় মানুষজন খুবই আন্তরিক।"
  },
  {
    "id": 307,
    "foreign": "I will never forget this trip.",
    "bengali": "আমি এই ভ্রমণের কথা কখনও ভুলব না।"
  },
  {
    "id": 308,
    "foreign": "Can you take a photo of me?",
    "bengali": "আপনি কি আমার একটি ছবি তুলে দেবেন?"
  },
  {
    "id": 309,
    "foreign": "Sure, smile for the camera!",
    "bengali": "অবশ্যই, ক্যামেরার দিকে তাকিয়ে একটু হাসুন!"
  },
  {
    "id": 310,
    "foreign": "One more picture, please.",
    "bengali": "দয়া করে আরও একটি ছবি তুলুন।"
  },
  {
    "id": 311,
    "foreign": "Thank you, the picture looks great.",
    "bengali": "ধন্যবাদ, ছবিটি দারুণ এসেছে।"
  },
  {
    "id": 312,
    "foreign": "Where can I exchange money?",
    "bengali": "আমি কোথায় মুদ্রা বা টাকা ভাঙাতে পারব?"
  },
  {
    "id": 313,
    "foreign": "Is there a currency exchange nearby?",
    "bengali": "কাছাকাছি কি কোনো মানি এক্সচেঞ্জ আছে?"
  },
  {
    "id": 314,
    "foreign": "What is today's exchange rate?",
    "bengali": "আজকের মুদ্রা বিনিময়ের হার কত?"
  },
  {
    "id": 315,
    "foreign": "I want to exchange some dollars.",
    "bengali": "আমি কিছু ডলার ভাঙাতে চাই।"
  },
  {
    "id": 316,
    "foreign": "Please sign on this receipt.",
    "bengali": "দয়া করে এই রশিদে একটি সই করুন।"
  },
  {
    "id": 317,
    "foreign": "Can you break a hundred-dollar note?",
    "bengali": "আপনি কি একশত ডলারের ভাংতি দিতে পারবেন?"
  },
  {
    "id": 318,
    "foreign": "Here are smaller bills for you.",
    "bengali": "এই নিন আপনার ছোট নোটগুলো।"
  },
  {
    "id": 319,
    "foreign": "Where can I buy a local SIM card?",
    "bengali": "আমি কোথা থেকে একটি লোকাল সিম কার্ড কিনতে পারব?"
  },
  {
    "id": 320,
    "foreign": "I need a SIM with internet data.",
    "bengali": "আমার ইন্টারনেট ডেটাসহ একটি সিম কার্ড প্রয়োজন।"
  },
  {
    "id": 321,
    "foreign": "How much data is included?",
    "bengali": "এতে কত জিবি ডেটা দেওয়া হবে?"
  },
  {
    "id": 322,
    "foreign": "It has thirty gigabytes for one month.",
    "bengali": "এতে এক মাসের জন্য ত্রিশ জিবি ডেটা রয়েছে।"
  },
  {
    "id": 323,
    "foreign": "Please show your passport for registration.",
    "bengali": "নিবন্ধনের জন্য দয়া করে পাসপোর্টটি দেখান।"
  },
  {
    "id": 324,
    "foreign": "My internet is working fast now.",
    "bengali": "আমার ইন্টারনেট এখন দ্রুত কাজ করছে।"
  },
  {
    "id": 325,
    "foreign": "Can you send me your location?",
    "bengali": "আপনি কি আমাকে আপনার লোকেশন পাঠাতে পারবেন?"
  },
  {
    "id": 326,
    "foreign": "I will share my live location.",
    "bengali": "আমি আমার লাইভ লোকেশন শেয়ার করছি।"
  },
  {
    "id": 327,
    "foreign": "I will be there in ten minutes.",
    "bengali": "আমি দশ মিনিটের মধ্যে সেখানে পৌঁছাব।"
  },
  {
    "id": 328,
    "foreign": "Drive carefully on the highway.",
    "bengali": "হাইওয়েতে সাবধানে গাড়ি চালাবেন।"
  },
  {
    "id": 329,
    "foreign": "Fasten your seatbelt, please.",
    "bengali": "দয়া করে সিটবেল্ট বেঁধে নিন।"
  },
  {
    "id": 330,
    "foreign": "Smoking is strictly prohibited here.",
    "bengali": "এখানে ধূমপান করা সম্পূর্ণ নিষিদ্ধ।"
  },
  {
    "id": 331,
    "foreign": "Please keep the place clean.",
    "bengali": "দয়া করে জায়গাটি পরিষ্কার-পরিচ্ছন্ন রাখুন।"
  },
  {
    "id": 332,
    "foreign": "Silence should be maintained in the hall.",
    "bengali": "হলের ভেতর নীরবতা বজায় রাখা উচিত।"
  },
  {
    "id": 333,
    "foreign": "Keep your mobile on silent mode.",
    "bengali": "আপনার মোবাইলটি সাইলেন্ট মোডে রাখুন।"
  },
  {
    "id": 334,
    "foreign": "I am waiting for your call.",
    "bengali": "আমি আপনার ফোনের অপেক্ষায় আছি।"
  },
  {
    "id": 335,
    "foreign": "Call me when you are free.",
    "bengali": "ফ্রি হলে আমাকে একটি কল করবেন।"
  },
  {
    "id": 336,
    "foreign": "I missed your call earlier.",
    "bengali": "আমি আগে আপনার ফোন কলটি খেয়াল করিনি।"
  },
  {
    "id": 337,
    "foreign": "My voice was breaking due to network.",
    "bengali": "নেটওয়ার্ক সমস্যার কারণে আমার কথা কেটে যাচ্ছিল।"
  },
  {
    "id": 338,
    "foreign": "Can you hear me clearly now?",
    "bengali": "আপনি কি এখন আমার কথা পরিষ্কার শুনতে পাচ্ছেন?"
  },
  {
    "id": 339,
    "foreign": "Yes, your voice is crystal clear.",
    "bengali": "হ্যাঁ, আপনার কণ্ঠ এখন একদম স্পষ্ট।"
  },
  {
    "id": 340,
    "foreign": "Let's talk later in the evening.",
    "bengali": "চলুন সন্ধ্যায় আমরা পরে কথা বলি।"
  },
  {
    "id": 341,
    "foreign": "Take care and stay healthy.",
    "bengali": "নিজের খেয়াল রাখবেন এবং সুস্থ থাকবেন।"
  },
  {
    "id": 342,
    "foreign": "Goodbye for now!",
    "bengali": "আপাতত বিদায়!"
  },
  {
    "id": 343,
    "foreign": "I wake up early in the morning.",
    "bengali": "আমি খুব ভোরে ঘুম থেকে উঠি।"
  },
  {
    "id": 344,
    "foreign": "I brush my teeth and wash my face.",
    "bengali": "আমি দাঁত ব্রাশ করি ও মুখ ধুয়ে নিই।"
  },
  {
    "id": 345,
    "foreign": "I like to drink hot tea in the morning.",
    "bengali": "আমি সকালে গরম চা খেতে পছন্দ করি।"
  },
  {
    "id": 346,
    "foreign": "What time do you usually wake up?",
    "bengali": "আপনি সাধারণত কয়টায় ঘুম থেকে ওঠেন?"
  },
  {
    "id": 347,
    "foreign": "I usually wake up at six o'clock.",
    "bengali": "আমি সাধারণত সকাল ছয়টায় উঠি।"
  },
  {
    "id": 348,
    "foreign": "I take a cold shower every day.",
    "bengali": "আমি প্রতিদিন ঠান্ডা পানিতে গোসল করি।"
  },
  {
    "id": 349,
    "foreign": "Have you had your breakfast yet?",
    "bengali": "তুমি কি সকালের নাশতা করেছ?"
  },
  {
    "id": 350,
    "foreign": "I am getting dressed for work.",
    "bengali": "আমি কাজের উদ্দেশ্যে কাপড় পরে তৈরি হচ্ছি।"
  },
  {
    "id": 351,
    "foreign": "I take the bus to reach my office.",
    "bengali": "অফিসে যাওয়ার জন্য আমি বাসে উঠি।"
  },
  {
    "id": 352,
    "foreign": "The traffic was really bad today.",
    "bengali": "আজ রাস্তায় প্রচুর জ্যাম ছিল।"
  },
  {
    "id": 353,
    "foreign": "I arrived just in time.",
    "bengali": "আমি একদম সঠিক সময়ে পৌঁছেছি।"
  },
  {
    "id": 354,
    "foreign": "Let's have lunch together.",
    "bengali": "চলুন একসাথে দুপুরের খাবার খাই।"
  },
  {
    "id": 355,
    "foreign": "I brought homemade food today.",
    "bengali": "আজ আমি বাড়ি থেকে তৈরি খাবার নিয়ে এসেছি।"
  },
  {
    "id": 356,
    "foreign": "Can you pass the water bottle?",
    "bengali": "পানির বোতলটি একটু এগিয়ে দেবেন কি?"
  },
  {
    "id": 357,
    "foreign": "I am feeling a little tired now.",
    "bengali": "এখন আমার একটু ক্লান্ত লাগছে।"
  },
  {
    "id": 358,
    "foreign": "Let's take a short ten-minute break.",
    "bengali": "চলুন দশ মিনিটের একটি ছোট বিরতি নিই।"
  },
  {
    "id": 359,
    "foreign": "I need a cup of strong coffee.",
    "bengali": "আমার এক কাপ কড়া কফি প্রয়োজন।"
  },
  {
    "id": 360,
    "foreign": "What time does your work finish?",
    "bengali": "তোমার কাজ কয়টায় শেষ হয়?"
  },
  {
    "id": 361,
    "foreign": "I finish my work at six in the evening.",
    "bengali": "সন্ধ্যা ছয়টায় আমার কাজ শেষ হয়।"
  },
  {
    "id": 362,
    "foreign": "I am heading back home now.",
    "bengali": "আমি এখন বাড়ির পথে রওনা হচ্ছি।"
  },
  {
    "id": 363,
    "foreign": "I bought some fresh fruits.",
    "bengali": "আমি কিছু তাজা ফল কিনেছি।"
  },
  {
    "id": 364,
    "foreign": "How much are these red apples?",
    "bengali": "এই লাল আপেলগুলোর দাম কত?"
  },
  {
    "id": 365,
    "foreign": "Give me one kilogram of bananas.",
    "bengali": "আমাকে এক কেজি কলা দিন।"
  },
  {
    "id": 366,
    "foreign": "Are these mangoes sweet?",
    "bengali": "এই আমগুলো কি মিষ্টি?"
  },
  {
    "id": 367,
    "foreign": "Yes, they are very sweet and juicy.",
    "bengali": "হ্যাঁ, এগুলো খুব মিষ্টি ও রসালো।"
  },
  {
    "id": 368,
    "foreign": "I love spending time with family.",
    "bengali": "আমি পরিবারের সাথে সময় কাটাতে ভালোবাসি।"
  },
  {
    "id": 369,
    "foreign": "We had a wonderful dinner together.",
    "bengali": "আমরা একসাথে দারুণ এক রাতের খাবার খেলাম।"
  },
  {
    "id": 370,
    "foreign": "What are you watching on TV?",
    "bengali": "তুমি টিভিতে কী দেখছ?"
  },
  {
    "id": 371,
    "foreign": "I am watching a football match.",
    "bengali": "আমি একটি ফুটবল খেলা দেখছি।"
  },
  {
    "id": 372,
    "foreign": "Who do you think will win?",
    "bengali": "তোমার কী মনে হয় কে জিতবে?"
  },
  {
    "id": 373,
    "foreign": "Our team is playing very well.",
    "bengali": "আমাদের দল খুব ভালো খেলছে।"
  },
  {
    "id": 374,
    "foreign": "It was an exciting match.",
    "bengali": "ম্যাচটি সত্যি রোমাঞ্চকর ছিল।"
  },
  {
    "id": 375,
    "foreign": "I like reading books before bed.",
    "bengali": "ঘুমানোর আগে বই পড়তে আমার ভালো লাগে।"
  },
  {
    "id": 376,
    "foreign": "Don't forget to set your alarm.",
    "bengali": "অ্যালার্ম দিতে কিন্তু ভুলো না।"
  },
  {
    "id": 377,
    "foreign": "Set the alarm for six in the morning.",
    "bengali": "সকাল ছয়টার জন্য অ্যালার্ম দিয়ে রাখো।"
  },
  {
    "id": 378,
    "foreign": "Good night, sleep well.",
    "bengali": "শুভ রাত্রি, সুন্দর ঘুম হোক।"
  },
  {
    "id": 379,
    "foreign": "Did you sleep well last night?",
    "bengali": "গত রাতে তোমার কি ভালো ঘুম হয়েছিল?"
  },
  {
    "id": 380,
    "foreign": "Yes, I slept like a baby.",
    "bengali": "হ্যাঁ, আমার খুব আরামের ঘুম হয়েছে।"
  },
  {
    "id": 381,
    "foreign": "It looks like it will rain soon.",
    "bengali": "মনে হচ্ছে শীঘ্রই বৃষ্টি নামবে।"
  },
  {
    "id": 382,
    "foreign": "The sky is full of dark clouds.",
    "bengali": "আকাশ কালো মেঘে ঢেকে গেছে।"
  },
  {
    "id": 383,
    "foreign": "I love the smell of rain.",
    "bengali": "বৃষ্টির ভেজা মাটির গন্ধ আমার ভীষণ প্রিয়।"
  },
  {
    "id": 384,
    "foreign": "It is getting very cold tonight.",
    "bengali": "আজ রাতে বেশ ভালোই ঠান্ডা পড়ছে।"
  },
  {
    "id": 385,
    "foreign": "Wear a jacket before going out.",
    "bengali": "বাইরে যাওয়ার আগে একটি জ্যাকেট পরে নাও।"
  },
  {
    "id": 386,
    "foreign": "Summer in my city is very hot.",
    "bengali": "আমাদের শহরে গ্রীষ্মকাল ভীষণ গরম।"
  },
  {
    "id": 387,
    "foreign": "Winter is my favorite season.",
    "bengali": "শীতকাল আমার সবথেকে প্রিয় ঋতু।"
  },
  {
    "id": 388,
    "foreign": "Spring brings colorful flowers.",
    "bengali": "বসন্ত রঙিন ফুলের মেলা নিয়ে আসে।"
  },
  {
    "id": 389,
    "foreign": "Do you have any brothers or sisters?",
    "bengali": "তোমার কি কোনো ভাই বা বোন আছে?"
  },
  {
    "id": 390,
    "foreign": "I have an elder brother and a sister.",
    "bengali": "আমার একজন বড় ভাই ও এক বোন আছে।"
  },
  {
    "id": 391,
    "foreign": "My parents live in the countryside.",
    "bengali": "আমার বাবা-মা গ্রামে বসবাস করেন।"
  },
  {
    "id": 392,
    "foreign": "I visit them every month.",
    "bengali": "আমি প্রতি মাসে তাদের সাথে দেখা করতে যাই।"
  },
  {
    "id": 393,
    "foreign": "Family is the most important thing.",
    "bengali": "পরিবারই জীবনের সবচেয়ে গুরুত্বপূর্ণ বিষয়।"
  },
  {
    "id": 394,
    "foreign": "True friends are hard to find.",
    "bengali": "প্রকৃত বন্ধু খুঁজে পাওয়া অনেক কঠিন।"
  },
  {
    "id": 395,
    "foreign": "A friend in need is a friend indeed.",
    "bengali": "বিপদের বন্ধুই প্রকৃত বন্ধু।"
  },
  {
    "id": 396,
    "foreign": "Thank you for always being there.",
    "bengali": "সবসময় পাশে থাকার জন্য তোমাকে ধন্যবাদ।"
  },
  {
    "id": 397,
    "foreign": "I can always count on you.",
    "bengali": "আমি সবসময় তোমার ওপর ভরসা করতে পারি।"
  },
  {
    "id": 398,
    "foreign": "Let's plan a picnic this weekend.",
    "bengali": "চলুন এই সপ্তাহে আমরা পিকনিকের প্ল্যান করি।"
  },
  {
    "id": 399,
    "foreign": "Where should we go for the trip?",
    "bengali": "ভ্রমণের জন্য আমাদের কোথায় যাওয়া উচিত?"
  },
  {
    "id": 400,
    "foreign": "A beach would be fantastic.",
    "bengali": "একটি সমুদ্র সৈকত হলে খুব চমৎকার হতো।"
  },
  {
    "id": 401,
    "foreign": "I love watching the sea waves.",
    "bengali": "সমুদ্রের ঢেউ দেখতে আমার ভীষণ ভালো লাগে।"
  },
  {
    "id": 402,
    "foreign": "Mountains are so peaceful.",
    "bengali": "পাহাড় সত্যিই অত্যন্ত শান্ত ও মনোরম।"
  },
  {
    "id": 403,
    "foreign": "I want to learn how to swim.",
    "bengali": "আমি সাঁতার কাটা শিখতে চাই।"
  },
  {
    "id": 404,
    "foreign": "Can you teach me how to swim?",
    "bengali": "আপনি কি আমাকে সাঁতার শেখাতে পারবেন?"
  },
  {
    "id": 405,
    "foreign": "Sure, it is very easy to learn.",
    "bengali": "অবশ্যই, এটা শেখা খুব সহজ।"
  },
  {
    "id": 406,
    "foreign": "Cycling is great for good health.",
    "bengali": "সাইকেল চালানো স্বাস্থ্যের জন্য ভীষণ উপকারী।"
  },
  {
    "id": 407,
    "foreign": "I go for a morning walk daily.",
    "bengali": "আমি প্রতিদিন সকালে হাঁটতে বের হই।"
  },
  {
    "id": 408,
    "foreign": "Staying active keeps you fit.",
    "bengali": "সক্রিয় থাকা শরীরকে সুস্থ রাখে।"
  },
  {
    "id": 409,
    "foreign": "Drink at least eight glasses of water.",
    "bengali": "দিনে অন্তত আট গ্লাস পানি পান করুন।"
  },
  {
    "id": 410,
    "foreign": "Eating vegetables is good for health.",
    "bengali": "শাকসবজি খাওয়া স্বাস্থ্যের জন্য ভালো।"
  },
  {
    "id": 411,
    "foreign": "Avoid eating too much junk food.",
    "bengali": "বেশি ফাস্টফুড খাওয়া এড়িয়ে চলুন।"
  },
  {
    "id": 412,
    "foreign": "Health is the real wealth.",
    "bengali": "স্বাস্থ্যই আসল সম্পদ।"
  },
  {
    "id": 413,
    "foreign": "I want to buy a new laptop.",
    "bengali": "আমি একটি নতুন ল্যাপটপ কিনতে চাই।"
  },
  {
    "id": 414,
    "foreign": "Which brand is the best?",
    "bengali": "কোন ব্র্যান্ডটি সবচেয়ে ভালো হবে?"
  },
  {
    "id": 415,
    "foreign": "This model has great battery life.",
    "bengali": "এই মডেলটির ব্যাটারি ব্যাকআপ দারুণ।"
  },
  {
    "id": 416,
    "foreign": "Does it come with a warranty?",
    "bengali": "এটির সাথে কি ওয়ারেন্টি আছে?"
  },
  {
    "id": 417,
    "foreign": "Yes, it has a two-year warranty.",
    "bengali": "হ্যাঁ, এটিতে দুই বছরের ওয়ারেন্টি আছে।"
  },
  {
    "id": 418,
    "foreign": "How much storage space does it have?",
    "bengali": "এটিতে কতটুকু স্টোরেজ আছে?"
  },
  {
    "id": 419,
    "foreign": "It has five hundred gigabytes SSD.",
    "bengali": "এটিতে পাঁচশত জিবি এসএসডি রয়েছে।"
  },
  {
    "id": 420,
    "foreign": "I will take this one, please.",
    "bengali": "আমি এই ল্যাপটপটিই নিব।"
  },
  {
    "id": 421,
    "foreign": "Can you install the software for me?",
    "bengali": "আপনি কি সফটওয়্যারটি ইনস্টল করে দেবেন?"
  },
  {
    "id": 422,
    "foreign": "Sure, it will take just ten minutes.",
    "bengali": "অবশ্যই, এতে মাত্র দশ মিনিট লাগবে।"
  },
  {
    "id": 423,
    "foreign": "How do I use this application?",
    "bengali": "আমি এই অ্যাপ্লিকেশনটি কীভাবে ব্যবহার করব?"
  },
  {
    "id": 424,
    "foreign": "Click on the start button.",
    "bengali": "স্টার্ট বাটনে ক্লিক করুন।"
  },
  {
    "id": 425,
    "foreign": "Enter your username and password.",
    "bengali": "আপনার ইউজারনেম ও পাসওয়ার্ড লিখুন।"
  },
  {
    "id": 426,
    "foreign": "Keep your password safe and secret.",
    "bengali": "পাসওয়ার্ড সবসময় গোপন ও নিরাপদ রাখুন।"
  },
  {
    "id": 427,
    "foreign": "Never share your OTP with anyone.",
    "bengali": "আপনার ওটিপি কখনও কারও সাথে শেয়ার করবেন না।"
  },
  {
    "id": 428,
    "foreign": "Always be aware of online scams.",
    "bengali": "অনলাইন প্রতারণা থেকে সর্বদা সতর্ক থাকুন।"
  },
  {
    "id": 429,
    "foreign": "Safety should always come first.",
    "bengali": "নিরাপত্তাই সবসময় সর্বাগ্রে হওয়া উচিত।"
  },
  {
    "id": 430,
    "foreign": "Think twice before making a decision.",
    "bengali": "সিদ্ধান্ত নেওয়ার আগে দুবার ভাবুন।"
  },
  {
    "id": 431,
    "foreign": "Patience is a great virtue.",
    "bengali": "ধৈর্য একটি মহৎ গুণ।"
  },
  {
    "id": 432,
    "foreign": "Hard work always pays off.",
    "bengali": "কঠোর পরিশ্রম সবসময় ভালো ফল দেয়।"
  },
  {
    "id": 433,
    "foreign": "Never lose your self-confidence.",
    "bengali": "নিজের আত্মবিশ্বাস কখনও হারাবেন না।"
  },
  {
    "id": 434,
    "foreign": "Every day is a fresh beginning.",
    "bengali": "প্রতিটি দিনই একটি নতুন সূচনা।"
  },
  {
    "id": 435,
    "foreign": "Learn from yesterday, live for today.",
    "bengali": "অতীত থেকে শিখুন, আজকের দিনে বাঁচুন।"
  },
  {
    "id": 436,
    "foreign": "Hope for a brighter tomorrow.",
    "bengali": "একটি সুন্দর আগামীর প্রত্যাশা রাখুন।"
  },
  {
    "id": 437,
    "foreign": "Be kind to everyone you meet.",
    "bengali": "সবার সাথে নম্র ও ভদ্র আচরণ করুন।"
  },
  {
    "id": 438,
    "foreign": "A warm smile can win hearts.",
    "bengali": "একটি মিষ্টি হাসি যেকোনো মন জয় করতে পারে।"
  },
  {
    "id": 439,
    "foreign": "Honesty is always the best policy.",
    "bengali": "সততাই সর্বদা সর্বোৎকৃষ্ট পন্থা।"
  },
  {
    "id": 440,
    "foreign": "Speak politely and listen carefully.",
    "bengali": "ভদ্রভাবে কথা বলুন এবং মনোযোগ দিয়ে শুনুন।"
  },
  {
    "id": 441,
    "foreign": "Respect older people and care for young.",
    "bengali": "বড়দের শ্রদ্ধা করুন ও ছোটদের স্নেহ করুন।"
  },
  {
    "id": 442,
    "foreign": "Can you lend me your pen for a second?",
    "bengali": "আমাকে কি এক সেকেন্ডের জন্য কলমটা দেওয়া যাবে?"
  },
  {
    "id": 443,
    "foreign": "Sure, here you go.",
    "bengali": "অবশ্যই, এই নিন।"
  },
  {
    "id": 444,
    "foreign": "Where can I find the principal's room?",
    "bengali": "অধ্যক্ষের রুমটি কোন দিকে পাব?"
  },
  {
    "id": 445,
    "foreign": "It is at the end of the corridor.",
    "bengali": "বারান্দার একেবারে শেষ মাথায়।"
  },
  {
    "id": 446,
    "foreign": "I have an interview today.",
    "bengali": "আজকে আমার একটি ইন্টারভিউ আছে।"
  },
  {
    "id": 447,
    "foreign": "Stay calm and answer confidently.",
    "bengali": "শান্ত থাকুন এবং আত্মবিশ্বাসের সাথে উত্তর দিন।"
  },
  {
    "id": 448,
    "foreign": "I got the job offer!",
    "bengali": "আমি চাকরির প্রস্তাবটি পেয়েছি!"
  },
  {
    "id": 449,
    "foreign": "Congratulations on your big success!",
    "bengali": "তোমার এই দারুণ সাফল্যের জন্য অভিনন্দন!"
  },
  {
    "id": 450,
    "foreign": "I am really proud of what you did.",
    "bengali": "তুমি যা করেছ তাতে আমি সত্যিই গর্বিত।"
  },
  {
    "id": 451,
    "foreign": "Let's celebrate this achievement.",
    "bengali": "চলুন এই অর্জনটি আমরা উদযাপন করি।"
  },
  {
    "id": 452,
    "foreign": "Hard work never goes in vain.",
    "bengali": "পরিশ্রম কখনও বৃথা যায় না।"
  },
  {
    "id": 453,
    "foreign": "Dream big and work towards it.",
    "bengali": "বড় স্বপ্ন দেখুন এবং সেটির দিকে এগিয়ে যান।"
  },
  {
    "id": 454,
    "foreign": "Mistakes are proof that you are trying.",
    "bengali": "ভুল হওয়া প্রমাণ করে যে আপনি চেষ্টা করছেন।"
  },
  {
    "id": 455,
    "foreign": "Do not be afraid of making mistakes.",
    "bengali": "ভুল করতে কখনও ভয় পাবেন না।"
  },
  {
    "id": 456,
    "foreign": "Practice speaking English every day.",
    "bengali": "প্রতিদিন একটু একটু করে ইংরেজিতে কথা বলুন।"
  },
  {
    "id": 457,
    "foreign": "Listen to English podcasts regularly.",
    "bengali": "নিয়মিত ইংরেজি পডকাস্ট শুনুন।"
  },
  {
    "id": 458,
    "foreign": "Read English news and articles.",
    "bengali": "ইংরেজি খবর ও প্রবন্ধ পড়ুন।"
  },
  {
    "id": 459,
    "foreign": "Write down new vocabulary words.",
    "bengali": "নতুন নতুন শব্দের অর্থ লিখে রাখুন।"
  },
  {
    "id": 460,
    "foreign": "Consistency is the key to success.",
    "bengali": "ধারাবাহিকতাই সাফল্যের মূল চাবিকাঠি।"
  },
  {
    "id": 461,
    "foreign": "Step by step, you will reach your goal.",
    "bengali": "ধাপে ধাপে আপনি আপনার লক্ষ্যে পৌঁছে যাবেন।"
  },
  {
    "id": 462,
    "foreign": "Believe in yourself and your abilities.",
    "bengali": "নিজের এবং নিজের সক্ষমতার ওপর বিশ্বাস রাখুন।"
  },
  {
    "id": 463,
    "foreign": "Everything is possible with effort.",
    "bengali": "চেষ্টা থাকলে সবকিছুই সম্ভব।"
  },
  {
    "id": 464,
    "foreign": "May all your good wishes come true.",
    "bengali": "আপনার সকল শুভ ইচ্ছা পূরণ হোক।"
  },
  {
    "id": 465,
    "foreign": "God bless you and your family.",
    "bengali": "সৃষ্টিকর্তা আপনার ও আপনার পরিবারের মঙ্গল করুন।"
  },
  {
    "id": 466,
    "foreign": "Can you speak a little louder?",
    "bengali": "আপনি কি একটু জোরে কথা বলতে পারবেন?"
  },
  {
    "id": 467,
    "foreign": "I can't hear you clearly.",
    "bengali": "আমি আপনার কথা পরিষ্কার শুনতে পাচ্ছি না।"
  },
  {
    "id": 468,
    "foreign": "What is the meaning of this word?",
    "bengali": "এই শব্দটির অর্থ কী?"
  },
  {
    "id": 469,
    "foreign": "Could you please spell it for me?",
    "bengali": "দয়া করে বানানটি একটু বলবেন কি?"
  },
  {
    "id": 470,
    "foreign": "How do you pronounce this word?",
    "bengali": "এই শব্দটির উচ্চারণ কীভাবে করতে হয়?"
  },
  {
    "id": 471,
    "foreign": "English grammar is very interesting.",
    "bengali": "ইংরেজি ব্যাকরণ বেশ আকর্ষণীয়।"
  },
  {
    "id": 472,
    "foreign": "Reading daily improves vocabulary.",
    "bengali": "প্রতিদিন পড়ার অভ্যাস শব্দভাণ্ডার বাড়ায়।"
  },
  {
    "id": 473,
    "foreign": "I write in my diary every night.",
    "bengali": "আমি প্রতি রাতে ডায়েরি লিখি।"
  },
  {
    "id": 474,
    "foreign": "Writing improves thinking skills.",
    "bengali": "লেখার অভ্যাস চিন্তা করার ক্ষমতা বাড়ায়।"
  },
  {
    "id": 475,
    "foreign": "Do you prefer tea or coffee?",
    "bengali": "আপনি চা না কফি বেশি পছন্দ করেন?"
  },
  {
    "id": 476,
    "foreign": "I prefer green tea without sugar.",
    "bengali": "আমি চিনি ছাড়া গ্রিন টি পছন্দ করি।"
  },
  {
    "id": 477,
    "foreign": "What is your favorite hobby?",
    "bengali": "আপনার প্রিয় শখ কী?"
  },
  {
    "id": 478,
    "foreign": "My favorite hobby is photography.",
    "bengali": "আমার প্রিয় শখ ছবি তোলা বা ফটোগ্রাফি।"
  },
  {
    "id": 479,
    "foreign": "I love capturing natural scenery.",
    "bengali": "প্রকৃতির দৃশ্য ফ্রেমবন্দি করতে আমার ভীষণ ভালো লাগে।"
  },
  {
    "id": 480,
    "foreign": "Do you like playing cricket?",
    "bengali": "তুমি কি ক্রিকেট খেলতে পছন্দ করো?"
  },
  {
    "id": 481,
    "foreign": "Yes, cricket is my favorite sport.",
    "bengali": "হ্যাঁ, ক্রিকেট আমার সবথেকে প্রিয় খেলা।"
  },
  {
    "id": 482,
    "foreign": "We play cricket every Friday morning.",
    "bengali": "আমরা প্রতি শুক্রবার সকালে ক্রিকেট খেলি।"
  },
  {
    "id": 483,
    "foreign": "Sports keep our mind and body fresh.",
    "bengali": "খেলাধুলা মন ও শরীর দুটোই সতেজ রাখে।"
  },
  {
    "id": 484,
    "foreign": "Always stay positive and optimistic.",
    "bengali": "সর্বদা ইতিবাচক ও আশাবাদী থাকুন।"
  },
  {
    "id": 485,
    "foreign": "A calm mind can solve any problem.",
    "bengali": "একটি শান্ত মন যেকোনো সমস্যার সমাধান করতে পারে।"
  },
  {
    "id": 486,
    "foreign": "Time and tide wait for none.",
    "bengali": "সময় ও স্রোত কারও জন্য অপেক্ষা করে না।"
  },
  {
    "id": 487,
    "foreign": "Make the best use of your time.",
    "bengali": "আপনার সময়ের সঠিক ও সেরা ব্যবহার করুন।"
  },
  {
    "id": 488,
    "foreign": "Opportunities come to those who work.",
    "bengali": "সুযোগ তাদের কাছেই আসে যারা পরিশ্রম করে।"
  },
  {
    "id": 489,
    "foreign": "Be humble in times of success.",
    "bengali": "সাফল্যের সময়েও সর্বদা বিনয়ী থাকুন।"
  },
  {
    "id": 490,
    "foreign": "Be patient in times of trouble.",
    "bengali": "বিপদের সময়ে ধৈর্য ধারণ করুন।"
  },
  {
    "id": 491,
    "foreign": "Kindness costs nothing but means everything.",
    "bengali": "দয়া দেখাতে কোনো অর্থ লাগে না কিন্তু এটি অনেক বড় কিছু।"
  },
  {
    "id": 492,
    "foreign": "Help someone whenever you can.",
    "bengali": "সুযোগ পেলেই কাউকে সাহায্য করার চেষ্টা করুন।"
  },
  {
    "id": 493,
    "foreign": "Sharing happiness makes it double.",
    "bengali": "সুখ ভাগ করে নিলে তা দ্বিগুণ হয়ে যায়।"
  },
  {
    "id": 494,
    "foreign": "A grateful heart is always peaceful.",
    "bengali": "একটি কৃতজ্ঞ মন সবসময় শান্ত থাকে।"
  },
  {
    "id": 495,
    "foreign": "Thank you from the bottom of my heart.",
    "bengali": "আমার অন্তরের গভীর থেকে আপনাকে ধন্যবাদ।"
  },
  {
    "id": 496,
    "foreign": "I will remember your kindness forever.",
    "bengali": "আমি আপনার এই উপকার সারাজীবন মনে রাখব।"
  },
  {
    "id": 497,
    "foreign": "Wishing you peace, joy, and success.",
    "bengali": "আপনার শান্তি, আনন্দ ও সাফল্য কামনা করছি।"
  },
  {
    "id": 498,
    "foreign": "Let's meet again very soon.",
    "bengali": "খুব শীঘ্রই আমাদের আবার দেখা হবে।"
  },
  {
    "id": 499,
    "foreign": "Until then, take good care.",
    "bengali": "ততক্ষণ পর্যন্ত নিজের ভালো যত্ন নেবেন।"
  },
  {
    "id": 500,
    "foreign": "Have a wonderful and blessed day!",
    "bengali": "আপনার দিনটি চমৎকার ও বরকতময় হোক!"
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = englishSentences;
}
