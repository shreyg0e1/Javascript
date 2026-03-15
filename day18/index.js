
// The this keyword in JavaScript is a special keyword that refers to 
// the context in which the current code is being executed. 
// Its value depends on how the function where this is used is called.


// 1: Global Context (Outside Any Function)
// In browsers: window  (browser me window ko yani global object ko point krta hai this keyword)
// console.log(this);
// In Node.js: Module's exports object (node.js me empty object ko point krta hai {})
// console.log(this); // results in empty object {}untill nothing is add to module's exports
// console.log(this); //empty object {}
// console.log(module.exports); // {}
// console.log(this===module.exports); //true

// Fun-fact: 
// module.exports="goel";
// console.log(this); // Still {} (because `this` is fixed at start!)
// Reason:
// Node.js binds this to module.exports before your code runs.

// Reassigning module.exports later does not update this.

// this keeps pointing to the original {}, while module.exports now points to "goel".



// adding somthing to module.export and check
// module.exports.name="shrey";
// console.log(this); // now it is not empty object , output: { name: 'shrey' }






// // ****************************************************************


// // 2:Inside a Function 
// // i: (Non-Strict Mode) ---->  default hota h ye
// // When this is used inside a regular function, it refers to the global object.
// function greet(){
//     console.log(this);
// }
// greet();


// // ii: Strict Mode
// // this will be undefined inside a function.
// "use strict"
// function meet(){
//     console.log(this);
// }
// meet(); // undefined
// window.meet(); // window / global object ko reffer krega






// // ****************************************************************

// // 3: Inside a Method (Object Context)
// // When this is used inside an object’s method, it refers to the object that owns the method.

// const obj ={
//     name:"Shrey",
//     age:20,
//     greet: function(){
//         console.log(this);
//         console.log(this.name);
//     }
// }

// obj.greet();




// // ****************************************************************

// Arrow functions don’t have their own this. 
// Instead, they inherit this from the surrounding (lexical) scope.

// let obj = {
//     name:"Shrey",
//     age:11,
//     greet: ()=>{
//         console.log(this.name); // no output
//         console.log(this); // refering global object window: because lexical scope me global scope ka this hai abhi joki global object ko point krega
//     }
// }

// obj.greet();

// another good example of understanding arrow function me kese hota hai
// let obj = {
//     name:"shrey",
//     age:11,
//     greet: function(){
        
//         let ab = ()=>{
//             console.log(this);
//         };

//         ab();

//    }
// }

// obj.greet();





// // Inside a Constructor or Class
// // In constructors and classes, this refers to the instance of the object being created.

// class Person{
//     constructor(name,age){
//         this.na = name;
//         this.ag = age;
//     }
// }



// let a = new Person("Shrey", 20); //yha pe this is let vale a ko reffer krega 
// console.log(a);

// ------------------------------------------Revision------------------------------------------------

// let greet = ()=>{
//     console.log(this);
// }

// greet();
// ---------------------------------------------------------------------------------------------------

"use strict"

let meet = function(){
    console.log(this);
}

meet();
window.meet(); //ye error dega naki window because (let use hua hai bnane me and sirf var hi global variable bnata hai let/const nahi)




