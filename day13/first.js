// Conditional-Statement:-
// if-else:
let age=21;
if(age>=18)
    {
        console.log("eligible for vote");

}

else{
    console.log("not eligible");
}


// if else-if else
let umar=9;

if(umar<18)
{
    console.log("bacha");
}

else if(umar>35)
{
    console.log("mature");
}

else{
    console.log("jawan");
}


// Switch (===) eese check krta h 
// lets take an example of week days: 
// Sun , Mon , Tue , Wed , Thu , Fri , Sat
//  0  ,  1  ,  2  ,  3  ,  4  ,  5  ,  6

switch(new Date().getDay()) // Aj thursday hai so ye statement = switch(4)
{
            case 0:
            console.log("Sun");
            break;

            case 1:
            console.log("Mon");
            break;

            case 2:
            console.log("Tue");
            break;

            case 3:
             console.log("Wed");
             break;

            case 4:
            console.log("Thu");
            break;

            case 5:
            console.log("Fri");
            break;

            case 6:
            console.log("Sat");
            break;

}

// Default:
let month=18; //since 18 is not a valid input for month
switch(month)
{
            case 0:
            console.log("Jan");
            break;

            case 1:
            console.log("Feb");
            break;

            case 2:
            console.log("Mar");
            break;

            case 3:
             console.log("Apr");
             break;

            case 4:
            console.log("May");
            break;

            case 5:
            console.log("Jun");
            break;

            case 6:
            console.log("Jul");
            break;

            case 7:
            console.log("Aug");
            break;

            case 8:
             console.log("Sep");
             break;

            case 9:
            console.log("Oct");
            break;

            case 10:
            console.log("Nov");
            break;

            case 11:
            console.log("Dec");
            break;

            default:
                console.log("not a valid input ")
}


// For-loop
// for(initialisation,condition,increment)
// if i need to print Radhe Radhe 20 times then:
for(let i=0; i<20;i++){  //yha pe let i=0  ko hum const i =0 nahi krskte , error ayega because we are keep changing the value of i
    console.log("Radhe Radhe");
}


// sum of first n number ( n=10);
let sum=0;
for(let i=0; i<11;i++){
    sum=sum+i; //isko sum+=i bhi likh skte tha
    // console.log(sum);  // this will print sum each time

}
console.log(sum);


// print 
/*
12345 
12345 
12345 
12345 
12345 
12345 */

for(let j=1; j<7; j++){
    let row=" ";
for(let i=1; i<6; i++){
    row+=i;
    
}
console.log(row);
}

// explanation
// 1. Outer Loop: for (let j = 1; j < 7; j++) {
//     Purpose: This loop runs 6 times (from j = 1 to j = 6) to create 6 rows of the pattern.
    
//     Why it’s needed: Each iteration of this loop corresponds to one row of the output.
    
//     2. Initialize row Variable: let row = " ";
//     Purpose: Initializes an empty string row with a single space (" "). This string will store the numbers for the current row.
    
//     Why it’s needed: To build the sequence of numbers (12345) for each row.
    
//     3. Inner Loop: for (let i = 1; i < 6; i++) {
//     Purpose: This loop runs 5 times (from i = 1 to i = 5) to generate the numbers 1 to 5 for the current row.
    
//     Why it’s needed: To append each number (1, 2, 3, 4, 5) to the row string.
    
//     4. Append Numbers to row: row += i;
//     Purpose: Appends the current value of i (from 1 to 5) to the row string.
    
//     Why it’s needed: To construct the sequence 12345 for the current row.
    
//     5. Print the Row: console.log(row);
//     Purpose: Prints the row string (which now contains 12345) to the console.
    
//     Why it’s needed: To display the current row of the pattern.
    
//     6. Repeat for All Rows
//     The outer loop (j) ensures that the inner loop (i) runs 6 times, creating 6 rows of 12345.





// scope: Global scope, Local scope(functional scope), Block scope
// global scope: can be use anywhere in the program:
let a=10;
var b=20;
const c=30;

function fun(){
    console.log(a);
    console.log(b);
    console.log(c);
}

fun();



// local scope (functional scope)
function func(){
    let d=10;
    var e=20;
    const f=30;

    console.log(d);
    console.log(e);
    console.log(f);
}

func();
console.log(a); //since global scope can be access anywhere
// console.log(d); // local of function scope can't, it can only be access inside { }



// Block scope : koi bhi chiz jo { inke andar aati hai vo block scope hai}; except objects and function because object me ye brackets/braces khelaate hai and function me ye functional/local scope
if(true){
    let g=10;
    var h=20;
    const i=30;

    console.log(g);
    console.log(h);
    console.log(i);
}

// console.log(g);
console.log(h); //since var is printing outside the block {} thats why we dont use it often because it is not following block scope
// console.log(i);


// We can declaare the same variable in different scope
let variable=20;

if(true){
    let variable=30;
    console.log(variable)
}


// I can access the function before declaring like i can call it before declaration:

greet();

function greet(){
    console.log("goodmorning");
    console.log("goodafternoon");
    console.log("goodnight");
}

// I cannot access the function before declaration if it is stored in variable because at the end variable me store hai & usko me phele access nahi krskta hu until hoisting

variabl1()  // gives error

let variabl1 =function (){
    console.log("goodmorning");
    console.log("goodafternoon");
    console.log("goodnight");
}




// =================================================

// sum of first 10 numbers
// 1+2+3+4+5+6+7+8+9+10=55

let summ=0;
let s= "";
for(let n=1; n<11; n++){

    if(n===1){

        s=s+n;
    }
    else{
    s=s+"+"+n//1+2
    }
    summ=summ+n; //3
}
console.log(`${s}=${summ}`);
