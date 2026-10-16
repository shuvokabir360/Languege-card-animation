// ========================================================
// 0. SERVICE WORKER REGISTRATION (PWA Support)
// ========================================================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registered with scope:', reg.scope))
      .catch(err => console.log('Service Worker registration skipped or failed:', err));
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
    sentences: (typeof englishSentences !== 'undefined' && Array.isArray(englishSentences) && englishSentences.length > 0)
      ? englishSentences
      : [
          // Fallback if data_english.js is not loaded
          { id: 1, foreign: "Hello, How are you?", bengali: "নমস্কার, আপনি কেমন আছেন?" },
          { id: 2, foreign: "My name is Kabir.", bengali: "আমার নাম কবির।" },
          { id: 3, foreign: "Nice to meet you.", bengali: "আপনার সাথে দেখা হয়ে খুব ভালো লাগলো।" },
          { id: 4, foreign: "What do you do?", bengali: "আপনি কী কাজ করেন?" },
          { id: 5, foreign: "Thank you very much.", bengali: "আপনাকে অনেক অনেক ধন্যবাদ।" },
          { id: 6, foreign: "I like this very much.", bengali: "আমার এটা খুব পছন্দ হয়েছে।" }
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
    sentences: (typeof chineseSentences !== 'undefined' && Array.isArray(chineseSentences) && chineseSentences.length > 0)
      ? chineseSentences
      : [
          // Fallback if data_chinese.js is not loaded
          { id: 1, foreign: "নি হাও!", bengali: "নমস্কার / হ্যালো" },
          { id: 2, foreign: "নি হাও মা?", bengali: "আপনি কেমন আছেন?" },
          { id: 3, foreign: "ওয়ো হেন হাও, শিয়ে শিয়ে।", bengali: "আমি খুব ভালো আছি, ধন্যবাদ" },
          { id: 4, foreign: "নি চিয়াও শেনমা মিংজি?", bengali: "আপনার নাম কী?" },
          { id: 5, foreign: "ওয়ো চিয়াও কবির।", bengali: "আমার নাম কবির।" },
          { id: 6, foreign: "রেনশি নি হেন কাওশিং।", bengali: "আপনার সাথে দেখা হয়ে খুব ভালো লাগলো" }
        ]
  },

  arabic: {
    title: "আরবি শিখুন",
    flagSVG: `
      <span class="flag-icon" title="Saudi Arabia">
        <svg viewBox="0 0 900 600" width="22" height="15">
          <rect width="900" height="600" fill="#006C35"/>
          <path d="M220 380 L680 380 L660 398 L220 398 Z" fill="#FFFFFF"/>
          <circle cx="235" cy="389" r="12" fill="#FFFFFF"/>
          <path d="M260 250 Q450 190 640 250 Q450 290 260 250" fill="none" stroke="#FFFFFF" stroke-width="14" stroke-linecap="round"/>
          <circle cx="450" cy="245" r="18" fill="#FFFFFF"/>
        </svg>
      </span>
    `,
    sentences: (typeof arabicSentences !== 'undefined' && Array.isArray(arabicSentences) && arabicSentences.length > 0)
      ? arabicSentences
      : [
          // Fallback if data_arabic.js is not loaded
          { id: 1, foreign: "আসসালামু আলাইকুম।", bengali: "আপনার ওপর শান্তি বর্ষিত হোক।" },
          { id: 2, foreign: "মারহাবান! কাইফা হালুক?", bengali: "হ্যালো! আপনি কেমন আছেন?" },
          { id: 3, foreign: "আনা বিখায়ের, আলহামদুলিল্লাহ।", bengali: "আমি ভালো আছি, আল্লাহর রহমতে।" },
          { id: 4, foreign: "মা ইসমুক?", bengali: "আপনার নাম কী?" },
          { id: 5, foreign: "ইসমী কবির।", bengali: "আমার নাম কবির।" },
          { id: 6, foreign: "শুকরান জাযীলান!", bengali: "আপনাকে অনেক অনেক ধন্যবাদ!" }
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

// ========================================================
// 5. PWA "ADD TO HOME SCREEN" INSTALLATION
// ========================================================
let deferredInstallPrompt = null;
const installAppBtn = document.getElementById('installAppBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredInstallPrompt = e;
  if (installAppBtn) {
    installAppBtn.style.display = 'inline-flex';
  }
});

if (installAppBtn) {
  installAppBtn.addEventListener('click', async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    const choiceResult = await deferredInstallPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the PWA install prompt');
    }
    deferredInstallPrompt = null;
    installAppBtn.style.display = 'none';
  });
}

window.addEventListener('appinstalled', () => {
  if (installAppBtn) {
    installAppBtn.style.display = 'none';
  }
  console.log('Language Learning App installed successfully!');
});

