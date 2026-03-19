const grandparent = document.getElementById("grandparent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

// event bubbling and capture

// addEventListener(event type, callback function, capture) 3 arguments hote h addEventListener ke
// by default capture: false   ---results-in--> Bubbling

child.addEventListener("click", (event)=>{
    // event.stopPropagation()
    event.stopImmediatePropagation()
    console.log("child clicked")
    // console.log(event.target)
}, false)

parent.addEventListener("click", (event)=>{
    // event.stopPropagation()
    // event.stopImmediatePropagation()
    console.log("parent clicked")
    // console.log(event.target) //jo click kiya hai
    // console.log(event.currentTarget)  // jiska listener chlra hoga
}, false)

grandparent.addEventListener("click", (event)=>{
    console.log("grandparent clicked")
    // console.log(event.target)
    //   console.log(event.currentTarget) 
}, false)








