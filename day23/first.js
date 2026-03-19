//click on the color button to make it as background color

// ________________________1st way________________________________
// const button=document.querySelectorAll("button");
// button.forEach((btn)=>{
//     btn.addEventListener("click", ()=>{
//         const color = btn.id;
//         if(color==="red"){
//             document.body.style.background="red";
//         }

//         else if(color==="blue"){
//             document.body.style.background="blue";
//         }

//         else if(color==="orange"){
//             document.body.style.background="orange";
//         }

//         else if(color==="green"){
//             document.body.style.background="green";
//         }

//         else if(color==="purple"){
//             document.body.style.background="purple";
//         }
//     })

// })



// ________________________2nd way________________________________


const button=document.querySelectorAll("button");
button.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        document.body.style.background=btn.id
        
    })

})

// =======Now there's a issue of optimisation after doing it in a 2nd way, because if there's 1000 buttons addeventlistener will take memory each time resultingslowing  down the code============================================

// ========================= Event-Delegation ===========================================
// Event-Delegation: Use bubbling to handle events on dynamic elements efficiently.

// ________________________3rd way(after learning bubbling and capture________________________________

// const root=document.getElementById("root");
//     root.addEventListener("click", (event)=>{
        
       
//         document.body.style.background= event.target.id
        
        
//     })



// ________________________4th way(after making it more complex by adding heading________________________________
// clicking on heading the color is removing from background so to handle that put if considition
// const root=document.getElementById("root");
//     root.addEventListener("click", (event)=>{
//         if(event.target.tagName==="BUTTON"){
//         document.body.style.background= event.target.id
//         }
        
//     })

//     // Dynamically create a new button after 3 seconds
//     setTimeout(() => {
//         const newButton = document.createElement("button");
//         newButton.id = "yellow";
//         newButton.style.backgroundColor = "yellow";
//         root.appendChild(newButton);
//       }, 3000);

