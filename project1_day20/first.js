// Accessing this div : <div id="second"></div>
const div=document.getElementById("second")

// Accessing this div : <div id="hmdu" class="info"></div>
const div1=document.getElementById("hmdu")
div1.innerHTML="How many days until"

// Accessing this div :<div id="summer" class="info"></div>
const div2=document.getElementById("summer")
div2.innerHTML="Summer Olympics 2028"

// Accessing this div :<div id="ddm" class="venue">
const div3=document.getElementById("ddm")
div3.innerHTML="Friday 21 july 2028 00:00"

// Accessing this div :<div id="location" class="venue"></div>
const div4=document.getElementById("location")
div4.innerHTML="Los Angeles, USA"

// Accessing this div : <div id="fourth" class="content">
const divfourth=document.getElementById("fourth")

// Accessing this div : <div id="nod" class="timer"></div>
const div5=document.getElementById("nod") 

// making function for days countdown
let day_count=function(){
    const currentdate= new Date();
    const targetdate= new Date("2028-07-21T00:00:00");
    const difference= (targetdate-currentdate);
    div5.innerHTML=Math.floor(difference/(1000*60*60*24)); 
}
setInterval(day_count,1000);


// Accessing this div : <div id="days" class="timer"></div>
const div6 =document.getElementById("days")
div6.innerHTML="days"

// Accessing this div : <div id="time" class="timer"></div>
const divtime=document.getElementById("time")

// Accessing this div : <div id="hr" class="hms"></div>
const div7=document.getElementById("hr") 

// making function for hr countdown
let hr_count=function(){
    const currentdate= new Date();
    const targetdate= new Date("2028-07-21T00:00:00");
    const difference= (targetdate-currentdate);
    div7.innerHTML=Math.floor((difference/(1000*60*60))%24);
}
setInterval(hr_count,1000);


// Accessing this div : <div id="min" class="hms"></div>
const div8=document.getElementById("min") 

// making function for min countdown
let min_count=function(){
    const currentdate= new Date();
    const targetdate= new Date("2028-07-21T00:00:00");
    const difference= (targetdate-currentdate);
    div8.innerHTML=Math.floor((difference/(1000*60))%60);
}
setInterval(min_count,1000);

// Accessing this div : <div id="sec" class="hms"></div>
const div9=document.getElementById("sec") 

// making function for sec countdown
let sec_count=function(){
    const currentdate= new Date();
    const targetdate= new Date("2028-07-21T00:00:00");
    const difference= (targetdate-currentdate);
    div9.innerHTML=Math.floor((difference/(1000))%60);
}
setInterval(sec_count,1000);

//  Accessing this div : <div id="units" class="timer"></div>
const divunits=document.getElementById("units")

// Accessing this div : <div id="hours" class="text"></div>
const div10=document.getElementById("hours") 
div10.innerHTML="hours"

// Accessing this div : <div id="minutes" class="text"></div>
const div11=document.getElementById("minutes") 
div11.innerHTML="minutes"

// Accessing this div : <div id="seconds" class="text"></div>
const div12=document.getElementById("seconds") 
div12.innerHTML="seconds"



// *********************************************

// style

// adding style to div: <div id="second"></div>
div.style.display="flex"
div.style.flexDirection="column"
div.style.justifyContent="space-between"
div.style.height="100vh"

// adding style to div: <div id="hmdu" class="info"></div>
div1.style.marginLeft="50px"


//adding style to div: <div id="summer" class="info"></div>
div2.style.fontSize="60px"
div2.style.fontWeight="bold"
div2.style.marginLeft="50px"

//adding style to div :<div id="ddm" class="venue">
const styl=document.getElementsByClassName("venue")
for(i=0;i<styl.length;i++){
    console.log(styl[i]);
    styl[i].style.color="bisque";
    styl[i].style.fontSize="10px";
    styl[i].style.marginLeft="50px"
}


//adding style to  div : <div id="fourth" class="content">
divfourth.style.width="30vw"
// divfourth.style.backgroundColor="orange"

//adding style to  div : <div id="nod" class="timer"></div>
div5.style.fontSize="150px"
div5.style.fontWeight="bold"
div5.style.marginLeft="100px"


// adding style to  div : <div id="days" class="timer"></div>
div6.style.display="flex"
div6.style.justifyContent="center"
div6.style.fontSize="28px"
// div6.style.fontWeight="bold"


// adding style to  div : <div id="time" class="timer"></div>
divtime.style.display="flex"
divtime.style.justifyContent="space-evenly"
divtime.style.fontSize="50px"
divtime.style.fontWeight="bold"

// adding style to  div : <div id="units" class="timer"></div>
divunits.style.display="flex"
divunits.style.justifyContent="space-evenly"
divunits.style.fontSize="20px"
// divunits.style.backgroundColor="red"






// =============================================
// 🌈 Automatic Background Color Changer
// Changes the webpage background every 3 seconds
// =============================================

// 1. 🎨 List of beautiful color gradients to cycle through

const colors = [
    
    "linear-gradient(135deg, #FF0099, #FFEE00)",  //Pink Lemonade
    "linear-gradient(135deg, #ff4d4d, #f9cb28)",  // Tropical Sunset
   "linear-gradient(to right, #6A0DAD, #FF5252)", // Electric Neon
    "linear-gradient(135deg, #8A2BE2, #00FFFF)" , // Purple Cyberpunk
    "linear-gradient(135deg, #4776E6, #8E54E9)",  // Purple Rain
    "linear-gradient(135deg, #800020, #FF6B6B)",  // Maroon Sunset

];
  
  // 2. 📌 Tracks which color we're currently using (starts at 0 = first color)
  let currentIndex = 0;
  
  // 3. 🖌️ The function that actually changes the background color
  function changeBackground() {
    // A) Apply the current gradient to the page background
    document.body.style.background = colors[currentIndex];
    
    // B) Move to the next color (with loop-back to start)
    currentIndex = (currentIndex + 1) % colors.length;
    //    % = "remainder" operator → makes sure we loop back to 0 after last color!
  }
  
  // 4. 🚀 Start the color changer!
  changeBackground(); // Run immediately (no waiting)
  setInterval(changeBackground, 3000); // Repeat every 3000ms (3 seconds)
  
  // =============================================
  // 💡 TIPS FOR FUTURE USE:
  // 1. Add more colors to the array to extend the cycle
  // 2. Change 5000 to adjust speed (in milliseconds)
  // 3. Use radial-gradient() for circular color effects
  // =============================================