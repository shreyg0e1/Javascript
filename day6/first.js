// // this will show error: it is declared as a const
// const num=10;
// num=2;
// console.log(num); 

// // this will not show error: because we are not changing the address
// const obj={
//     id:10,
//     name:"shrey"
// }

// obj.id=20;
// console.log(obj);


// // this will give error: here its trying to change the address of obj1 but obj1 is const
// const obj1={
//     id:10,
//     name:"sh"

// }

// let obj2={
//     id:30,
//     name:"hello"
// }

// obj1=obj2;

// console.log(obj1);


// STRINGS IN JS: 3 ways to make a string
// 1st way: using ""
let str1="happy holi";

// 2nd way: using ''
let str2='radhe radhe'

// 3rd way: using ` ` : this is mordern way and used most
let str3=`jai shree krishna`

console.log(str1 , str2, str3);

// -------------------------------------
// USE of `` (3rd way)
let price=800;
console.log(`the price of tomatos is ${price}`);


// Concatenation
let st1="hello bhai";
let st2=" kese ho aap?"
console.log(st1+st2);


// Using .length : length humesha 1 se shuru hogi
console.log(st2.length);

// Q. Print "hello bhai in double quotations"
console.log('"hello bahi in double quatations"');
console.log(`"hello bahi in double quatations"`);


// To print some part of string in new line Use : \n
let s1="My name is Shrey Goel \n and i am a very good boy";
console.log(s1);
// To print /n as a string or to print any special character taht already has a meaning use : \ (escape character), it escaspes itself and khud na print hoke just next vala character as it is print krdeta hai
let s2="My name is Shrey Goel \\n and i am a very good boy";
console.log(s2);


// if i need to access the particular character from string then : 2 ways => 1) []  2) charAt[]
let s="shrey"
//     01234
//   -5-4-3-2-1
console.log(s[0]); //s
console.log(s[2]); //r
console.log(s[-2]); // will give undefined 
console.log(s.charAt(3)); //e
console.log(s.charAt(-3)); // will not put any thing it will make a line blank completely
console.log(s.charAt(3)); //e


// // Changing Cases 

// // to lowercase() : always gives a new string do not make the changes in original string
// let sp="LOWERCASE me hoga ye text"
// console.log(sp.toLowerCase());

// // to uppercase(): always gives a new string do not make the changes in original string
// let sp2="uppercase me hoga ye text" 
// let sp3=sp2.toUpperCase(); /*proof that it always gives a new string */
// console.log(sp3);



// // Searching in strings:-
// // 1) indexOf(substring) : Returns the first occurenece of substring ; -1  if not found
// let string="Jai shree Krishna"
// console.log(string.indexOf("shree"));
// console.log(string.indexOf("Shree"));

// // 2) lastindexOf(substring) : Returns the last occurenece of substring; -1  if not found
// let string1="Jai shree Krishna shree"
// console.log(string1.lastIndexOf("shree"));
// console.log(string1.lastIndexOf("Shree"));


// // 3) includes(substring): checks if the substring exists.
// let string2="Jai shree krishna"
// console.log(string2.includes("shree"));
// console.log(string2.includes("Shree"));




// //  Extracting Substrings:
// //  1) slice(start, end): Extracts part of a string; end index value not included; also include -ve index
//         //   01234 (+ve index)
// let estring="Radhe"
// //          -5-4-3-2-1  (-ve index)

// console.log(estring.slice(1,3));
// console.log(estring.slice(-4,4));
// console.log(estring.slice(4,-4)); /*leaves a gap space khali chordeta hai output me */

// //  2) substring(start, end): Similar to slice but doesn't accept negative indexes.

// console.log(estring.substring(1,3));
// console.log(estring.substring(-4,3)); /*takin -ve index as 0 */


// //  3) substr(start, length): Extracts a substring of a specified length.
// let str = "Hello, World!";

// console.log(str.substr(5, 8)); /* 5th index se start hoga i.e = , and 8 iski length hogi i.e= , World!  */




// //   Replacing Content:
// //  1) replace(oldSubstring, newSubstring): Replaces the first match.
// let rstring="tu paisa paisa krti hai tu paisa pe kyu maarti hai"
// console.log(rstring.replace("paisa","sex"));


// //  2) replaceAll(oldSubstring, newSubstring): Replaces all matches 
// console.log(rstring.replaceAll("paisa","sex"));


// //   Splitting Strings:
// //  1) split(delimiter): Splits a string into an array based on a delimiter.
// let splitd="monkey!donkey!funkey!chunkey"
// console.log(splitd.split("!")); /* here, ! is a delimeter */


// //   Trimming:
// //  1) trim(): Removes whitespace from both ends.
// let trimstring=" starting me space hai and ending me bhi hai "
// console.log(trimstring);
// console.log(trimstring.trim());

// //  2) trimStart() / trimEnd(): Removes whitespace from the start or end.
// console.log(trimstring.trimStart());
// console.log(trimstring.trimEnd());



// // New way of creating a string using keyword: new ; it stores string in heap memory and has typeof as: object.
// let lateststring= new String(" hello bhai");
// console.log(lateststring);
// console.log(typeof lateststring);