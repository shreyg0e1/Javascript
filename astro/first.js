// ============================================
//   AstraVidya — Cosmic JavaScript (first.js)
// ============================================

// ---------- STAR BACKGROUND ----------
(function createStars() {
  const container = document.getElementById('stars');
  const count = 180;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      --dur: ${(Math.random() * 3 + 2).toFixed(1)}s;
      --delay: ${(Math.random() * 4).toFixed(1)}s;
    `;
    container.appendChild(star);
  }
})();

// ---------- ZODIAC DATA ----------
const ZODIAC = [
  { name: "Capricorn",  symbol: "♑", emoji: "🐐", dates: "Dec 22 – Jan 19",
    desc: "Ambitious, disciplined, patient, and a natural leader with deep roots.",
    element: "Earth", planet: "Saturn" },
  { name: "Aquarius",   symbol: "♒", emoji: "🏺", dates: "Jan 20 – Feb 18",
    desc: "Visionary, original, humanitarian. You see the world differently from everyone else.",
    element: "Air", planet: "Uranus" },
  { name: "Pisces",     symbol: "♓", emoji: "🐟", dates: "Feb 19 – Mar 20",
    desc: "Deeply intuitive, empathetic, and artistic. Your soul flows like water.",
    element: "Water", planet: "Neptune" },
  { name: "Aries",      symbol: "♈", emoji: "🐏", dates: "Mar 21 – Apr 19",
    desc: "Bold, passionate, and fearless. You charge ahead where others hesitate.",
    element: "Fire", planet: "Mars" },
  { name: "Taurus",     symbol: "♉", emoji: "🐂", dates: "Apr 20 – May 20",
    desc: "Grounded, loyal, and sensual. You build lasting things from solid foundations.",
    element: "Earth", planet: "Venus" },
  { name: "Gemini",     symbol: "♊", emoji: "👯", dates: "May 21 – Jun 20",
    desc: "Curious, witty, and endlessly versatile. Your mind dances between worlds.",
    element: "Air", planet: "Mercury" },
  { name: "Cancer",     symbol: "♋", emoji: "🦀", dates: "Jun 21 – Jul 22",
    desc: "Nurturing, intuitive, and fiercely protective of those you love.",
    element: "Water", planet: "Moon" },
  { name: "Leo",        symbol: "♌", emoji: "🦁", dates: "Jul 23 – Aug 22",
    desc: "Radiant, generous, and magnetic. You were born to shine and inspire.",
    element: "Fire", planet: "Sun" },
  { name: "Virgo",      symbol: "♍", emoji: "🌾", dates: "Aug 23 – Sep 22",
    desc: "Analytical, helpful, and masterfully precise. You see what others miss.",
    element: "Earth", planet: "Mercury" },
  { name: "Libra",      symbol: "♎", emoji: "⚖️", dates: "Sep 23 – Oct 22",
    desc: "Graceful, fair-minded, and magnetic. You bring harmony wherever you go.",
    element: "Air", planet: "Venus" },
  { name: "Scorpio",    symbol: "♏", emoji: "🦂", dates: "Oct 23 – Nov 21",
    desc: "Intense, magnetic, and perceptive beyond what words can describe.",
    element: "Water", planet: "Pluto" },
  { name: "Sagittarius",symbol: "♐", emoji: "🏹", dates: "Nov 22 – Dec 21",
    desc: "Free-spirited, philosophical, and forever seeking truth and adventure.",
    element: "Fire", planet: "Jupiter" },
];

const QUOTES = [
  "The universe is not outside of you. Look inside yourself — everything you want, you already are.",
  "Stars can't shine without darkness. Trust your journey, even on the hardest nights.",
  "You are the cosmos made conscious, and love is the meaning of it all.",
  "Let today be guided by grace, and tomorrow by wisdom earned today.",
  "Your energy is currency — spend it only on things that truly matter.",
  "What you seek is also seeking you. Open your heart and receive.",
  "The moon does not fight. It simply shines. Be like the moon today.",
  "Even the brightest star was once just a cloud of hope and potential.",
  "Trust the timing of your life. Some flowers bloom only in winter.",
  "You have survived every storm so far. You will survive this one too.",
  "The universe planted dreams in your heart because you have the power to grow them.",
  "Speak kindly to yourself — the stars are always listening.",
  "Where focus goes, cosmic energy flows. Direct it with intention today.",
  "Something wonderful is about to happen to you. Be ready to receive it.",
];

const BLESSINGS = [
  { b: "Shanti aur Sukoon", d: "Inner peace wraps around you today like a warm shawl. Worry not — all shall be well." },
  { b: "Dhan aur Samridhi", d: "Prosperity moves in your direction. A financial opportunity may knock soon." },
  { b: "Prem aur Rishte", d: "Love surrounds you. Strengthen a bond today — it will bloom for years." },
  { b: "Swasthya aur Shakti", d: "Your body is a temple. Today, your energy and health are greatly blessed." },
  { b: "Safalta aur Unnati", d: "Success follows your every step today. Begin what you've been waiting to start." },
  { b: "Gyan aur Vichar", d: "Wisdom descends upon you. A sudden clarity will solve a long-standing problem." },
  { b: "Raksha aur Suraksha", d: "You are protected today. Guardian energies walk beside you wherever you go." },
  { b: "Aanand aur Khushi", d: "Joy flows effortlessly today. Smile freely — your happiness uplifts others too." },
];

const TOTKAS = [
  { t: "🌿 Tulsi ke 5 patte khaye khali pet, din bhar sakaaratmak urja rahegi.", e: "Negative energy se bachaav, mann mein tazgi aur freshness aayegi." },
  { t: "🟡 Peele kapde pehno aaj, aur kisi bhi kaam ki shuruaat karne se pehle 'Om' ek baar bolo.", e: "Guru grah ki kripa milegi, kaam mein safalta tez hogi." },
  { t: "💧 Subah uthke 7 baar paani mein gulab ki pankhuriya daalke pee lo.", e: "Shukra grah majboot hoga — prem aur khubsurati mein izaafa hoga." },
  { t: "🕯️ Raat ko sone se pehle ek ghee ka diya jalao aur apni manokamna 3 baar dil mein bolo.", e: "Ichha poori hone ki sambhavna bahut zyaada badh jaayegi." },
  { t: "🌾 Kisi gaay ko hari ghaas khilao aaj — ya kisi bhi janwar ko khana do.", e: "Grahi dosho se mukti milegi aur bhagya mein achanak sudhar aayega." },
  { t: "🔴 Lal dhage ko apni daayein kandhaai mein baandhke ghar se niklo.", e: "Mangal grah ki shakti tumhare saath rahegi — dushman bhi mitra ban sakte hain." },
  { t: "🌸 Apne ghaar ke mandir mein marigold (genda) ke phool chadhaao.", e: "Surya dev prasann honge, confidence aur izzat mein vridhi hogi." },
  { t: "🍋 Nimbu ko kaat ke chaar kone mein rakh do — evening mein bahar phenk do.", e: "Nakaratmak urja ghar se nikalti hai, vastu dosha door hota hai." },
  { t: "📿 Apni maa ya bade se aaj ashirvaad zaroor lo, pair chukar ya haath jodhkar.", e: "Pitru dosha shaant hoga aur aane waale kaafi dinon tak achha samay rahega." },
  { t: "🧂 Peene ke paani mein ek chutki namak mila lo subah ke waqt.", e: "Buri nazar, nazar dosh aur pados ki jealousy se poora din suraksha milegi." },
];

const LUCKY_COLORS = [
  { name: "Royal Gold", hex: "#f0c060", en: "Gold", number: 3 },
  { name: "Mystic Violet", hex: "#9b59b6", en: "Purple", number: 7 },
  { name: "Ocean Blue", hex: "#3498db", en: "Blue", number: 2 },
  { name: "Forest Green", hex: "#27ae60", en: "Green", number: 6 },
  { name: "Sunrise Orange", hex: "#e67e22", en: "Orange", number: 9 },
  { name: "Rose Pink", hex: "#e91e8c", en: "Pink", number: 1 },
  { name: "Pearl White", hex: "#ecf0f1", en: "White", number: 4 },
  { name: "Ruby Red", hex: "#e74c3c", en: "Red", number: 8 },
  { name: "Sky Cyan", hex: "#00bcd4", en: "Cyan", number: 5 },
];

const DAY_VIBES = [
  { label: "✨ Bahut Shubh Din!", pct: 92, color: "linear-gradient(90deg, #43e97b, #38f9d7)",
    text: "Aj ka din exceptional hai! Haan main sabse pehle hai aur phir bhi sabse pehle hain. Naye kaamon ki shuruaat karo, milne se kaamo mein bada faayda hoga. Dopahar ke baad ek surprise good news aa sakti hai." },
  { label: "🌟 Achha Din", pct: 78, color: "linear-gradient(90deg, #f9d423, #f83600)",
    text: "Din achha rahega. Kuch choti-moti takleef ho sakti hai but overall sab sahi rahega. Shaant rehna aur zyada argument se bachna faydemand rahega." },
  { label: "☯️ Saadhaaran Din", pct: 58, color: "linear-gradient(90deg, #7ab8ff, #c97aff)",
    text: "Din average rahega — na bahut achha, na bura. Aaj ruk ke sochne ka din hai, jaldi decisions mat lo. Meditation ya quiet time bahut helpful rahega." },
  { label: "⚠️ Savdhaan Rahein", pct: 38, color: "linear-gradient(90deg, #ff9966, #ff5e62)",
    text: "Aaj thodi savdhaani ki zaroorat hai. Kisi bhi naye kaam ya investment mein jaldi mat karo. Kisi bhi baat mein ghabrana nahi — yeh ek choti si temporary period hai." },
  { label: "🌙 Aaram Ka Din", pct: 68, color: "linear-gradient(90deg, #a18cd1, #fbc2eb)",
    text: "Aaj khud ke liye din rakhna achha rahega. Doston ya family ke saath time bitao. Creative kaam ya music-art se mann fresh hoga." },
];

// ---------- HELPER: Get Zodiac ----------
function getZodiac(month, day) {
  const m = month, d = day;
  if ((m === 12 && d >= 22) || (m === 1 && d <= 19)) return ZODIAC[0];
  if ((m === 1 && d >= 20) || (m === 2 && d <= 18)) return ZODIAC[1];
  if ((m === 2 && d >= 19) || (m === 3 && d <= 20)) return ZODIAC[2];
  if ((m === 3 && d >= 21) || (m === 4 && d <= 19)) return ZODIAC[3];
  if ((m === 4 && d >= 20) || (m === 5 && d <= 20)) return ZODIAC[4];
  if ((m === 5 && d >= 21) || (m === 6 && d <= 20)) return ZODIAC[5];
  if ((m === 6 && d >= 21) || (m === 7 && d <= 22)) return ZODIAC[6];
  if ((m === 7 && d >= 23) || (m === 8 && d <= 22)) return ZODIAC[7];
  if ((m === 8 && d >= 23) || (m === 9 && d <= 22)) return ZODIAC[8];
  if ((m === 9 && d >= 23) || (m === 10 && d <= 22)) return ZODIAC[9];
  if ((m === 10 && d >= 23) || (m === 11 && d <= 21)) return ZODIAC[10];
  return ZODIAC[11];
}

// ---------- HELPER: Seeded pick ----------
function seededPick(arr, seed) {
  const idx = Math.abs(seed) % arr.length;
  return arr[idx];
}

// ---------- HELPER: Name-based seed ----------
function nameSeed(name) {
  let s = 0;
  for (let i = 0; i < name.length; i++) s += name.charCodeAt(i) * (i + 1);
  return s;
}

// ---------- MAIN FUNCTION ----------
function revealCosmic() {
  const name = document.getElementById('userName').value.trim();
  const dob  = document.getElementById('dob').value;

  if (!name) {
    shakeInput('userName');
    return;
  }
  if (!dob) {
    shakeInput('dob');
    return;
  }

  // Show loading
  document.getElementById('formSection').style.display = 'none';
  const loading = document.getElementById('loadingOverlay');
  loading.classList.add('active');

  // Simulate cosmic calculation delay
  setTimeout(() => {
    loading.classList.remove('active');
    computeAndShow(name, dob);
  }, 2800);
}

function computeAndShow(name, dob) {
  const parts = dob.split('-');
  const birthYear  = parseInt(parts[0]);
  const birthMonth = parseInt(parts[1]);
  const birthDay   = parseInt(parts[2]);

  const seed = nameSeed(name) + birthDay + birthMonth * 31 + birthYear;
  const today = new Date();
  const daySeed = today.getDate() + today.getMonth() * 31 + seed;

  // Get zodiac
  const zodiac = getZodiac(birthMonth, birthDay);

  // Get data
  const quote   = seededPick(QUOTES, daySeed + 11);
  const blessing= seededPick(BLESSINGS, seed + 3);
  const totka   = seededPick(TOTKAS, daySeed + seed + 7);
  const lucky   = seededPick(LUCKY_COLORS, seed + 5);
  const dayVibe = seededPick(DAY_VIBES, daySeed);

  // Get first name
  const firstName = name.split(' ')[0];

  // Fill DOM
  document.getElementById('userGreeting').textContent = `✦ ${firstName} ki Cosmic Reading ✦`;
  document.getElementById('zodiacBadge').textContent   = `${zodiac.emoji} ${zodiac.name} · ${zodiac.element} · ${zodiac.planet}`;

  document.getElementById('sunSign').textContent   = `${zodiac.symbol} ${zodiac.name}`;
  document.getElementById('sunDesc').textContent   = zodiac.desc + ` · ${zodiac.dates}`;

  document.getElementById('todayQuote').textContent = `"${quote}"`;

  document.getElementById('blessing').textContent     = `🙏 ${blessing.b}`;
  document.getElementById('blessingDesc').textContent = blessing.d;

  document.getElementById('luckyColor').textContent  = `${lucky.name}`;
  document.getElementById('colorDot').style.background = lucky.hex;
  document.getElementById('colorDot').style.boxShadow  = `0 0 16px ${lucky.hex}`;
  document.getElementById('luckyNumber').textContent = `Lucky Number: ${lucky.number}  ·  Aaj ${lucky.en} rang pehno ya saath rakho`;

  document.getElementById('totka').textContent       = totka.t;
  document.getElementById('totkaEffect').textContent = `Prabhav: ${totka.e}`;

  document.getElementById('dayLabel').textContent    = dayVibe.label;
  document.getElementById('dayLabel').style.color    = 'var(--gold-light)';
  document.getElementById('dayPrediction').textContent = dayVibe.text;
  document.getElementById('meterFill').style.background = dayVibe.color;

  // Show results
  const results = document.getElementById('resultsSection');
  results.classList.add('active');

  // Animate meter fill
  setTimeout(() => {
    document.getElementById('meterFill').style.width = dayVibe.pct + '%';
  }, 300);

  // Scroll to results smoothly
  results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---------- RESET ----------
function resetForm() {
  document.getElementById('resultsSection').classList.remove('active');
  document.getElementById('formSection').style.display = 'block';
  document.getElementById('userName').value = '';
  document.getElementById('dob').value = '';
  document.getElementById('meterFill').style.width = '0%';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- SHAKE ANIMATION ON EMPTY INPUT ----------
function shakeInput(id) {
  const el = document.getElementById(id);
  el.style.transition = 'transform 0.1s';
  const steps = [6, -6, 6, -6, 3, -3, 0];
  steps.forEach((x, i) => {
    setTimeout(() => {
      el.style.transform = `translateX(${x}px)`;
      el.style.borderColor = 'rgba(255,80,80,0.7)';
      if (i === steps.length - 1) {
        el.style.borderColor = '';
      }
    }, i * 60);
  });
}

// ---------- ALLOW ENTER KEY TO SUBMIT ----------
document.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') {
    const fs = document.getElementById('formSection');
    if (fs && fs.style.display !== 'none') {
      revealCosmic();
    }
  }
});