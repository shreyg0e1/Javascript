const question_bank = [
    {
        question: "Who has the most centuries in international cricket?",
        options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which country won the first ICC Cricket World Cup?",
        options: ["Australia", "England", "West Indies", "India"],
        answer: "West Indies"
    },
    {
        question: "Who is known as the 'God of Cricket'?",
        options: ["Virat Kohli", "Don Bradman", "MS Dhoni", "Sachin Tendulkar"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "What is the highest individual score in ODI cricket?",
        options: ["264", "200", "237", "275"],
        answer: "264"
    },
    {
        question: "Which bowler has taken the most wickets in Test cricket?",
        options: ["Muttiah Muralitharan", "Shane Warne", "James Anderson", "Anil Kumble"],
        answer: "Muttiah Muralitharan"
    },
    {
        question: "Who holds the record for the fastest century in ODI cricket?",
        options: ["AB de Villiers", "Corey Anderson", "Shahid Afridi", "Glenn Maxwell"],
        answer: "AB de Villiers"
    },
    {
        question: "Which team has won the most ICC Cricket World Cups?",
        options: ["India", "Australia", "West Indies", "England"],
        answer: "Australia"
    },
    {
        question: "Who scored the first double century in ODI cricket?",
        options: ["Rohit Sharma", "Martin Guptill", "Virender Sehwag", "Sachin Tendulkar"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "Which player has the highest batting average in Test cricket?",
        options: ["Steve Smith", "Don Bradman", "Virat Kohli", "Kane Williamson"],
        answer: "Don Bradman"
    },
    {
        question: "Who is the only bowler to take 10 wickets in a Test innings?",
        options: ["Anil Kumble", "Jim Laker", "Shane Warne", "Muttiah Muralitharan"],
        answer: "Jim Laker"
    },
    {
        question: "Which Indian captain won the inaugural T20 World Cup in 2007?",
        options: ["Sourav Ganguly", "MS Dhoni", "Rahul Dravid", "Virat Kohli"],
        answer: "MS Dhoni"
    },
    {
        question: "Who has hit the most sixes in international cricket?",
        options: ["Chris Gayle", "Shahid Afridi", "Rohit Sharma", "Brendon McCullum"],
        answer: "Chris Gayle"
    },
    {
        question: "What is the highest team total in ODI cricket?",
        options: ["481", "444", "498", "500"],
        answer: "500"
    },
    {
        question: "Who is the fastest to reach 10,000 runs in ODI cricket?",
        options: ["Virat Kohli", "Sachin Tendulkar", "Ricky Ponting", "Jacques Kallis"],
        answer: "Virat Kohli"
    },
    {
        question: "Which wicketkeeper has the most dismissals in Test cricket?",
        options: ["Mark Boucher", "MS Dhoni", "Adam Gilchrist", "Kumar Sangakkara"],
        answer: "Mark Boucher"
    },
    {
        question: "Who was the first player to score a century in IPL?",
        options: ["Brendon McCullum", "Chris Gayle", "Adam Gilchrist", "David Warner"],
        answer: "Brendon McCullum"
    },
    {
        question: "Which bowler has the best bowling figures in an ODI match (10-8-8-8)?",
        options: ["Glenn McGrath", "Chaminda Vaas", "Muttiah Muralitharan", "Rashid Khan"],
        answer: "Chaminda Vaas"
    },
    {
        question: "Who has the most runs in a single IPL season?",
        options: ["Virat Kohli", "David Warner", "Chris Gayle", "KL Rahul"],
        answer: "Virat Kohli"
    },
    {
        question: "Which team won the first-ever Test match?",
        options: ["England", "Australia", "South Africa", "West Indies"],
        answer: "Australia"
    },
    {
        question: "Who is the youngest player to score a Test century?",
        options: ["Sachin Tendulkar", "Mushtaq Mohammad", "Mohammad Ashraful", "Prithvi Shaw"],
        answer: "Mushtaq Mohammad"
    }
];

function RandomQuestion(){
//________1st way:____________________________________________________________________________________

//     // using set for unique objects(unique question evertime no repetiton)
//     const data= new Set() 
    
//     while(data.size !=5){
//    const index=( Math.floor(Math.random()*question_bank.length));
//    data.add(question_bank[index]);
//     }
 
//     // converting set into array
//     return [...data];

//______2nd way: Randomly sort krenge isko aaj hum loog________________________________________________________________________________
 
// question_bank.sort(()=>Math.random()-0.5)
// return question_bank.slice(0,5)

//________3rd way (best way possible from dsa)_______________________________________________________________________________________

const arr=[] 
let length=question_bank.length;

for (let i = 0; i <5; i++) {
    const index=Math.floor(Math.random()*length)
    arr.push(question_bank[index])

    //swap by destructuring
    [question_bank[index], question_bank[length-1]]=  [question_bank[length-1],question_bank[index]];
    length--
    
}
 
return arr;

}


// Select the form and insert all the element into it: 
// {
//     question: "Who scored the first double century in ODI cricket?",
//     options: ["Rohit Sharma", "Martin Guptill", "Virender Sehwag", "Sachin Tendulkar"],
//     answer: "Sachin Tendulkar"
// }


const form= document.querySelector("form");
const problem= RandomQuestion();
const original_answer={} // key : value

problem.forEach((obj, index)=>{
    const div_element= document.createElement("div");
    div_element.className="question";

    original_answer[`q${index+1}`]=obj["answer"] // logic= obj[key]=value
    // original_answer={
    //     q1: "Sachin Tendulkar", 
    //     q2: "West Indies", 
    //     q3: "Sachin Tendulkar",
    //     q4:  "264", 
    //     q5: "Muttiah Muralitharan"
    // }

    const para= document.createElement("p");
    para.innerText=`${index+1}. ${obj["question"]}`;
    div_element.appendChild(para);

    // creating 4 options
    // ["Rohit Sharma", "Martin Guptill", "Virender Sehwag", "Sachin Tendulkar"],

obj["options"].forEach((data)=>{
    const label=  document.createElement("label")
    const input=document.createElement("input");
    input.type="radio"
    input.name=`q${index+1}`
    input.value=data
    label.appendChild(input)
    label.appendChild(document.createTextNode(data));
    div_element.appendChild(label);
    div_element.appendChild(document.createElement("br"));
})

form.appendChild(div_element);

})

const button= document.createElement("button");
button.type="submit";
button.className="submit-btn";
button.innerText="Submit";
form.appendChild(button);


// check the submitted form

form.addEventListener("submit", (event)=>{
    event.preventDefault() 
    const data= new FormData(form)
     const answer= Array.from(data.values())



    let result= 0;
    for(let [key,value] of data.entries()){
        if(value===original_answer[key])
            result++;
        }

    const out=document.getElementById("out")
    out.innerText=`${result} out of 5 is correct`


})
