const div=document.getElementById("quotes")
// Auto-Changing-Quotes
const lessons = [
    "There's no sbstitue of Hard Work",
    "No sweat, no sweet.",
    "Love is a verb, not a noun.",
    "Money talks, but wealth whispers.",
    "Success is built on habits, not miracles.",
    "Karma never misses an address.",
    "Grind in silence, shine loud.",
    "Better alone than in bad company.",
    "Rich isn't what you earn; it's what you keep.",
    "Winners fail until they win.",
    "Love deeply, but never lose yourself.",
    "Work until your idols become rivals.",
    "Respect is the foundation, trust is the pillar.",
    "Broke is temporary; poor is a mindset.",
    "If you're not embarrassed by your first steps, you started too late.",
    "Dharma protects those who protect it.",
    "Hustle beats luck when luck doesn't hustle.",
    "True love doesn't drain; it fuels.",
    "Make money your slave, not your master.",
    "Success is the best revenge.",
    "If it costs you your peace, it's too expensive.",
    "Discipline is the bridge between goals and success.",
    "Love is giving someone the power to destroy you, trusting they won't.",
    "Wealth isn't about having stuff; it's about freedom.",
    "Weakness invites destruction; strength commands respect.",
    "Stop waiting for motivation—build discipline.",
    "Real bonds don't break; they bend and bounce back.",
    "Love shouldn't hurt; it should heal.",
    "Your mind is your greatest enemy or ally.",
    "In war and life, strategy beats strength.",
    "If it's real, it will survive storms."
  ];
  

    // 2.  Tracks which quote  we're currently using (starts at 0 = first quote)
    let currentIndex = 0;
  
     // 3.  The function that actually changes the quotes
  function changeQuotes() {
    // A) Apply the current quote to the page 
    div.innerHTML = lessons[currentIndex];
    
    // B) Move to the next quote (with loop-back to start)
    currentIndex = (currentIndex + 1) % lessons.length;
    //    % = "remainder" operator → makes sure we loop back to 0 after last quote!
  }

   // 4.  Start the quote changer!
   changeQuotes(); // Run immediately (no waiting)
   setInterval(changeQuotes, 5000); // Repeat every 5000ms (5 seconds)
   


// =============================================
// 🌈 Automatic Background Color Changer
// Changes the webpage background every 3 seconds
// =============================================

const colors = [
    // 1. Royal Sunset
    "linear-gradient(to right, #6A0DAD, #C71585, #FF5252)",
    
    // 2. Mystic Galaxy
    "linear-gradient(to right, #6A0DAD, #9D50BB, #4776E6)",
    
    // 3. Neon Dreams
    "linear-gradient(to right, #6A0DAD, #FF00FF, #00FFFF)",
    
    // 4. Earthly Contrast
    "linear-gradient(to right, #6A0DAD, #FF7D00, #FFEB3B)",
    
    // 5. Deep Ocean
    "linear-gradient(to right, #6A0DAD, #2196F3, #4CAF50)",
    
    // 6. Fire & Ice
    "linear-gradient(to right, #6A0DAD, #FF5252, #00BCD4)"
];
  
// Tracks which color we're currently using (starts at 0 = first color)

let currntindex = 0;

// The function that actually changes the background color
function changeBackground() {
    // Apply current gradient with animation properties
    document.body.style.background = colors[currntindex];
    document.body.style.backgroundSize = "200% 200%"; // Makes gradient larger than container
    document.body.style.animation = "gradientPulse 8s ease infinite";
    
    // Move to next color (with loop-back to start)
    currntindex = (currntindex + 1) % colors.length;
    //    % = "remainder" operator → makes sure we loop back to 0 after last color!
}

// Create the animation keyframes
const styleElement = document.createElement('style');
styleElement.innerHTML = `
    @keyframes gradientPulse {
        0% { background-position: left; }
        50% { background-position: right; }
        100% { background-position: left; }
    }
`;
document.head.appendChild(styleElement);

// Start the color changer
changeBackground(); // Run immediately
setInterval(changeBackground, 5000); // Change every 5 seconds

// ___________________________________________________________________________________________________________
                                  //    EXPLANATION OF THIS CODE
// ___________________________________________________________________________________________________________

// # **Ultra-Detailed Code Explanation**

// Let me break this down **completely from scratch** so you understand every single character and concept.

// ## **1. The `colors` Array (Gradient Definitions)**

// ```javascript
// const colors = [
//     "linear-gradient(to right, #6A0DAD, #C71585, #FF5252)",
//     "linear-gradient(to right, #6A0DAD, #9D50BB, #4776E6)",
//     // ... more gradients
// ];
// ```

// ### **What is this?**
// - An **array** (list) of gradient color strings.
// - Each string is a **CSS gradient** definition.

// ### **Key Concepts:**
// 1. **`const`**  
//    - Means the variable (`colors`) **cannot be reassigned** later.  
//    - The array itself can still be modified (unless frozen with `Object.freeze`).

// 2. **`[ ... ]` (Square Brackets)**  
//    - Defines an **array** (ordered list of items).  
//    - Example: `["apple", "banana"]` is an array of 2 strings.

// 3. **`"linear-gradient(...)"` (String)**  
//    - A **CSS gradient syntax** stored as a string.  
//    - Uses **double quotes (`"`)** to wrap the value (could also use single quotes `'` or backticks `` ` ``).  

// 4. **`to right`**  
//    - Direction of gradient (left → right in this case).  
//    - Alternatives: `to bottom`, `to top right`, etc.

// 5. **`#6A0DAD` (Hex Color Codes)**  
//    - Represents colors in **hexadecimal format**.  
//    - Example: `#RRGGBB` (Red, Green, Blue values).

// ---

// ## **2. `currentIndex` Variable**
// ```javascript
// let currentIndex = 0;
// ```
// ### **What is this?**
// - A **counter** that keeps track of which gradient is currently applied.

// ### **Key Concepts:**
// 1. **`let`**  
//    - Declares a **mutable variable** (can be changed later).  
//    - Alternative: `const` (if the variable shouldn’t change).

// 2. **`= 0`**  
//    - Initializes it to `0` (first item in the array).  
//    - Arrays in JavaScript are **zero-indexed** (start counting from `0`).

// ---

// ## **3. `changeBackground()` Function**
// ```javascript
// function changeBackground() {
//     document.body.style.background = colors[currentIndex];
//     document.body.style.backgroundSize = "200% 200%";
//     document.body.style.animation = "gradientPulse 8s ease infinite";
//     currentIndex = (currentIndex + 1) % colors.length;
// }
// ```
// ### **What does this do?**
// - **Updates the webpage background** with the next gradient in the list.

// ### **Line-by-Line Breakdown:**

// #### **1. `document.body.style.background = colors[currentIndex];`**
//    - **`document.body`** → Refers to the `<body>` tag of the webpage.
//    - **`.style.background`** → Changes the **CSS background** property.
//    - **`colors[currentIndex]`** → Gets the gradient string from the array.

// #### **2. `document.body.style.backgroundSize = "200% 200%";`**
//    - **`backgroundSize: "200% 200%"`**  
//      - Makes the gradient **twice as big** as the screen.  
//      - **Why?** So we can **slide it around** for animation.

// #### **3. `document.body.style.animation = "gradientPulse 8s ease infinite";`**
//    - **`animation`** → Applies a CSS animation.  
//    - **`gradientPulse`** → Name of the animation (defined later).  
//    - **`8s`** → Animation duration (8 seconds).  
//    - **`ease`** → Smooth speed curve (starts/ends slowly).  
//    - **`infinite`** → Loops forever.

// #### **4. `currentIndex = (currentIndex + 1) % colors.length;`**
//    - **`currentIndex + 1`** → Moves to the next gradient.  
//    - **`% colors.length`** → **Loops back to `0`** after the last gradient.  
//      - Example: If `colors.length = 6`, then `(5 + 1) % 6 = 0` (resets to start).  

// ---

// ## **4. Animation Keyframes (`@keyframes`)**
// ```javascript
// const styleElement = document.createElement('style');
// styleElement.innerHTML = `
//     @keyframes gradientPulse {
//         0% { background-position: left; }
//         50% { background-position: right; }
//         100% { background-position: left; }
//     }
// `;
// document.head.appendChild(styleElement);
// ```
// ### **What does this do?**
// - **Creates a CSS animation** that slides the gradient left → right → left.

// ### **Line-by-Line Breakdown:**

// #### **1. `const styleElement = document.createElement('style');`**
//    - Creates a new `<style>` HTML element (where we’ll put CSS).

// #### **2. `styleElement.innerHTML = `...`;`**
//    - **`innerHTML`** → Sets the content inside the `<style>` tag.  
//    - **Backticks (`` ` ``)** → Used for **multi-line strings** (instead of `"` or `'`).

// #### **3. `@keyframes gradientPulse { ... }`**
//    - Defines an animation called `gradientPulse`.  
//    - **`0%`** → Start position (gradient shifted **left**).  
//    - **`50%`** → Midway (gradient shifted **right**).  
//    - **`100%`** → End (back to **left**, creating a loop).

// #### **4. `document.head.appendChild(styleElement);`**
//    - Adds the `<style>` tag to the `<head>` of the webpage so the animation works.

// ---

// ## **5. Starting the Animation**
// ```javascript
// changeBackground(); // Run immediately
// setInterval(changeBackground, 5000); // Change every 5 seconds
// ```
// ### **What does this do?**
// - **Applies the first gradient instantly**.
// - **Changes gradients every 5 seconds** (5000 milliseconds).

// ### **Key Concepts:**
// 1. **`changeBackground()`**  
//    - Calls the function **once immediately** (so the first gradient appears instantly).

// 2. **`setInterval(func, delay)`**  
//    - Runs a function (`changeBackground`) **repeatedly** every `delay` milliseconds.  
//    - Example: `setInterval(changeBackground, 5000)` → Runs every **5 seconds**.

// ---

// ## **Final Summary of How It Works**
// 1. **Starts with `currentIndex = 0`** (first gradient).
// 2. **Applies the gradient** and sets up animation.
// 3. **Every 5 seconds**, `currentIndex` increments (looping back after the last gradient).
// 4. **The `@keyframes` animation** makes the gradient slide smoothly left → right → left.

// ---

// ## **Without Animation?**
// - The gradient would **switch abruptly** every 5 seconds (no sliding effect).  
// - The background would feel **static and less dynamic**.

// ---

// ## **Extra Pro Tip**
// To make **color transitions smoother** (instead of snapping), add:
// ```javascript
// document.body.style.transition = "background 1s ease";
// ```
// This makes the **gradient change** fade smoothly over **1 second**! 🚀

// ---

// Now you understand **every single part** of this code in extreme detail! 😊














