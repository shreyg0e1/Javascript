// // // Shallow copy
// // let obj1={
// //     a:1,
// //     b:2
// // }

// // let obj2=obj1;
// // console.log(obj2);
// // // changing value in obj2.a: will change value in obj.a also 
// // obj2.a=10;
// // console.log(obj1);
// // console.log(obj2);


// // // Deep copy
// // let obj3={
// //     a:1,
// //     b:2
// // }

// // let obj4=structuredClone(obj3);
// // console.log(obj4);
// // // changing value in obj4.a: will not  change value in obj3
// // obj4.a=10;
// // console.log(obj3);
// // console.log(obj4);



// // // Nested Object
// // const user={
// //     name:"shrey",
// //     account_balance:420,
// //     address:{
// //         pincode:248007,
// //         city: "Dehradun"
// //     }
// // }

// // // if i need to acess the property of nested object
// // console.log(user.address.pincode);
// // // updating the properties of nested object
// // user.address.city="delhi";
// // console.log(user.address.city);


// // // assign (behaviour)
// // const user2=Object.assign({},user);
// // console.log(user2);
// // user2.name="saumya";
// // user2.address.pincode=30000;
// // console.log(user2);
// // console.log(user.name); //When you copy a primitive, you create a new value in memory, changes not occur in original
// // console.log(user.address.pincode); // copy the reference to the same memory location. when nested objects, changes occurs in the original



// // // Object.freeze(): Prevents any modification to an object
// // const object1={
// //     name:"shrey",
// //     surname:"goel"
// // }

// // Object.freeze(object1);
// // object1.name="Radhe";
// // console.log(object1);

// // // Object.seal(): /Will Not-allows adding or removing properties but it allows modification of existing properties
// // const object2={
// //     name:"bonnie",
// //     surname:"goel"
// // }

// // Object.seal(object2);
// // object2.name="Radhe";  //allows modification of existing properties
// // console.log(object2); 
// // object2.age=22;  //Will Not-allows adding or removing properties
// // console.log(object2); 



// // Destructuring of Object:
// let obj={
//     name:"shrey",
//     money:430,
//     balance: 20,
//     age:22
// }

// // const {name, balance}=obj; // ese bhi krskte hai 
// // const {name:naam, balance:bal , age:umar}=obj;  //name and balance and age ki values ko  nikal liya  and in variables me save kraliya ese directly 
// // console.log(naam, bal, umar);
// const {name:naam, balance:bal ,...o}=obj;
// console.log(o);


// destructure of array:
// const arr=[1,2,3,4,5,10];
// const[first, second]=arr;
// console.log(first,second);
// const [first,second, ,third]=arr;
// console.log(first,second,third);
// const[first,second,...third]=arr;
// console.log(third);
// console.log(...third);


// // Destructure in Nested Objects"
// const newuser={
//     name:"shrey",
//     account_balance:420,
//     arr10: [90,40,60,80],
//     meet:function(){
//         console.log("hello bhai nice meeting you")
//     },
//     greet:function(){
//         console.log("hello bhai greetings")
//     },
//     address:{
//         pincode:248007,
//         city: "Dehradun"
//     }
// }
// const{arr10:[twenty]}=newuser; //if there's an array in a object then to destruct it you have to do like {arr:[]}
// console.log(twenty);
// newuser.greet();
// newuser.meet();
// const{address:{pincode}}=newuser; //destructureing  nested object 
// console.log(pincode);

// console.log(newuser.address.pincode) //access pincode by dot nottation



// // Prototypechaining:
// const array=[10,20,30,40];
// console.log(array.__proto__==Array.prototype);
// console.log(array.__proto__.__proto__==Object.prototype);
// console.log(array.__proto__.__proto__.__proto__==null);



// // use of : getPrototypeOf
// const ob = {
//     a:1, 
//     b:23,
//     c:{
//         d:12,
        
//     }
// };
// const prototype = Object.getPrototypeOf(ob);
// console.log(prototype); // Output: [Object: null prototype] {}



// // Example: Why __proto__ is Messy
// const o1 = { a: 1 };
// const o2 = { b: 2 };

// // Using __proto__ to set prototype
// obj2.__proto__ = o1;

// console.log(o2.a); // Output: 1 (inherited from obj1)

// // Using __proto__ to get prototype
// console.log(o2.__proto__); // Output: { a: 1 }

// // Problem: __proto__ can be overridden or cause issues
// o2.__proto__ = null; // Breaks the prototype chain
// console.log(o2.a); // Output: undefined (prototype chain is broken)





// // Example: Using Object.getPrototypeOf() and Object.setPrototypeOf()
// const ob1 = { a: 1 };
// const ob2 = { b: 2 };

// // Using Object.setPrototypeOf() to set prototype
// Object.setPrototypeOf(ob2, ob1);

// console.log(ob2.a); // Output: 1 (inherited from obj1)

// // Using Object.getPrototypeOf() to get prototype
// console.log(Object.getPrototypeOf(ob2)); // Output: { a: 1 }

// // No risk of breaking the prototype chain accidentally
// Object.setPrototypeOf(ob2, null); // Explicitly set prototype to null
// console.log(ob2.a); // Output: undefined (prototype chain is broken, but intentionally)


// ===================================

function sum(n,m){
    return n+m;
}
console.log(sum(1,)) //NaN
console.log(sum(1)) //NaN
console.log(sum("we"+ "ee")) //weeeundefined
console.log(sum("we",)) //weundefined
console.log(sum("we",10)) //we10
 console.log(sum("we",true)) //wetrue
 console.log(sum(true,0)) //1
 console.log(sum(true,false)) //1