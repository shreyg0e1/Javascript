// I have to create this via javascript: 
// <div class="circle">hi</div>

document.body.addEventListener("click", (event)=>{
    const circle= document.createElement('div');
    circle.className="circle"
    circle.innerText="HI"

   const x= event.clientX;
   const y= event.clientY;

   circle.style.left=`${x-40}px`
   circle.style.top=`${y-40}px`



    // different colors:
    const colors=["red", "orange", "blue", "teal", "pink", "purple", "yellow", "green", "aqua", "brown"];
    circle.style.background=colors[Math.floor(Math.random()*colors.length)]

    // different messages:
    const greetings = ["Namaste", "Hello", "Hola", "Bonjour", "Konnichiwa", "Ciao", "Guten Tag", "Salam", "Privet", "Ni hao"];
    circle.innerText=greetings[Math.floor(Math.random()*greetings.length)]

   document.body.appendChild(circle) // but ese toh ye add hote rhenge jbjb click krenge 

   setTimeout(()=> {
    circle.remove();
   }, 5000 )
})
