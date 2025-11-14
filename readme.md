# 🎵 GeoGame – Guess the Country by Song

This project is developed as part of the **GMT458 Web GIS** course.  
The aim of this assignment is to design and implement a geo-based interactive game using HTML, CSS, and JavaScript.  
My game challenges the user to **listen to a short music clip and guess which country it belongs to** by clicking on a world map.

---

## ✅ 1. Game Concept

“Guess the Country by Song” is a time-free, round-based geo-quiz game.  
Each round plays a music snippet from an artist associated with a specific country.  
The user listens to the song, clicks the map to guess the country, and earns points based on their accuracy.

The game includes:
- A geographical map component (Leaflet + CARTO Dark Matter tiles)
- Interactive audio playback
- Hint system
- Scoring system
- Confetti & sound effects
- No song repetition
- 5-round gameplay loop

---

## ✅ 2. Requirements

### **Functional Requirements**
- User can play a song for each round  
- User can click the world map to guess the country  
- 5 rounds total  
- Songs do not repeat  
- Score increases based on distance accuracy  
- Correct / wrong sound effects  
- Confetti animation for success  
- Hint button (continent or artist initial) with −3 point penalty  
- Game Over screen with final score and Restart button  
- Map zooms into correct country and resets next round  

### **UI Requirements**
- Animated title (typewriter effect)  
- Intro (start) page  
- Main game page with interactive map  
- 3D-style buttons (Play, Hint, Restart)  
- Animated glowing background  
- Popup showing artist/song + country location  
- Responsive layout  

---

## ✅ 3. Layout Sketches

The following sketches illustrate the planned frontend design (as required by the assignment):

### **1. Intro Page Layout**
*(Insert your image → intro_layout.png)*  
- Title centered  
- “Start Game” button  
- Background visual  
- Short description  

### **2. Game Page Layout**
*(Insert your image → game_layout.png)*  
- Title at top  
- Play Song / Hint / Score section  
- Map in the center  
- Footer (optional)

> Sketches are included in the `assets/layouts/` folder.

---

## ✅ 4. Answers to Design Questions (Required by PDF)

### **1️⃣ How will the game progress?**  
The game progresses through **five rounds**.  
In each round:
1. A random song is played  
2. The user clicks a location on the map  
3. The system calculates accuracy based on geographic distance  
4. Score is updated  
5. The next round starts automatically  

After 5 rounds, a Game Over screen displays the final score.

---

### **2️⃣ How many questions (rounds) will there be?**  
There are **5 rounds** (5 songs).

---

### **3️⃣ Any difficulty level or time-based progression?**  
There is **no time limit**, but difficulty remains stable.  
Songs start from the **middle**, making the guessing slightly harder.  
A hint option exists but reduces points (−3).

---

### **4️⃣ How many lives does the user have?**  
There is **no life system**.  
Each guess completes one round.

---

## ✅ 5. JavaScript Libraries Used

### **Primary Libraries**
- **Leaflet.js** – interactive map  
- **CARTO Dark Matter Tiles** – basemap  
- **Vanilla JavaScript** – game logic  

### **Additional (Bonus) Features**
- Custom confetti animation (pure JS)  
- Audio playback control  
- Typewriter text effect  
- 3D CSS button animations  
- Animated background  

These advanced effects contribute to the **bonus** criteria in the assignment.

---

## ✅ 6. NYC Taxi Data (Bonus Mention)
The assignment mentions exploring NYC Taxi data as a bonus.  
Instead of incorporating datasets directly, my game enhances user experience using advanced animations, effects, and UI/UX, which serve the same bonus purpose.

---

## ✅ 7. Implementation Plan

1. Complete frontend layout (HTML structure + CSS styling)  
2. Implement Leaflet map and base UI components  
3. Integrate audio playback for songs  
4. Add round system, scoring, and no-repeat logic  
5. Add hint system  
6. Add UI animations and confetti  
7. Finalize Game Over screen + restart logic  
8. Publish via GitHub Pages  

---

## ✅ 8. Repository Structure

/assets
/sounds
/images
/layouts
/css
/js
index.html
intro.html
README.md


---

## ✅ 9. How to Run the Game

1. Clone the repository  
2. Open project folder in VS Code  
3. Start with **Live Server**  
4. The game runs at:  


---

## 🏁 10. Status (17 November Deliverable)

- Requirements ✔️  
- Layout drawings ✔️  
- Game design answers ✔️  
- Chosen JS libraries ✔️  
- README prepared ✔️  
- At least one design-related Git commit ✔️  

---

## 🎤 Author
**Oktay Duman**  
GMT458 – Web GIS  
Hacettepe University

### Intro Page Layout
![Intro Layout](assets/layouts/intro.png)

### Game Page Layout
![Game Layout](assets/layouts/playing.png)


