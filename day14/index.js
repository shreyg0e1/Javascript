// how to itterate object: using :- for-in loop

const obj={
    name:"shrey",
    age:22,
    gender:"male",
    city:"dehradun"
}

for (const key in obj) {
    console.log(key,obj[key]);
  
}


// another way that we have studied already : dot notation ; 
console.log( Object.keys(obj)) //gives keys of object in ARRAYS[ ] 
console.log( Object.values(obj)) //gives values of object in ARRAYS[ ] 
console.log( Object.entries(obj)) //gives enteries of object in 2-DARRAY[ [] ] 



// lets see the difference between Object.key and for-in loop:
// Object.key : only gives access to object's property
// for-in loop : gives access to object's properties as well as inherit property

const obj1= Object.create(obj) //inhereting obj properties to obj1
obj1.money=420;
obj1.id="sh";
console.log(Object.keys(obj1));
for (const key in obj1) {
  console.log(key);
}


// Q. Why for-in loop is not showing or accessing all the other properties of object that object automatically inherits from Object.prototype?
// --> when we make a key-value pair then unke sath there are few more things that get attach to it
let objj={};
objj.name="boney";
// key value writable, enumerable, configurable:
console.log(Object.getOwnPropertyDescriptor(objj,'name'));

// writable:true; value can be changed
objj.name="goel";
console.log(Object.getOwnPropertyDescriptor(objj,'name'));
console.log("kuki")


// configurable:true; I can change the value of writable and enumerable
// how to define properties manually:- Using define property

Object.defineProperty(objj,'name',{
  value:"goel",
  writable: true, //i can't change it to false now , if i doest , it will give error
  enumerable: true,
  configurable: false
})

objj.name="golu";
console.log(Object.getOwnPropertyDescriptor(objj,'name'));


Object.defineProperty(objj,'name',{

  writable: false, //i can't change the name

})
objj.name="bhai";
console.log(objj);



// another example: bank account number kabhi change na ho
const objj1={
  name:"anil",
  cast:"goel",
  bank:"bob",
  account_no:3001
}

// by default the writable property for the account is true:
// so to make it false : using undefine

Object.defineProperty(objj1,'account_no',{
  writable:false
})

objj1.account_no=2001;
console.log(objj1.account_no);



// enumerable: jinjin ka bhi enumerable true hoga bs voi access /print honge "for-in loop" se , ya fir jinka inherit krke enumerable true hoga vo bhi honge
const customer={
  name:"somesh",
  age:22,
  account_number:123,
  balance:2000
}

let customer2=Object.create(customer);
customer2.city="haridwar";
customer2.place="delhi"

Object.defineProperty(customer,'name',{
  enumerable:false,
})

for (const key in customer) {
  console.log(key);
}


for (const key in customer2) {
  console.log(key);
}


// so object ko for-in loop krte hue object.prototype ki keys isiliye access / print nahi hoti because vo sbka enumerable: false ha
// proof: toString is property of Object.prototype

console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString'));

// if we need to change the toString's enumerable: true then:
Object.defineProperty(Object.prototype,'toString',{
  enumerable:true,
})
for (const key in customer) {
  console.log(key); //now it will also acess/print toString becausue enumerable : true krdiya hai
}



// we dont use for-in loop with array:
const arr=[10,20,40,12,30]
for (const key in arr) {
  console.log(key); //print only indexes
  console.log(key, arr[key]);
}

// if it is working fine with array then kyu use nahi krte ?
// lets see: 

const arr1=[10,20,30,40];
arr1.name="shrey";
for (const key in arr1) {
  console.log(key); //print only indexes: but this time it will also print : name , and a "string cannot be array's index"
  
}

// instead array k case me normal loop jayada smart hota hai as compared to for-in loop:
for (let index = 0; index < arr1.length; index++) {
  console.log(index,arr1[index]); //ye smart hai , "name" print hi nahi krega 
  
}