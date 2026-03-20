const form= document.querySelector("form");
//const original_answer=["Sachin Tendulkar", "West Indies", "Sachin Tendulkar", "264", "Muttiah Muralitharan"] but backend me form submit hone ke baad ye values key and value pairs me ayengi so inko object me krne me jyada sahi hai( ho ese bhi jaiga but agar ek bhi question leave kiya then 0 ayega):
const original_answer={
    q1: "Sachin Tendulkar", 
    q2: "West Indies", 
    q3: "Sachin Tendulkar",
    q4:  "264", 
    q5: "Muttiah Muralitharan"
}
form.addEventListener("submit", (event)=>{
    event.preventDefault() 
    const data= new FormData(form) // form se mila data itterable hota hai thats why array me convert kiya chahe toh forof ya foreach bhi krskte
  
     const answer= Array.from(data.values())
     
    

    let result=0;
    for(let i=0;i<answer.length; i++){
        if(answer[i]===original_answer[i]){
            result++;
        }  
    }

    // let result= 0;
    // for(let [key,value] of data.entries()){
    //     if(value===original_answer[key])
    //         result++;
    //     }

    const out=document.getElementById("out")
    out.innerText=`${result} out of 5 is correct`


})


