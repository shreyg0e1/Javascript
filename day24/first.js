const form= document.querySelector("form")

//  Event type 
// 1: input: input daalte vakt sath sath show krta jaiga kya kya daal rhe hai


// form.addEventListener("input", (event)=>{
//     console.log(event.target.value);
 
//  })


// 2: change: (1. jabhi koi change hoga && 2. jabhi bahar click kroge uske tbhi show krega)

// form.addEventListener("change", (event)=>{
//     console.log(event.target.value);
 
//  })


// 3: focus, focusin


// form.addEventListener("focusin", (event)=>{
//     console.log(event.target.value);
 
//  })


//  4: blur or focusout

// form.addEventListener("focusout", (event)=>{
//     console.log(event.target.value);
 
//  })


// 5: click

// form.addEventListener("click", (event)=>{
//     // console.log(event.target.value);
//     console.log("single click");
 
//  })

//  6: dbclick ---> Explain later 

// form.addEventListener("dblclick", (event)=>{
//     // console.log(event.target.value);
//     console.log("double click");
//  })


// 7: submit

// form.addEventListener("submit", (event)=>{
//     // console.log(event.target.value);
//     console.log("form submitted");
 
//  })


// 8: reset

// form.addEventListener("reset", (event)=>{
//     // console.log(event.target.value);
//     console.log("form reset");
 
//  })


// 9: FormData 



// form.addEventListener("submit", (event)=>{
//     event.preventDefault() // page refresh nahi hoga isko use krne se
//     const first= document.getElementById("first")
//     console.log(first.value);
//     const second= document.getElementById("second")
//     console.log(second.value);
//     const third= document.getElementById("third")
//     console.log(third.value);

//     const result= document.getElementById("result")
//     result.innerText=`${first.value} ${second.value} is a good boy, whose age is = ${third.value}`



// -----------------------Problem-Statement----------------------------------------------------------
// agar bhut saare input field honge toh hum kya utni baar acces krenge kya likh likh ke har ek pe ?
// --------------------------------------------------------------------------------------------------


 
//  })

 // -------------------------------------------------------------


//  form.addEventListener("submit", (event)=>{
//     event.preventDefault() // page refresh nahi hoga isko use krne se
     
//     const data= new FormData(form)
// // (if ill print console.log(data) it will give an itterator so muje usko itterate krna aata hai by foreach ya forof ya fir uskoo array me convert krdiya )
//     console.log(Array.from(data.keys()))
//     console.log(Array.from(data.values()))
 
//  })


// // using for-of loop to ittererate
// form.addEventListener("submit", (event)=>{
//     event.preventDefault() // page refresh nahi hoga isko use krne se
     
//     const data= new FormData(form)
//     for(let key of data.keys()){
//         console.log(key)
//     }
 
//  })

 // destructuring 
 form.addEventListener("submit", (event)=>{
    event.preventDefault() // page refresh nahi hoga isko use krne se
     
    const data= new FormData(form)
    for(let [key, values] of data.entries()){  //data.entries giving  2d array so destructing like[keys,values]
        console.log(key, values)
    }
 
 })