// comparision operator
// number to number

// let a1=189;
// let a2=89;
// console.log(a1>a2);
// console.log(a1<a2);
// console.log(a1==a2);
// console.log(a1<=a2);
// console.log(a1>=a2);

// comparing string with numbers
let num=10;
let str="10";
console.log(num==str); /*this will hive output as true  because: compare krne k liye js datatypes same krta hai , so strng ko number me badal ke tab compare kiya hai*/

// === : this firstly 1) compare types  , if datatypes are same and equal then 2) checks the value 

let numb=10;
let stri="10";
console.log(numb===stri);


// RULES: 1) Null == undefined ---> true(iske k equivallent hoga or kisi k nhi)
// 2) null === undefined ---> false

console.log(null==0); /*flase: kyu ki ye sirf undefined k equivalent hai */
console.log(null>0);  /*flase: kyu ki ye jab idhr type conversion hoga then null = 0 and 0>0 is false */
console.log(null<0);  /*flase: kyu ki ye jab idhr type conversion hoga then null = 0 and 0<0 is false */
console.log(null>=0); /*true: kyu ki ye jab idhr type conversion hoga then null = 0 so  0>=0 is true */
console.log(null<=0); /*true: kyu ki ye jab idhr type conversion hoga then null = 0 so  0<=0 is true */


console.log(undefined==0); /*flase: kyu ki ye sirf null k equivalent hai */
console.log(undefined>0);  /*flase: kyu ki ye jab idhr type conversion hoga then undefined = NaN and NaN>0 is false */
console.log(undefined<0);  /*flase: kyu ki ye jab idhr type conversion hoga then undefined = NaN and NaN<0 is false */
console.log(undefined>=0); /*true: kyu ki ye jab idhr type conversion hoga then undefined = NaN so  NaN>=0 is false */
console.log(undefined<=0); /*true: kyu ki ye jab idhr type conversion hoga then undefined = NaN so  NaN<=0 is false */

// NaN==NaN : false

console.log(NaN==NaN);
let str1="shrey";
let str2="shrey";
console.log(Number(str1==str2));


// everytime you compare it always answers in true or false:

let abc1=123;
let abc2="123";
let abc3=123;
console.log(abc1==abc2==abc3); /*this will give false becasue : abc1==abc2 => true  then , ture==abc3 i.e true==123  gives false */


let abc4=123;
let abc5="123";
let abc6=1;
console.log(abc4==abc5==abc6); /*this will give false becasue : abc1==abc2 => true  then , ture==abc3 i.e true==ture or true==1 gives true */


console.log(undefined!=null);

// logical operators

let ab=10;
let bc=20;
console.log(ab>bc || bc>ab);
console.log(ab<bc && bc>ab);

console.log(!(ab<bc));


// bitwise operators: &, |, ^(xor), <<(left shift), >>(right shift)
//bit by bit hoga compare phele doono ko binary kro fir and ya or lgao
console.log(4&5);
console.log(11&14);
console.log(11|14);
console.log(5^7);
console.log(5<<3);/*5 * 2 power 3 i.e=> 5*8=40 or 101.000000 so on left shit it will be like => 101000.000 = 40 */
console.log(20>>2); /*20 / 2 power 2 i.e=> 20/4=5 or 10100.000000 so on right shit it will be like => 101.000000 = 5 */
