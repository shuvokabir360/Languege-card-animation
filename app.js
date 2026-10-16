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
let itemsPerPage = 6;
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
  const totalPages = Math.ceil(allSentences.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const currentSentences = allSentences.slice(startIndex, startIndex + itemsPerPage);

  // Update Page Badge
  pageIndicator.innerHTML = `পেইজ <span class="num-font">${currentPage + 1}</span> / <span class="num-font">${totalPages}</span>`;

  // Update Prev Button
  prevBtn.disabled = currentPage === 0;

  // Animation trigger
  sentencesPage.classList.remove('page-anim');
  void sentencesPage.offsetWidth; // re-flow
  sentencesPage.classList.add('page-anim');

  // Space-evenly layout for 6 or fewer sentences, scrollable for more
  if (itemsPerPage <= 6) {
    sentencesPage.classList.add('space-evenly');
  } else {
    sentencesPage.classList.remove('space-evenly');
  }

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
  const totalPages = Math.ceil(currentLang.sentences.length / itemsPerPage);

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

// ========================================================
// 6. PULL-TO-REFRESH (ট্যাপ করে নিচে টান দিলে রিলোড হবে)
// ========================================================
const pullRefreshContainer = document.getElementById('pullRefreshContainer');
const pullRefreshSpinner = document.getElementById('pullRefreshSpinner');
const pullRefreshLabel = document.getElementById('pullRefreshLabel');
const mobileAppFrame = document.getElementById('app');

let touchStartY = 0;
let touchDiffY = 0;
let isPulling = false;
const PULL_THRESHOLD = 65; // px threshold to trigger reload

function getActiveScrollTop() {
  if (homeView && homeView.style.display !== 'none') {
    return homeView.scrollTop;
  }
  const sentenceContainer = document.querySelector('.sentences-page-container');
  if (sentenceContainer) {
    return sentenceContainer.scrollTop;
  }
  return window.scrollY || document.documentElement.scrollTop || 0;
}

function handleTouchStart(e) {
  if (getActiveScrollTop() <= 2) {
    const touch = e.touches ? e.touches[0] : e;
    touchStartY = touch.clientY;
    isPulling = true;
  } else {
    isPulling = false;
  }
}

function handleTouchMove(e) {
  if (!isPulling) return;
  const touch = e.touches ? e.touches[0] : e;
  const currentY = touch.clientY;
  const diff = currentY - touchStartY;

  if (diff > 5 && getActiveScrollTop() <= 2) {
    // Prevent default screen bounce
    if (e.cancelable && e.type === 'touchmove') {
      e.preventDefault();
    }
    // Damping formula for realistic resistance
    touchDiffY = Math.min(diff * 0.45, 90);

    pullRefreshContainer.style.height = `${touchDiffY}px`;
    pullRefreshContainer.classList.add('visible');

    const rotation = touchDiffY * 4.5;
    pullRefreshSpinner.style.transform = `rotate(${rotation}deg)`;

    if (touchDiffY >= PULL_THRESHOLD) {
      pullRefreshLabel.textContent = "ছেড়ে দিন রিলোড হবে...";
      pullRefreshSpinner.style.color = "#ffffff";
    } else {
      pullRefreshLabel.textContent = "নিচে টানুন রিলোড করতে...";
      pullRefreshSpinner.style.color = "#93c5fd";
    }
  } else if (diff < 0) {
    isPulling = false;
    resetPullIndicator();
  }
}

function handleTouchEnd() {
  if (!isPulling) return;
  isPulling = false;

  if (touchDiffY >= PULL_THRESHOLD) {
    // Trigger reload with animation
    pullRefreshContainer.style.height = '60px';
    pullRefreshSpinner.classList.add('spinning');
    pullRefreshLabel.textContent = "রিলোড হচ্ছে...";
    
    // Smooth delay before reload
    setTimeout(() => {
      window.location.reload();
    }, 450);
  } else {
    resetPullIndicator();
  }
  touchDiffY = 0;
}

function resetPullIndicator() {
  pullRefreshContainer.style.height = '0px';
  pullRefreshContainer.classList.remove('visible');
  pullRefreshSpinner.classList.remove('spinning');
  pullRefreshSpinner.style.transform = 'rotate(0deg)';
  pullRefreshLabel.textContent = "নিচে টানুন রিলোড করতে...";
}

// Attach Touch & Mouse Drag Listeners to Mobile Frame
if (mobileAppFrame) {
  mobileAppFrame.addEventListener('touchstart', handleTouchStart, { passive: true });
  mobileAppFrame.addEventListener('touchmove', handleTouchMove, { passive: false });
  mobileAppFrame.addEventListener('touchend', handleTouchEnd);

  // Mouse drag support for desktop testing
  mobileAppFrame.addEventListener('mousedown', handleTouchStart);
  window.addEventListener('mousemove', (e) => {
    if (isPulling) handleTouchMove(e);
  });
  window.addEventListener('mouseup', handleTouchEnd);
}

// ========================================================
// 7. JPEG SCREENSHOT CAPTURE (স্ক্রিনশট নেওয়ার সময় বাটনটি হাইড থাকবে)
// ========================================================
const screenshotBtn = document.getElementById('screenshotBtn');
const screenshotToast = document.getElementById('screenshotToast');

async function takePageScreenshot() {
  if (!window.html2canvas) {
    alert("স্ক্রিনশট ইঞ্জিন প্রস্তুত হচ্ছে, অনুগ্রহ করে ১ সেকেন্ড পর আবার চেষ্টা করুন।");
    return;
  }

  const appElement = document.getElementById('app');
  if (!appElement) return;

  // 1. Hide the screenshot button and any no-screenshot elements before capture
  const elementsToHide = document.querySelectorAll('.no-screenshot');
  elementsToHide.forEach(el => el.classList.add('hide-during-screenshot'));

  // 2. Enable clean screenshot mode (removes backdrop-filter and inset shadows that break html2canvas)
  appElement.classList.add('capturing-screenshot');

  // Also ensure pull to refresh is closed
  if (typeof resetPullIndicator === 'function') {
    resetPullIndicator();
  }

  try {
    // 3. Capture the mobile app frame using html2canvas (2x scale for crisp HD quality)
    const canvas = await html2canvas(appElement, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      backgroundColor: window.getComputedStyle(appElement).backgroundColor || '#081b3a',
      logging: false,
      scrollX: 0,
      scrollY: 0,
      onclone: (clonedDoc) => {
        const clonedApp = clonedDoc.getElementById('app');
        if (clonedApp) {
          clonedApp.classList.add('capturing-screenshot');
        }
      }
    });

    // 4. Convert canvas to JPEG format
    const jpegDataUrl = canvas.toDataURL('image/jpeg', 0.95);

    // 5. Generate clean filename based on current language & timestamp
    const now = new Date();
    const timeStr = `${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
    const filename = `Language-App-${currentLangKey || 'page'}-${timeStr}.jpg`;

    // 6. Trigger download
    const downloadLink = document.createElement('a');
    downloadLink.href = jpegDataUrl;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    // 7. Show success toast notification
    if (screenshotToast) {
      screenshotToast.classList.add('show');
      setTimeout(() => {
        screenshotToast.classList.remove('show');
      }, 2600);
    }
  } catch (err) {
    console.error('Screenshot capture failed:', err);
    alert('স্ক্রিনশট নিতে সমস্যা হয়েছে: ' + err.message);
  } finally {
    // 8. ALWAYS un-hide the screenshot button and remove clean capture class
    appElement.classList.remove('capturing-screenshot');
    elementsToHide.forEach(el => el.classList.remove('hide-during-screenshot'));
  }
}

if (screenshotBtn) {
  screenshotBtn.addEventListener('click', takePageScreenshot);
}

// ========================================================
// 8. APP BACKGROUND & EFFECT PRESETS (20 টি প্রিসেট)
// ========================================================
const BG_PRESETS = [
  { id: 1, name: 'রয়্যাল ব্লু', effect: 'ডিফল্ট গ্রিড', gradient: 'linear-gradient(135deg, #081b3a, #1d4ed8)', className: 'bg-preset-1' },
  { id: 2, name: 'মিডনাইট সাইবার', effect: 'নিয়ন সায়ান ডটস', gradient: 'linear-gradient(135deg, #030712, #082f49, #06b6d4)', className: 'bg-preset-2' },
  { id: 3, name: 'পার্পল গ্যালাক্সি', effect: 'কসমিক নেবুলা গ্লো', gradient: 'linear-gradient(135deg, #0f071e, #581c87, #a855f7)', className: 'bg-preset-3' },
  { id: 4, name: 'রয়্যাল এমারেল্ড', effect: 'পান্না গ্রিন মেশ', gradient: 'linear-gradient(135deg, #022c22, #047857, #10b981)', className: 'bg-preset-4' },
  { id: 5, name: 'ওলেড ব্ল্যাক', effect: 'পিওর ডার্ক গ্লো', gradient: 'linear-gradient(135deg, #000000, #18181b, #27272a)', className: 'bg-preset-5' },
  { id: 6, name: 'সানসেট ভাইব্রেন্ট', effect: 'অ্যাম্বার ও পিঙ্ক রে', gradient: 'linear-gradient(135deg, #3b0716, #be123c, #f97316)', className: 'bg-preset-6' },
  { id: 7, name: 'ডিপ ওশান', effect: 'নীল সমুদ্র রিবল', gradient: 'linear-gradient(135deg, #021a36, #0284c7, #38bdf8)', className: 'bg-preset-7' },
  { id: 8, name: 'অরোরা ডান্স', effect: 'উত্তর মেরুর আলো', gradient: 'linear-gradient(135deg, #031e17, #0d9488, #2dd4bf)', className: 'bg-preset-8' },
  { id: 9, name: 'রুবি ভেলভেট', effect: 'ক্রিমসন রেড গ্লো', gradient: 'linear-gradient(135deg, #380808, #991b1b, #ef4444)', className: 'bg-preset-9' },
  { id: 10, name: 'গোল্ডেন লাক্সারি', effect: 'শিমারিং গোল্ডেন', gradient: 'linear-gradient(135deg, #261704, #b45309, #fbbf24)', className: 'bg-preset-10' },
  { id: 11, name: 'আর্কটিক আইস', effect: 'হিমশীতল ক্রিস্টাল', gradient: 'linear-gradient(135deg, #081d33, #0284c7, #bae6fd)', className: 'bg-preset-11' },
  { id: 12, name: 'ম্যাট্রিক্স গ্রিন', effect: 'সাইবার কোড গ্রিড', gradient: 'linear-gradient(135deg, #011409, #15803d, #4ade80)', className: 'bg-preset-12' },
  { id: 13, name: 'কসমিক নেবুলা', effect: 'নক্ষত্রপুঞ্জ স্পার্কল', gradient: 'linear-gradient(135deg, #150624, #4a044e, #d946ef)', className: 'bg-preset-13' },
  { id: 14, name: 'রোজ গোল্ড', effect: 'প্লাম ও পিঙ্ক অরা', gradient: 'linear-gradient(135deg, #240e19, #831843, #f472b6)', className: 'bg-preset-14' },
  { id: 15, name: 'সায়ান টেকনো', effect: 'ইলেকট্রিক সার্কিট', gradient: 'linear-gradient(135deg, #022222, #0e7490, #22d3ee)', className: 'bg-preset-15' },
  { id: 16, name: 'ড্রাগন লাভা', effect: 'উত্তপ্ত লাভা ফ্লেয়ার', gradient: 'linear-gradient(135deg, #2e0801, #c2410c, #f97316)', className: 'bg-preset-16' },
  { id: 17, name: 'ডার্ক কার্বন', effect: 'কার্বন ফাইবার ম্যাট', gradient: 'linear-gradient(135deg, #111827, #1f2937, #4b5563)', className: 'bg-preset-17' },
  { id: 18, name: 'টুইলাইট ব্লুপ্রিন্ট', effect: 'আর্কিটেক্ট গ্রিড', gradient: 'linear-gradient(135deg, #09203a, #134074, #8da9c4)', className: 'bg-preset-18' },
  { id: 19, name: 'হলো প্রিজম্যাটিক', effect: 'রেইনবো স্পেকট্রাম', gradient: 'linear-gradient(135deg, #121324, #2b1d3d, #ec4899)', className: 'bg-preset-19' },
  { id: 20, name: 'পাইন ফরেস্ট', effect: 'এভারগ্রিন নেচার মিস্ট', gradient: 'linear-gradient(135deg, #031b12, #064e3b, #10b981)', className: 'bg-preset-20' }
];

let currentBgPresetId = 1;
const settingsModalOverlay = document.getElementById('settingsModalOverlay');
const presetsGrid = document.getElementById('presetsGrid');

function renderPresetsGrid() {
  if (!presetsGrid) return;
  presetsGrid.innerHTML = '';

  BG_PRESETS.forEach(preset => {
    const card = document.createElement('div');
    card.className = `preset-card-item ${preset.id === currentBgPresetId ? 'active' : ''}`;
    card.id = `presetItem-${preset.id}`;
    card.onclick = () => applyBgPreset(preset.id);

    card.innerHTML = `
      <div class="preset-swatch" style="background: ${preset.gradient};"></div>
      <div class="preset-info">
        <span class="preset-name">${preset.id}. ${preset.name}</span>
        <span class="preset-effect">${preset.effect}</span>
      </div>
    `;

    presetsGrid.appendChild(card);
  });
}

function applyBgPreset(presetId) {
  const appElement = document.getElementById('app');
  if (!appElement) return;

  currentBgPresetId = presetId;

  // Remove existing preset classes from both app frame and outer body
  for (let i = 1; i <= 20; i++) {
    appElement.classList.remove(`bg-preset-${i}`);
    document.body.classList.remove(`body-preset-${i}`);
  }

  // Add selected preset class to app frame and outer body
  appElement.classList.add(`bg-preset-${presetId}`);
  document.body.classList.add(`body-preset-${presetId}`);

  // Persist choice to localStorage
  try {
    localStorage.setItem('app_bg_preset', presetId.toString());
  } catch (e) {
    console.warn('Could not save theme preference:', e);
  }

  // Update active state in presets list
  document.querySelectorAll('.preset-card-item').forEach(item => {
    item.classList.remove('active');
  });
  const activeItem = document.getElementById(`presetItem-${presetId}`);
  if (activeItem) {
    activeItem.classList.add('active');
  }
}

function openSettingsModal() {
  if (!settingsModalOverlay) return;
  renderPresetsGrid();
  updateItemsPerPageUI();

  // Sync screenshot button checkbox state
  const btn = document.getElementById('screenshotBtn');
  const checkbox = document.getElementById('screenshotToggleCheckbox');
  const desc = document.getElementById('screenshotToggleDesc');
  const isVisible = btn ? !btn.classList.contains('is-hidden') : true;
  if (checkbox) checkbox.checked = isVisible;
  if (desc) {
    desc.textContent = isVisible 
      ? 'বাটন বর্তমানে স্ক্রিনে দৃশ্যমান আছে' 
      : 'বাটন বর্তমানে স্ক্রিন থেকে লুকানো আছে';
    desc.style.color = isVisible ? '#86efac' : '#fca5a5';
  }

  settingsModalOverlay.classList.add('active');
}

function closeSettingsModal(event) {
  if (!settingsModalOverlay) return;
  if (event && event.target !== settingsModalOverlay && !event.target.classList.contains('settings-close-btn') && !event.target.classList.contains('settings-done-btn')) {
    return;
  }
  settingsModalOverlay.classList.remove('active');
}

function resetDefaultTheme() {
  applyBgPreset(1);
}

// Expose functions globally for HTML inline handlers
window.openSettingsModal = openSettingsModal;
window.closeSettingsModal = closeSettingsModal;
window.applyBgPreset = applyBgPreset;
window.resetDefaultTheme = resetDefaultTheme;

// Initialize saved background preset on startup
(function initAppBackground() {
  try {
    const saved = localStorage.getItem('app_bg_preset');
    const presetId = saved ? parseInt(saved, 10) : 1;
    if (presetId >= 1 && presetId <= 20) {
      applyBgPreset(presetId);
    } else {
      applyBgPreset(1);
    }
  } catch (e) {
    applyBgPreset(1);
  }
})();

// ========================================================
// 9. SCREENSHOT BUTTON VISIBILITY (SHOW / HIDE TOGGLE)
// ========================================================
function toggleScreenshotBtnVisibility(isVisible) {
  const btn = document.getElementById('screenshotBtn');
  const checkbox = document.getElementById('screenshotToggleCheckbox');
  const desc = document.getElementById('screenshotToggleDesc');

  if (btn) {
    if (isVisible) {
      btn.classList.remove('is-hidden');
    } else {
      btn.classList.add('is-hidden');
    }
  }

  if (checkbox) {
    checkbox.checked = isVisible;
  }

  if (desc) {
    desc.textContent = isVisible 
      ? 'বাটন বর্তমানে স্ক্রিনে দৃশ্যমান আছে' 
      : 'বাটন বর্তমানে স্ক্রিন থেকে লুকানো আছে';
    desc.style.color = isVisible ? '#86efac' : '#fca5a5';
  }

  try {
    localStorage.setItem('show_screenshot_btn', isVisible ? 'true' : 'false');
  } catch (e) {
    console.warn('Could not save screenshot button preference:', e);
  }
}

window.toggleScreenshotBtnVisibility = toggleScreenshotBtnVisibility;

// Initialize screenshot button visibility on startup
(function initScreenshotBtnVisibility() {
  try {
    const saved = localStorage.getItem('show_screenshot_btn');
    const isVisible = saved !== null ? saved === 'true' : true; // Default is visible
    toggleScreenshotBtnVisibility(isVisible);
  } catch (e) {
    toggleScreenshotBtnVisibility(true);
  }
})();

// ========================================================
// 10. CONFIGURABLE SENTENCES PER PAGE (৩ থেকে ১০ বাক্য)
// ========================================================
function toBengaliNumber(num) {
  const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return String(num).replace(/[0-9]/g, d => bnDigits[d]);
}

function updateItemsPerPageUI() {
  const valEl = document.getElementById('itemsPerPageValue');
  const descEl = document.getElementById('itemsPerPageDesc');
  const bnCount = toBengaliNumber(itemsPerPage);

  if (valEl) {
    valEl.textContent = bnCount;
  }
  if (descEl) {
    descEl.textContent = `বর্তমানে প্রতি পেইজে ${bnCount}টি বাক্য প্রদর্শিত হচ্ছে`;
  }

  // Update pills active highlight
  const pills = document.querySelectorAll('.items-pill');
  pills.forEach(pill => {
    pill.classList.remove('active');
  });

  const activePill = document.getElementById(`pill-${itemsPerPage}`);
  if (activePill) {
    activePill.classList.add('active');
  }
}

function setItemsPerPage(count) {
  const num = parseInt(count, 10);
  if (isNaN(num) || num < 2 || num > 15) return;
  itemsPerPage = num;

  try {
    localStorage.setItem('app_items_per_page', String(itemsPerPage));
  } catch (e) {
    console.warn('Could not save items per page:', e);
  }

  // Update UI in modal
  updateItemsPerPageUI();

  // If on learning view, adjust currentPage to stay within bounds and re-render
  if (learningView && learningView.style.display !== 'none') {
    const currentLang = languageData[currentLangKey];
    if (currentLang && currentLang.sentences) {
      const totalPages = Math.ceil(currentLang.sentences.length / itemsPerPage);
      if (currentPage >= totalPages) {
        currentPage = Math.max(0, totalPages - 1);
      }
      renderPage();
    }
  }
}

function stepItemsPerPage(delta) {
  const target = itemsPerPage + delta;
  if (target >= 2 && target <= 15) {
    setItemsPerPage(target);
  }
}

window.setItemsPerPage = setItemsPerPage;
window.stepItemsPerPage = stepItemsPerPage;
window.updateItemsPerPageUI = updateItemsPerPageUI;

// Initialize saved items per page on startup
(function initItemsPerPage() {
  try {
    const saved = localStorage.getItem('app_items_per_page');
    if (saved) {
      const parsed = parseInt(saved, 10);
      if (!isNaN(parsed) && parsed >= 2 && parsed <= 15) {
        itemsPerPage = parsed;
      }
    }
  } catch (e) {
    itemsPerPage = 6;
  }
  updateItemsPerPageUI();
})();

