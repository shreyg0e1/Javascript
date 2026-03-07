// // Fatae in javascript
// // how to create a date:
// const d= new Date()  /*year-month-date */
// console.log(d);
// console.log(typeof d);

// // to change it in a datestring:
// console.log(d.toDateString()); /*day  month  date  year*/

// // to change it in a string:
// console.log(d.toString());  /*day  month  date  year   TIME(IST)*/

// // Gives same as new keyword gives :
// console.log(d.toISOString()); /*year-month-date */

// // If i need only Date:
// console.log(d.getDate());

// // If i need only Day: 
// // Sun , Mon , Tue , Wed , Thu , Fri , Sat
// //  0  ,  1  ,  2  ,  3  ,  4  ,  5  ,  6

// console.log(d.getDay());

// // If i need only Month:
// // Jan , Feb , Mar , Apr , May , Jun , Jul , Aug , Sep , Oct , Nov , Dec
// //  0  ,  1  ,  2  ,  3  ,  4  ,  5  ,  6  ,  7  ,  8  ,  9  , 10  , 11

// console.log(d.getMonth());


// // If i need only fullyear:
// console.log(d.getFullYear());

// // If i need only milliseconds:
// console.log(d.getMilliseconds());


// // If i need only minutes:
// console.log(d.getMinutes());

// // If i need only Time:
// console.log(d.getTime());


// // Using Date.variable() : it also gives time in milliseconds from , 1 jan 1970;
// let now= Date.now("1971-10-23");
// console.log(now);


// // Putting date manually as a string:  always in (year-month-date) ; here , it is in string format so indexing will start from 1-7 for days and 1-12 for months
// let d1= new Date("2025-06-15") 
// console.log(d1);
// console.log(d1.toDateString());



// // if i need time in this: it will show time in UTC so ; 10:10:12 IST time in UTC is= 04:40:12
// let d2= new Date("2025-06-15T10:10:12") 
// console.log(d2);
// console.log(d2.toDateString());


// if you want to show time in your local timezone: tolocalstring
// console.log(d2.toLocaleString());
// console.log(d2.toLocaleDateString()); /*human readable format */


// Putting date manually as a numbers:  always in (year,month,date) ; here , it is in number format so indexing will start from 0-6 for days and 0-11 for months

// let d3= new Date(2025,6,15,2,13,25,201)  /*year , month , date , hour , minute , seconds , milliseconds { giving atleaast 2 values is must because if one is given then would be considered as milliseconds} */ 
// console.log(d3); 
/*When you log the Date object directly, JavaScript converts it to a string in UTC (Coordinated Universal Time).

If your local time zone is UTC+5:30 (e.g., India), the local time 00:00:00 on July 15, 2025, corresponds to 18:30:00 (6:30 PM) on July 14, 2025, in UTC.

This is why the output is: 2025-07-14T18:30:00.000Z */

// console.log(d3.toLocaleString());
// console.log(d3.toDateString());



// SettingDateComponents : 2024-1-20T24:59:10:999
const da=new Date();
da.setDate(20);
da.setFullYear(2024);
da.setMonth(0);
da.setHours(23);
da.setMinutes(58);
da.setSeconds(9);
da.setMilliseconds(998);
console.log(da)
console.log(da.toDateString());
console.log(da.toLocaleDateString());
console.log(da.toLocaleString());


// Date Calculations

const d10= new Date();
const d11= new Date("2025-03-14");

console.log(d10);
console.log(d11);
console.log(d10-d11);
// console.log(d11-d10);
console.log(d10>d11);
console.log(d10<d11);



// Countdown-Timer:
//STEP-1; Set the target date.
//STEP-2; Calculate the time difference.
//STEP-3; Convert milliseconds to days, hours, minutes, and seconds.







