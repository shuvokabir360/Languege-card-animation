if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(regs => {
    for (let r of regs) r.unregister();
  });
}

// ========================================================
// 1. DATASETS FOR HINDI, ENGLISH & CHINESE (24 sentences each)
// ========================================================

const languageData = {
  hindi: {
    title: "হিন্দী শিখুন",
    flagSVG: `
      <span class="flag-icon" title="India">
        <svg viewBox="0 0 900 600" width="22" height="15">
          <rect width="900" height="600" fill="#128807"/>
          <rect width="900" height="400" fill="#FFFFFF"/>
          <rect width="900" height="200" fill="#FF9933"/>
          <circle cx="450" cy="300" r="65" fill="none" stroke="#000080" stroke-width="12"/>
          <circle cx="450" cy="300" r="14" fill="#000080"/>
        </svg>
      </span>
    `,
    sentences: (typeof hindiTravelSentences !== 'undefined' && Array.isArray(hindiTravelSentences) && hindiTravelSentences.length > 0)
      ? hindiTravelSentences
      : [
          // Fallback if data_hindi.js is not loaded
          { id: 1, foreign: "নমস্তে, আপ ক্যায়সে হ্যায়ঁ?", bengali: "নমস্কার, আপনি কেমন আছেন?" },
          { id: 2, foreign: "মেরা নাম রাহুল হ্যায়।", bengali: "আমার নাম রাহুল।" },
          { id: 3, foreign: "আপসে মিলকর বহুত খুশি হুয়ি।", bengali: "আপনার সাথে দেখা করে খুব ভালো লাগলো।" },
          { id: 4, foreign: "আপ ক্যা করতে হ্যায়ঁ?", bengali: "আপনি কী করেন?" },
          { id: 5, foreign: "ধন্যবাদ, ফির মিলেঙ্গে।", bengali: "ধন্যবাদ, আবার দেখা হবে।" },
          { id: 6, foreign: "মুঝে বহুত অচ্ছা লগা।", bengali: "আমার খুব ভালো লেগেছে।" }
        ]
  },

  english: {
    title: "ইংরেজি শিখুন",
    flagSVG: `
      <span class="flag-icon" title="UK">
        <svg viewBox="0 0 60 30" width="22" height="15">
          <clipPath id="uk-clip-s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
          <g clip-path="url(#uk-clip-s)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/>
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="3"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/>
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/>
          </g>
        </svg>
      </span>
    `,
    sentences: [
      // Page 1: 1 - 6
      { id: 1, foreign: "Hello, How are you? (হ্যালো, হাউ আর ইউ?)", bengali: "নমস্কার, আপনি কেমন আছেন?" },
      { id: 2, foreign: "My name is Rahul. (মাই নেম ইজ রাহুল)", bengali: "আমার নাম রাহুল।" },
      { id: 3, foreign: "Nice to meet you. (নাইস টু মিট ইউ)", bengali: "আপনার সাথে দেখা হয়ে খুব ভালো লাগলো।" },
      { id: 4, foreign: "What do you do? (হোয়াট ডু ইউ ডু?)", bengali: "আপনি কী কাজ করেন?" },
      { id: 5, foreign: "Thank you very much. (থ্যাংক ইউ ভেরি মাচ)", bengali: "আপনাকে অনেক অনেক ধন্যবাদ।" },
      { id: 6, foreign: "I like this very much. (আই লাইক দিস ভেরি মাচ)", bengali: "আমার এটা খুব পছন্দ হয়েছে।" },

      // Page 2: 7 - 12
      { id: 7, foreign: "Can you help me? (ক্যান ইউ হেল্প মি?)", bengali: "আপনি কি আমাকে সাহায্য করতে পারেন?" },
      { id: 8, foreign: "How much is this? (হাউ মাচ ইজ দিস?)", bengali: "এটার দাম কত টাকা?" },
      { id: 9, foreign: "Where do you live? (হোয়ার ডু ইউ লিভ?)", bengali: "আপনি কোথায় থাকেন?" },
      { id: 10, foreign: "I am very hungry. (আই অ্যাম ভেরি হাংরি)", bengali: "আমার খুব খিদে পেয়েছে।" },
      { id: 11, foreign: "Would you like some water? (উড ইউ লাইক সাম ওয়াটার?)", bengali: "আপনি কি একটু পানি খাবেন?" },
      { id: 12, foreign: "May I come in? (মে আই কাম ইন?)", bengali: "আমি কি ভেতরে আসতে পারি?" },

      // Page 3: 13 - 18
      { id: 13, foreign: "Don't worry, everything is fine. (ডোন্ট ওরি)", bengali: "চিন্তা করবেন না, সব ঠিক আছে।" },
      { id: 14, foreign: "It was great talking to you. (ইট ওয়াজ গ্রেট)", bengali: "আপনার সাথে কথা বলে ভালো লাগলো।" },
      { id: 15, foreign: "Please speak slowly. (প্লিজ স্পিক স্লোলি)", bengali: "দয়া করে একটু আস্তে বলুন।" },
      { id: 16, foreign: "I didn't understand. (আই ডিডন্ট আন্ডারস্ট্যান্ড)", bengali: "আমি এটা বুঝতে পারিনি।" },
      { id: 17, foreign: "See you soon. (সি ইউ সুন)", bengali: "খুব তাড়াতাড়ি আবার দেখা হবে।" },
      { id: 18, foreign: "Have a wonderful day. (হ্যাভ আ ওয়ান্ডারফুল ডে)", bengali: "আপনার দিনটি চমৎকার কাটুক।" },

      // Page 4: 19 - 24
      { id: 19, foreign: "Goodbye, take care. (গুডবাই, টেক কেয়ার)", bengali: "বিদায়, নিজের যত্ন নেবেন।" },
      { id: 20, foreign: "You are a very kind person. (ইউ আর আ কাইন্ড পারসন)", bengali: "আপনি খুব দয়ালু একজন মানুষ।" },
      { id: 21, foreign: "What time is it now? (হোয়াট টাইম ইজ ইট নাও?)", bengali: "এখন কয়টা বাজে?" },
      { id: 22, foreign: "I am so happy today. (আই অ্যাম সো হ্যাপি)", bengali: "আজকে আমি অনেক আনন্দিত।" },
      { id: 23, foreign: "Have a safe journey. (হ্যাভ আ সেফ জার্নি)", bengali: "আপনার যাত্রা শুভ ও নিরাপদ হোক।" },
      { id: 24, foreign: "Good night, sweet dreams. (গুড নাইট)", bengali: "শুভ রাত্রি, সুন্দর স্বপ্ন দেখুন।" }
    ]
  },

  chinese: {
    title: "চায়না শিখুন",
    flagSVG: `
      <span class="flag-icon" title="China">
        <svg viewBox="0 0 900 600" width="22" height="15">
          <rect width="900" height="600" fill="#DE2910"/>
          <polygon points="150,75 169,132 229,132 181,168 199,225 150,189 101,225 119,168 71,132 131,132" fill="#FFDE00"/>
          <polygon points="300,30 307,49 327,49 311,61 317,80 300,68 283,80 289,61 273,49 293,49" fill="#FFDE00"/>
          <polygon points="360,90 367,109 387,109 371,121 377,140 360,128 343,140 349,121 333,109 353,109" fill="#FFDE00"/>
          <polygon points="360,180 367,199 387,199 371,211 377,230 360,218 343,230 349,211 333,199 353,199" fill="#FFDE00"/>
          <polygon points="300,240 307,259 327,259 311,271 317,290 300,278 283,290 289,271 273,259 293,259" fill="#FFDE00"/>
        </svg>
      </span>
    `,
    sentences: [
      // Page 1: 1 - 6
      { id: 1, foreign: "নি হাও (Nǐ hǎo)", bengali: "নমস্কার / হ্যালো" },
      { id: 2, foreign: "নি হাও মা? (Nǐ hǎo ma?)", bengali: "আপনি কেমন আছেন?" },
      { id: 3, foreign: "ও হেন হাও, সিয়েসিয়ে (Wǒ hěn hǎo)", bengali: "আমি খুব ভালো আছি, ধন্যবাদ" },
      { id: 4, foreign: "নি চিয়াও শেনমা মিংজি? (Nǐ jiào shénme?)", bengali: "আপনার নাম কী?" },
      { id: 5, foreign: "ও ত চিয়াও রাহুল (Wǒ jiào Rahul)", bengali: "আমার নাম রাহুল" },
      { id: 6, foreign: "রেনশি নি হেন কাওসিং (Rènshí nǐ)", bengali: "আপনার সাথে দেখা হয়ে খুব ভালো লাগলো" },

      // Page 2: 7 - 12
      { id: 7, foreign: "সিয়ে সিয়ে নি (Xièxiè nǐ)", bengali: "আপনাকে অনেক অনেক ধন্যবাদ" },
      { id: 8, foreign: "চাই চিয়ান (Zàijiàn)", bengali: "আবার দেখা হবে / বিদায়" },
      { id: 9, foreign: "চয়ে কা দুওসাও চিয়েন? (Duōshǎo qián?)", bengali: "এটার দাম কত টাকা?" },
      { id: 10, foreign: "নি চ্যা নালি? (Nǐ zài nǎlǐ?)", bengali: "আপনি এখন কোথায় আছেন?" },
      { id: 11, foreign: "ও তুজি এও ল (Wǒ dùzi è le)", bengali: "আমার খুব খিদে পেয়েছে" },
      { id: 12, foreign: "নি ইয়াও হে সুই মা? (Hē shuǐ ma?)", bengali: "আপনি কি পানি পান করবেন?" },

      // Page 3: 13 - 18
      { id: 13, foreign: "তুই পু ছি (Duìbuqǐ)", bengali: "আমাকে ক্ষমা করবেন / দুঃখিত" },
      { id: 14, foreign: "মেই কুয়ান সি (Méi guānxi)", bengali: "কোনো ব্যাপার না / ঠিক আছে" },
      { id: 15, foreign: "ছিং ওয়েন (Qǐngwèn)", bengali: "দয়া করে একটু শুনবেন কি?" },
      { id: 16, foreign: "ছিং ছুও (Qǐng zuò)", bengali: "দয়া করে বসুন" },
      { id: 17, foreign: "ও তং ল (Wǒ dǒng le)", bengali: "আমি বুঝতে পেরেছি" },
      { id: 18, foreign: "ও পু তং (Wǒ bù dǒng)", bengali: "আমি এটা বুঝতে পারিনি" },

      // Page 4: 19 - 24
      { id: 19, foreign: "ছিং সুও মান ই তিয়ান (Shuō màn)", bengali: "দয়া করে একটু আস্তে কথা বলুন" },
      { id: 20, foreign: "নি ছেন পাও (Nǐ zhēn bàng)", bengali: "আপনি সত্যি অনেক অসাধারণ" },
      { id: 21, foreign: "চাও আন (Zǎo'ān)", bengali: "শুভ সকাল" },
      { id: 22, foreign: "ওয়ান আন (Wǎn'ān)", bengali: "শুভ রাত্রি" },
      { id: 23, foreign: "চু নি হাও ইউন (Zhù nǐ hǎoyùn)", bengali: "আপনার ভাগ্য সুপ্রসন্ন হোক" },
      { id: 24, foreign: "পাও চং (Bǎozhòng)", bengali: "নিজের যত্ন নেবেন / ভালো থাকবেন" }
    ]
  }
};

// 6 Distinct Glossy Color Themes
const themes = [
  "theme-coral",   // 1. Crimson / Rose
  "theme-emerald", // 2. Fresh Emerald Green
  "theme-blue",    // 3. Royal Blue
  "theme-amber",   // 4. Amber / Gold
  "theme-purple",  // 5. Violet / Lavender
  "theme-teal"     // 6. Turquoise / Teal
];

// Bangladesh SVG Flag
const bdFlagSVG = `
  <span class="flag-icon" title="Bangladesh">
    <svg viewBox="0 0 1000 600" width="22" height="15">
      <rect width="1000" height="600" fill="#006A4E"/>
      <circle cx="450" cy="300" r="190" fill="#F42A41"/>
    </svg>
  </span>
`;

// App State
let currentLangKey = 'hindi';
const ITEMS_PER_PAGE = 6;
let currentPage = 0;
let isPlaying = false;
let playInterval = null;
const AUTO_PAGE_DELAY = 4500;

// DOM Elements
const homeView = document.getElementById('homeView');
const learningView = document.getElementById('learningView');
const appTitle = document.getElementById('appTitle');
const sentencesPage = document.getElementById('sentencesPage');
const pageIndicator = document.getElementById('pageIndicator');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const playText = document.getElementById('playText');

// ========================================================
// 2. VIEW SWITCHING (Home <-> Learning)
// ========================================================

function openLanguage(langKey) {
  if (!languageData[langKey]) return;
  currentLangKey = langKey;
  currentPage = 0;
  if (isPlaying) stopAutoPlay();

  const langInfo = languageData[langKey];
  appTitle.textContent = langInfo.title;

  homeView.style.display = 'none';
  learningView.style.display = 'flex';

  renderPage();
}

function goToHome() {
  if (isPlaying) stopAutoPlay();
  learningView.style.display = 'none';
  homeView.style.display = 'flex';
}

// ========================================================
// 3. SENTENCE RENDERING & NAVIGATION
// ========================================================

function renderPage() {
  const currentLang = languageData[currentLangKey];
  const allSentences = currentLang.sentences;
  const totalPages = Math.ceil(allSentences.length / ITEMS_PER_PAGE);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const currentSentences = allSentences.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Update Page Badge
  pageIndicator.innerHTML = `পেইজ <span class="num-font">${currentPage + 1}</span> / <span class="num-font">${totalPages}</span>`;

  // Update Prev Button
  prevBtn.disabled = currentPage === 0;

  // Animation trigger
  sentencesPage.classList.remove('page-anim');
  void sentencesPage.offsetWidth; // re-flow
  sentencesPage.classList.add('page-anim');

  sentencesPage.innerHTML = '';
  currentSentences.forEach((item, index) => {
    const themeClass = themes[index % themes.length];
    const card = document.createElement('div');
    card.className = `sentence-card ${themeClass}`;

    card.innerHTML = `
      <div class="card-num">${item.id}</div>
      <div class="card-content">
        <div class="sentence-line">
          ${currentLang.flagSVG}
          <span class="hindi-sentence">${item.foreign}</span>
        </div>
        <div class="sentence-line">
          ${bdFlagSVG}
          <span class="bengali-sentence">${item.bengali}</span>
        </div>
      </div>
    `;

    sentencesPage.appendChild(card);
  });
}

function nextPage() {
  const currentLang = languageData[currentLangKey];
  const totalPages = Math.ceil(currentLang.sentences.length / ITEMS_PER_PAGE);

  if (currentPage < totalPages - 1) {
    currentPage++;
  } else {
    currentPage = 0;
  }
  renderPage();
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
}

// ========================================================
// 4. AUTO PLAY
// ========================================================

function togglePlay() {
  if (isPlaying) {
    stopAutoPlay();
  } else {
    startAutoPlay();
  }
}

function startAutoPlay() {
  isPlaying = true;
  playBtn.classList.add('playing');
  playText.textContent = "পজ";
  playIcon.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
  `;

  playInterval = setInterval(() => {
    nextPage();
  }, AUTO_PAGE_DELAY);
}

function stopAutoPlay() {
  isPlaying = false;
  clearInterval(playInterval);
  playInterval = null;
  playBtn.classList.remove('playing');
  playText.textContent = "প্লে";
  playIcon.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="6 3 20 12 6 21 6 3"></polygon>
    </svg>
  `;
}

// Event Listeners
nextBtn.addEventListener('click', () => {
  if (isPlaying) stopAutoPlay();
  nextPage();
});

prevBtn.addEventListener('click', () => {
  if (isPlaying) stopAutoPlay();
  prevPage();
});

playBtn.addEventListener('click', togglePlay);

// Global Exposure for HTML onclick
window.openLanguage = openLanguage;
window.goToHome = goToHome;
