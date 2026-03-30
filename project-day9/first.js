// Countdown-Timer:
//STEP-1; Set the target date.
//STEP-2; Calculate the time difference.
//STEP-3; Convert milliseconds to years, days, hours, minutes, and seconds.

// ----OLYMPIC COUNTDOWN TIMER---------21 Jul, 2028 (date of next olympic)
 const currentdate= new Date();
 const targetdate= new Date("2028-07-21T00:00:00"); /*STEP-1; Set the target date. */
 const difference= (targetdate-currentdate); /*Calculate the time difference. */
 console.log(`The difference is = ${difference}`); 

 console.log("This difference is now converted into Years, Days, Hours, Minutes, Seconds");

 //  converting into years
const years= Math.floor(difference/(1000*60*60*24*365));  // Total years left
console.log(`Numbers of years left = ${years}`);

//  converting into days
const days= Math.floor(difference/(1000*60*60*24));  // Total days left
console.log(`Numbers of days left = ${days}`);

//  converting into hours
const hours= Math.floor((difference/(1000*60*60))%24);   // Total hours left
console.log(`Numbers of hours left = ${hours}`);


//  converting into minutes
const minutes= Math.floor((difference/(1000*60))%60);   // Total minutes left
console.log(`Numbers of minutes left = ${minutes}`);


//  converting into seconds
const seconds= Math.floor((difference/(1000))%60);   // Total seconds left
console.log(`Numbers of seconds left = ${seconds}`);


// last printing line:
console.log(`Time Left: Years=${years}, Days= ${days}, Hours=${hours}, Minutes=${minutes}, Seconds=${seconds}`);









