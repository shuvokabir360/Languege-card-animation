// ========================================================
// VISUAL SCENES DATA: ছবি দেখে হিন্দী ভাষা শেখা
// 3D Cartoon Situational Conversations with Dialogues
// ========================================================

const visualScenesData = [
  {
    id: 1,
    title: "বাস স্ট্যান্ডে রাস্তা জিজ্ঞেস করা",
    topic: "ভ্রমণ ও দিকনির্দেশনা",
    image: "assets/scenes/scene_bus_stand.jpg",
    dialogues: [
      {
        id: "d1",
        character: "রাহুল (পথচারী)",
        side: "left",
        hindi: "बस स्टैंड कहाँ है?",
        pronunciation: "বাস স্ট্যান্ড কাঁহা হ্যায়?",
        bengali: "বাস স্ট্যান্ডটি কোথায়?",
        tag: "প্রশ্ন",
        pos: { top: "12%", left: "6%" }
      },
      {
        id: "d2",
        character: "প্রিয়া (স্থানীয়)",
        side: "right",
        hindi: "सीधे जाइए, फिर दाएँ मुड़िए। थोड़ी दूर पर ही बस स्टैंड है।",
        pronunciation: "সিধে জাইয়ে, ফির দায়েঁ মুড়িয়ে। থোড়ি দূর পর হি বাস স্ট্যান্ড হ্যায়।",
        bengali: "সোজা যান, তারপর ডানে ঘুরুন। একটু দূরেই বাস স্ট্যান্ড।",
        tag: "উত্তর",
        pos: { top: "28%", right: "6%" }
      }
    ]
  },
  {
    id: 2,
    title: "ফলের দোকানে কেনাকাটা",
    topic: "বাজার ও দাম জানা",
    image: "assets/scenes/scene_fruit_market.jpg",
    dialogues: [
      {
        id: "d1",
        character: "রোহন (ক্রেতা)",
        side: "left",
        hindi: "भैया, ये आम कैसे दिए?",
        pronunciation: "ভইয়া, ইয়ে আম ক্যায়সে দিয়ে?",
        bengali: "ভাইয়া, এই আমগুলোর দাম কত করে?",
        tag: "প্রশ্ন",
        pos: { top: "14%", left: "6%" }
      },
      {
        id: "d2",
        character: "দোকানদার",
        side: "right",
        hindi: "सौ रुपये किलो हैं बाबूजी, एकदम ताज़ा और मीठे हैं!",
        pronunciation: "সৌ রুপয়ে কিলো হ্যাঁ বাবুজি, একদম তাজা অউর মিঠে হ্যাঁ!",
        bengali: "একশত টাকা কেজি বাবুজি, একদম টাটকা ও মিষ্টি!",
        tag: "উত্তর",
        pos: { top: "28%", right: "6%" }
      }
    ]
  },
  {
    id: 3,
    title: "চা স্টলে চা অর্ডার করা",
    topic: "রেস্তোরাঁ ও চা-নাস্তা",
    image: "assets/scenes/scene_tea_stall.jpg",
    dialogues: [
      {
        id: "d1",
        character: "অদিতি (ছাত্রী)",
        side: "left",
        hindi: "भैया, एक कप कड़क मसाला चाय देना।",
        pronunciation: "ভইয়া, এক কাপ কড়ক মসালা চায় দেনা।",
        bengali: "ভাইয়া, এক কাপ কড়া মশলা চা দিন।",
        tag: "অর্ডার",
        pos: { top: "15%", left: "6%" }
      },
      {
        id: "d2",
        character: "চা-ওয়ালা কাকা",
        side: "right",
        hindi: "हाँ बिटिया, अभी दो मिनट में गरमा-गरम चाय देता हूँ!",
        pronunciation: "হাঁ বিটিয়া, অভি দো মিনিট মে গরমা-গরম চায় দেতা হুঁ!",
        bengali: "হ্যাঁ মা, এখনই দুই মিনিটে ধোঁয়া ওঠা গরম চা দিচ্ছি!",
        tag: "জবাব",
        pos: { top: "28%", right: "6%" }
      }
    ]
  }
];
