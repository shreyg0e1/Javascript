// BMI calculator: Rules
//____________________________________________________________________________________
//                        BMI = weight (kg) / [height (m)]²
//____________________________________________________________________________________
// Category	    |    BMI	      |        ID (Male)	 |             ID (Female)
//______________|_________________|______________________|____________________________
// Underweight	|   < 18.5	      |  underweight-male	 |  underweight-female
// Normal	    | 18.5 – 21.9	  |   normal-male	     |    normal-female
// Fit	        | 22.0 – 24.9     |     fit-male	     |           fit-female
// Overweight	| 25.0 – 29.9	  | overweight-male	     |    overweight-female
// Obese	    |   ≥ 30.0	      |    obese-male	     |      obese-female
//____________________________________________________________________________________


// basic working only for kg and m
//display
let display= document.getElementById("display")


// calculate button
let cal= document.getElementById("calculate");
cal.addEventListener("click", ()=>{
    // lambai
let height= document.getElementById("lambai");

// wajan
let weight= document.getElementById("wajan");
    let h= Number(height.value) ; 
    let w=Number(weight.value) ; 
    let bmi= w/(h*h);
    display.innerText= bmi.toFixed(2);

//  Reset all borders - ADD THIS SECTION
    const categories = ["underweight", "normal", "fit", "overweight", "obese"];
    categories.forEach(category => {
        document.getElementById(category).style.border = "none";
    });

    let result=document.querySelectorAll("#result")
    result.forEach((res)=>{
        //underweight
    if(  bmi <18.5 ){
        document.getElementById("underweight").style.border= " 12px solid gold";
         document.getElementById("big_emoticon").src="./underweight.png"
        
        return;

    }
    
        //normal
     if( bmi > 18.5 && bmi <21.9 ){
        document.getElementById("normal").style.border= " 12px solid gold"
        document.getElementById("big_emoticon").src="./normal.png"
        return;
    }


        //fit
     if( bmi > 22 && bmi <24.9 ){
        document.getElementById("fit").style.border= " 12px solid gold"
        document.getElementById("big_emoticon").src="./fit.png"
        
        return;
    }

        //overweight
     if( bmi > 25 && bmi <29.9 ){
        document.getElementById("overweight").style.border= " 12px solid gold"
        document.getElementById("big_emoticon").src="./overweight.png"
        return;
    }    

        //obese
     if( bmi > 30 ){
            document.getElementById("obese").style.border= " 12px solid gold"
            document.getElementById("big_emoticon").src="./obese.png"
            return;
    }

    }) 

})






