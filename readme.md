

# 🎵 Sound Map – Global Hits Edition

### 🌍 Live Demo
🔗 https://gmt-458-web-gis.github.io/geogame-oktayctrlq/

(Click the link to play the game!)

### GMT458 – Web GIS · Assignment 2: GeoGame  
**Author:** Oktay Duman · Hacettepe University  

---

## ⭐ 1. Game Concept

“**Guess the Country by Song**” is an interactive geo-based music quiz.  
In each round, a short music clip is played, and the player must guess which country the song is from by clicking on the world map.

### ✔ Key Game Features
- Interactive world map guessing  
- Random song selection each round  
- Distance-based scoring system  
- **5-round gameplay**  
- **Hint system** (continent or artist initial, −3 points)  
- Confetti celebration animation  
- Smooth zoom animation toward the correct country  
- “Game Over” screen + Restart button  
- No repeated songs  
- Typewriter title animation  
- Glow / disco animated background  

---

## ⭐ 2. Requirements

### ✔ Functional Requirements
- Leaflet-based world map  
- Music playback for each round  
- 5-round game session  
- Distance-based scoring  
- No-repeat song mechanism  
- Hint button with −3 point penalty  
- Confetti and sound effects  
- Game Over screen with final score  
- Auto-zoom to correct location  
- Restart functionality  

### ✔ UI Requirements
- Intro screen  
- Main gameplay interface  
- 3D animated buttons  
- Animated background  
- Map popups  
- Scoreboard display  

---

## ⭐ 3. Layout Sketches (Required by Assignment)

## 📸 Game Screenshots

### 🟦 Intro Screen
![Intro Screen](assets/layouts/playin.png)

### 🟩 Playing Screen
![Playing Screen](assets/layouts/intro.png)

Sketch files are located in:  
`/assets/layouts/`

---

## ⭐ 4. Answers to Game Design Questions (PDF Requirement)

### 1️⃣ How will the game progress?
- The game consists of **5 rounds**.  
- Each round plays a random music clip.  
- The user clicks on the world map to guess the country.  
- The distance is calculated → points are awarded.  
- The next round starts automatically.  
- After round 5, the Game Over screen displays the final score.

### 2️⃣ How many questions?
- Exactly **5 rounds**.

### 3️⃣ Is there any difficulty or time-based progression?
- There is **no time limit**.  
- Songs start from the middle, increasing difficulty.  
- A hint button exists but applies a **−3 point penalty**.

### 4️⃣ How many lives?
- There is **no life system**.  
- Each round allows **one guess**.

---

## ⭐ 5. JavaScript Libraries Used

### Core Libraries
- **Leaflet.js** – interactive mapping  
- **CARTO Dark Matter Tiles** – basemap  
- **Vanilla JavaScript** – game logic  

### Bonus & Visual Enhancements
- Custom confetti animation  
- Audio playback system  
- Typewriter effect  
- 3D animated buttons  
- Disco / glow background  
- Chart.js (optional visualization)  

---

## ⭐ 6. NYC Taxi Data (Optional Bonus)

Although the assignment mentions NYC Taxi data as an optional bonus:  
This project fulfills the bonus criteria through advanced UI/UX features, animations, and enhanced interactivity.

---

## ⭐ 7. Implementation Plan (Delivered as Required)

- HTML + CSS interface completed  
- Leaflet map implemented  
- Audio system integrated  
- Round logic, scoring, attempt validation  
- Hint system added  
- UI animations (typing, glow, disco) implemented  
- Confetti celebration effect  
- Game Over + Restart screen finished  
- README + layout sketches prepared  
- GitHub Pages deployment ready  

---

## ⭐ 8. Repository Structure

/assets
/sounds
/layouts
/images
/css
/js
index.html
intro.html
script.js
style.css
README.md

yaml
Kodu kopyala

---

## ⭐ 9. Author

**Oktay Duman**  
GMT458 – Web GIS  
Hacettepe University  