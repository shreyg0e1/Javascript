PROBLEM STATEMENT:
lets say we have 20 questions set and we have to show random 5 questions on quiz everytime , make sure questions should not repeat 

------------------------------------------------------------------

How to do that: Approch
-----STORE DATA------
1: store the questions question
2: store the all the options
3: store the correct answer

----------------------------How to store--------------------------
this can be stored as an object:

obj1{
    question: "Who has the most centuries in international cricket?",

    options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"] ,

    answer: "Sachin Tendulkar"
}


obj2{

}

obj3{

}
............. obj20 (because total 20 quesation set)

then put all these obj1---to obj20 in an array so that we can find randomly 5 objects from that array

<!-- Selecting 5 random objects from array -->
const question_bank=[obj1,obj2obj3----obj20]



 =================================================================
 🎯 PROBLEM STATEMENT (RECAP)
From a set of 20 quiz questions, display 5 random (non-repeating) questions each time the quiz loads.

🧱 STRUCTURE & APPROACH (NO CODE, JUST LOGIC)
🟩 STEP 1: STORING THE DATA
🎯 Goal: Store questions, options, and correct answers
Think of each question as an "object" — it should have:

The question text

4 options

The correct answer

✅ Example Structure:
You will have 20 such question-objects

Store them inside one array called something like question_bank

✅ Why this structure?
Easy to loop

Easy to shuffle

Easy to inject into HTML

Each question has all its info packed together

🟩 STEP 2: PICKING RANDOM QUESTIONS
🎯 Goal: From 20, select 5 random non-repeating questions
Copy the original array (to avoid messing it up)

Shuffle the copy (randomize the order)

Take first 5 elements (these will be unique due to shuffle)

✅ Why shuffle?
Because we want randomness

If we directly pick random indexes, there’s a chance of repetition

🟩 STEP 3: DISPLAYING IN HTML
🎯 Goal: Show the 5 selected questions dynamically
Loop through your 5-question array

For each question:

Create a question text (<p>)

Loop through the options array and create radio buttons

Group them with same name attribute like q1, q2...

✅ Why dynamically?
You don’t know which 5 questions will appear

So HTML cannot be hardcoded — it has to be generated based on what questions are picked

🟩 STEP 4: COLLECTING USER ANSWERS
🎯 Goal: Find which answers the user selected
When user clicks Submit:

Get all selected values from the radio buttons

Compare them with correct answers (stored earlier)

🟩 STEP 5: CHECKING SCORE
🎯 Goal: Compare submitted answers vs actual answers
Loop through submitted answers

Check: Is user's answer === actual answer?

For every correct match, increase score

🟩 STEP 6: SHOWING FINAL RESULT
🎯 Goal: Tell user how many were correct
Show final score using innerText or alert

For example: “You got 4 out of 5 correct!”