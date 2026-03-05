// // how to create a number
// let num1=231;
// let num2= new Number(231);
// let num3= new Number(231);
// console.log(num1==num2); /*true : because type conversion of object and number , i.e 231==231*/
// console.log(num2==num3); /*false : because both are of same type so no convwesion directly compare thier memmory addres location*/


// // tofixed : jitni value daloge utni decimal k baad ayegi
// let num=231.68;
// console.log(num.toFixed(1));

// // toprecision: jitnivalue likho ge total number of digits utni hi hongi
// console.log(num.toPrecision(4));

// // toexponential: jobhi value doge toh decimal k baad utni hi digits ayengi bs and fir exponential ayega 
// console.log(num.toExponential(2));

// // tostring: string me krdiya isko
// console.log(num.toString());
// console.log(typeof num.toString());

// // valueof: jobhi value hogi iski vo laake dedega
// console.log(num.valueOf());


// MATHS:
console.log(Math.E)
console.log(Math.LN10)
console.log(Math.PI)
console.log(Math.LOG10E)

// ----------------------------------------------------

// How to generate the random number : use => random()--> 
console.log(Math.random()); /* gives valuse (0<=value<1) */

// floor: piche vali value hidega 
let number=23.9;
console.log(Math.floor(number));

// ceil: upper vali aage vali value hi dega
console.log(Math.ceil(number));

/* gives valuse (0-9)  */
console.log(Math.floor(Math.random() * 10));

/* gives valuse (1-10)  */
console.log(Math.floor(Math.random() * 10)+1);

/* gives valuse (11-20)  */
console.log(Math.floor(Math.random() * 10)+11);

/* gives valuse (30-40)  */
console.log(Math.floor(Math.random()*11)+30);

/* gives valuse (1-6)  */
console.log(Math.floor(Math.random()*6)+1);