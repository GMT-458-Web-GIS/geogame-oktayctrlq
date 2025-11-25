// 🎵 === SOUND MAP GAME (Zoom + Glow + Disko + Reset Markers + Score Chart) ===

// ⭐ Score History for Chart.js
let scoreHistory = [];

const songs = [
  { country: "Brazil", artist: "Anitta", song: "Vai Malandra", lat: -22.9068, lon: -43.1729, sound: "sounds/anitta_vaimalandra.mp3" },
  { country: "Jamaica", artist: "Bob Marley", song: "Three Little Birds", lat: 18.0179, lon: -76.8099, sound: "sounds/bobmarley_threelittlebirds.mp3" },
  { country: "France", artist: "Daft Punk", song: "Get Lucky", lat: 48.8566, lon: 2.3522, sound: "sounds/daftpunk_getlucky.mp3" },
  { country: "United Kingdom", artist: "Ed Sheeran", song: "Shape of You", lat: 51.5074, lon: -0.1278, sound: "sounds/ed_shapeofyou.mp3" },
  { country: "Puerto Rico", artist: "Luis Fonsi", song: "Despacito", lat: 18.4655, lon: -66.1057, sound: "sounds/luis_despacito.mp3" },
  { country: "South Korea", artist: "PSY", song: "Gangnam Style", lat: 37.5665, lon: 126.9780, sound: "sounds/psy_gangnam.mp3" },
  { country: "Spain", artist: "Rosalía", song: "Malamente", lat: 40.4168, lon: -3.7038, sound: "sounds/rosalia_malamente.mp3" },
  { country: "Colombia", artist: "Shakira", song: "Waka Waka", lat: 4.7110, lon: -74.0721, sound: "sounds/shakira_wakawaka.mp3" },
  { country: "Turkey", artist: "Tarkan", song: "Şımarık", lat: 41.0082, lon: 28.9784, sound: "sounds/tarkan_simarik.mp3" },
  { country: "USA", artist: "Taylor Swift", song: "Willow", lat: 36.1627, lon: -86.7816, sound: "sounds/taylor_willow.mp3" },
  { country: "Ireland", artist: "U2", song: "With or Without You", lat: 53.3498, lon: -6.2603, sound: "sounds/u2_withorwithoutyou.mp3" },
  { country: "Canada", artist: "The Weeknd", song: "Blinding Lights", lat: 43.6510, lon: -79.3470, sound: "sounds/weeknd_blinding.mp3" }
];

// GLOBAL VARIABLES
let currentSong = null;
let usedSongs = [];
let audio = null;
let score = 0;
let round = 0;
let markers = [];
let hintUsed = false;
const maxRounds = 5;

// --- TYPEWRITER TITLE ---
const titleText = "🎵 Guess the Country by Song!";
const titleEl = document.getElementById("title");
let i = 0;

function typeTitle() {
  if (i < titleText.length) {
      titleEl.innerHTML += titleText.charAt(i);
      i++;
      setTimeout(typeTitle, 80);
  }
}
typeTitle();

// --- MAP (Dark Matter) ---
const map = L.map("map").setView([20, 0], 2);
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// --- SOUND EFFECTS ---
const correctSound = new Audio("sounds/correct.mp3");
const wrongSound = new Audio("sounds/wrong.mp3");

// --- CONFETTI ---
function confetti() {
  const duration = 1200;
  const end = Date.now() + duration;

  (function frame() {
      const particle = document.createElement("div");
      particle.style.position = "fixed";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = "-10px";
      particle.style.width = "8px";
      particle.style.height = "8px";
      particle.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
      particle.style.borderRadius = "50%";
      particle.style.pointerEvents = "none";
      particle.style.zIndex = "9999";
      particle.style.animation = "fall 1.2s linear";
      document.body.appendChild(particle);

      setTimeout(() => particle.remove(), 1200);

      if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// --- NEW ROUND ---
function newRound() {

  if (round >= maxRounds) {
      endGame();
      return;
  }

  markers.forEach(m => map.removeLayer(m));
  markers = [];

  map.flyTo([20, 0], 2, { duration: 1 });

  hintUsed = false;

  const availableSongs = songs.filter(s => !usedSongs.includes(s.song));
  currentSong = availableSongs[Math.floor(Math.random() * availableSongs.length)];
  usedSongs.push(currentSong.song);
  round++;

  document.getElementById("message").textContent =
      `🎧 Round ${round}/${maxRounds}: Listen and guess the country!`;

  if (audio) {
      audio.pause();
      audio.currentTime = 0;
  }

  audio = new Audio(currentSong.sound);
  audio.addEventListener("loadedmetadata", () => {
      const startTime = Math.min(audio.duration * 0.5 + Math.random() * 10, audio.duration - 5);
      audio.currentTime = startTime;
  });

  document.body.classList.add("glow");
  audio.addEventListener("ended", () => document.body.classList.remove("glow"));

  if (round > 1) audio.play();
}

// --- PLAY BUTTON ---
document.getElementById("playSound").addEventListener("click", () => {
  if (!currentSong) newRound();

  audio.pause();
  audio.currentTime = 0;

  audio.addEventListener("loadedmetadata", () => {
      const startTime = Math.min(audio.duration * 0.5 + Math.random() * 10, audio.duration - 5);
      audio.currentTime = startTime;
  });

  document.body.classList.add("glow");
  audio.addEventListener("ended", () => document.body.classList.remove("glow"));

  audio.play();
});

// --- MAP CLICK ---
map.on("click", (e) => {
  if (!currentSong) return;

  const distance = getDistance(e.latlng.lat, e.latlng.lng, currentSong.lat, currentSong.lon);
  let feedback;

  if (distance < 300) {
      score += 10;
      feedback = `🎯 Perfect! ${currentSong.country} – ${currentSong.artist}`;
      correctSound.play();
      map.flyTo([currentSong.lat, currentSong.lon], 5, { duration: 2 });
  } else if (distance < 1000) {
      score += 5;
      feedback = `🟡 Close! It was ${currentSong.country}`;
      correctSound.play();
  } else {
      feedback = `❌ Far away! It was ${currentSong.country}`;
      wrongSound.play();
  }

  scoreHistory.push(score);   // ⭐ SCORE CHART GÜNCELLEME

  document.getElementById("message").textContent = `${feedback} | Score: ${score}`;

  const marker = L.marker([currentSong.lat, currentSong.lon])
      .addTo(map)
      .bindPopup(`${currentSong.country} 🎵 ${currentSong.song}`)
      .openPopup();

  markers.push(marker);

  audio.pause();

  setTimeout(newRound, 2000);
});

// --- DISTANCE FUNCTION ---
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) ** 2;

  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

// --- END GAME ---
function endGame() {
  audio.pause();
  audio.currentTime = 0;

  confetti();

  document.body.classList.add("disko");
  setTimeout(() => document.body.classList.remove("disko"), 6000);

  markers.forEach(m => map.removeLayer(m));
  markers = [];

  document.getElementById("message").innerHTML = `
  🏁 <strong>Game Over!</strong><br>
  Your Final Score:
  <span style="color:#00b4d8; font-size:1.3em;">${score}</span> / ${maxRounds * 10}
  <br><br>
  <button id="restartBtn" class="restart">🔁 Play Again</button>
  `;

  document.getElementById("restartBtn").addEventListener("click", restartGame);

  // ⭐ SCORE GRAPHICS
  setTimeout(showScoreChart, 500);
}

// --- RESTART ---
function restartGame() {
  score = 0;
  round = 0;
  usedSongs = [];
  scoreHistory = [];

  markers.forEach(m => map.removeLayer(m));
  markers = [];

  map.setView([20, 0], 2);

  document.getElementById("message").textContent = "🎧 Listen and guess the country!";
  document.getElementById("scoreChart").style.display = "none";

  newRound();
}

// --- HINT BUTTON ---
document.getElementById("hintBtn").addEventListener("click", () => {
  if (!currentSong || hintUsed) {
      document.getElementById("message").textContent = "⚠️ You already used a hint this round!";
      return;
  }

  hintUsed = true;
  score = Math.max(0, score - 3);

  const hintType = Math.random() < 0.5 ? "continent" : "artist";
  let hintText = "";

  if (hintType === "continent") {
      hintText = `🌍 Continent: ${getContinent(currentSong.country)}`;
  } else {
      hintText = `🎤 Artist starts with: ${currentSong.artist.charAt(0)}...`;
  }

  document.getElementById("message").textContent =
      `${hintText} (-3 penalty) | Score: ${score}`;
});

// Continents
function getContinent(country) {
  const data = {
      "Brazil": "South America",
      "Jamaica": "North America",
      "France": "Europe",
      "United Kingdom": "Europe",
      "Puerto Rico": "North America",
      "South Korea": "Asia",
      "Spain": "Europe",
      "Colombia": "South America",
      "Turkey": "Asia / Europe",
      "USA": "North America",
      "Ireland": "Europe",
      "Canada": "North America"
  };
  return data[country] || "Unknown";
}

// --- SCORE CHART FUNCTION ---
function showScoreChart() {
  const canvas = document.getElementById("scoreChart");
  canvas.style.display = "block";

  const ctx = canvas.getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: scoreHistory.map((_, i) => `Round ${i + 1}`),
      datasets: [{
        label: "Score Progression",
        data: scoreHistory,
        backgroundColor: "rgba(0, 180, 216, 0.7)",
        borderColor: "rgba(0, 180, 216, 1)",
        borderWidth: 2,
        borderRadius: 8
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

// --- START GAME ---
newRound();
