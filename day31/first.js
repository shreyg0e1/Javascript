// const cart=["pizza", "coke", "sandwich"]

// function placeOrder(cart){
//     console.log("Talking with Domino's");
     
//     const pr = new Promise(function(resolve,reject){

//         setTimeout(()=>{
            
//            const food_available = true;
//             if(food_available){
//             console.log("Order Placed Succesfully");
//             const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
//             resolve(order);
//             }
//             else{
//                 reject("Items Out of Stocks");
//             }
//            },2000)

//     })


//     return pr;
// }

// function preparingOrder(order){
//     console.log("Pizza preparation started....");

//     const pr = new Promise(function(resolve,reject){

//         setTimeout(()=>{
//             console.log("Pizza preparation Done");
//             const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
//             resolve(foodDetails);
//            },5000)
//     })

//     return pr;
// };

// function pickupOrder(foodDetails){
//     console.log("Reaching restaurant for picking order")
    
//     const pr = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log("Order picked up by Delivery Boy");
//             const droplocation = foodDetails.location;
//             resolve(droplocation);
//            },3000)

//     })

//      return pr;
    
// };

// function deliverOrder(droplocation){
//     console.log("Delivery boy on the way");

//     setTimeout(()=>{
//         console.log("Order Delivered succesfully");
//     },5000)
// };


// async function greet() {


//     try{
//     const order = await placeOrder(cart);
//     const foodDetails = await preparingOrder(order);
//     const droplocation = await pickupOrder(foodDetails);
//     deliverOrder(droplocation);
//     }
//     catch(error){
//         console.log(error)
//     }
    
// }

// greet();

// ============================ no - need ==============================
// placeOrder(cart)
// .then(order=>preparingOrder(order))
// .then(foodDetails=>pickupOrder(foodDetails))
// .then(droplocation=>deliverOrder(droplocation))
// .catch(error=>console.log(error));
// =====================================================================




//     const p1 = new Promise((resolve,reject)=>{ 
// // You’re creating a Promise named p1.
// // This object is immediately created and is in pending state initially.

//         setTimeout(()=>{
//             resolve("hello everyone"); // ye value resolve hoke p1 me jaigi
//         },2000)
//     })

// //Inside the Promise:

// // A timer is set for 2 seconds using setTimeout.

// // After 2 seconds, resolve("hello everyone") runs.

// // That means after 2 seconds, p1 will become fulfilled with value "hello everyone".

// // 🕒 At this point, p1 = Promise {<pending>}
// // After 2 seconds → p1 = Promise {'hello everyone'}


//     async function greet() {
// // Defines an async function greet().
// // Any await inside this function will pause execution until the awaited Promise is resolved.


//         const data1=await p1; // await execution ko rokdega jbtk data ko value nhi assign hogi uske niche nhi jaiga tbtk
//         // console.log(p1) //You're logging p1, not data. So even though p1 is awaited, you are printing the Promise object itself, not its resolved value.
//          console.log(data1) //resolve  value print hogi

// // The code waits until p1 is resolved, which takes 2 seconds.

// // After 2 seconds, p1 resolves with "hello everyone".

// // Now, data1 = "hello everyone".

// // ⏸ Until this point, execution is paused. Nothing below this line runs.


//          const data2=await p1;
//          console.log(data2)

// //          You're awaiting p1 again, but since p1 has already been resolved, it does not wait this time.

// // await immediately gives you the resolved value: "hello everyone".


//     }

//     greet();



// ================================IMPORTANT=======================================
// 📌 Important: Once a Promise is resolved, it remains resolved. So re-awaiting it gives the same value instantly.
// KOI PARALLEL ME NHI CHALTA YE SB(CHUTIYE YOUTUBERS GALAT PDATE HAI)
// ================================IMPORTANT=======================================




    // const p3 = new Promise((resolve,reject)=>{ 


    //     setTimeout(()=>{
    //         resolve("first promise resolved"); // ye value resolve hoke p1 me jaigi
    //     },5000)
    // })

    //  const p4 = new Promise((resolve,reject)=>{ 


    //     setTimeout(()=>{
    //         resolve("second promise resolved"); // ye value resolve hoke p1 me jaigi
    //     },2000)
    // })



    // async function preet() {

    //     const data1=await p3; // await execution ko rokdega jbtk data ko value nhi assign hogi uske niche nhi jaiga tbtk
    //     // console.log(p1) //You're logging p1, not data. So even though p1 is awaited, you are printing the Promise object itself, not its resolved value.
    //      console.log(`1`,data1) //resolve  value print hogi


    //      const data2=await p4;
    //      console.log(`2`,data2)


    // }

    // preet();

//     p3.then(value=>console.log(value));
//  p4.then(value=>console.log(value));

// ============================OUTPUT========================================

//  second promise resolved       // p4.then() → Output D
// 1 first promise resolved      // console.log in async function → Output A
// first promise resolved        // p3.then() → Output C
// 2 second promise resolved     // console.log in async function → Output B

// ============================OUTPUT========================================

// | Time | What Happens                              | Output                                     |
// | ---- | ----------------------------------------- | ------------------------------------------ |
// | 0s   | `p3` and `p4` created, both pending       |                                            |
// | 0s   | `preet()` starts → hits `await p3`        |                                            |
// | 2s   | `p4` resolves → `.then()` fires           | `second promise resolved` (**Output D**)   |
// | 5s   | `p3` resolves → `await p3` resumes        | `1 first promise resolved` (**Output A**)  |
// | 5s   | `p3` `.then()` fires                      | `first promise resolved` (**Output C**)    |
// | 5s   | `await p4` in `preet()` resumes instantly | `2 second promise resolved` (**Output B**) |


//  | Concept                        | Meaning                                                                                |
// | ------------------------------ | -------------------------------------------------------------------------------------- |
// | `await`                        | Pauses execution inside an async function until the Promise resolves                   |
// | `.then()`                      | Registers a callback to run **once** the Promise resolves                              |
// | Re-awaiting a resolved Promise | Resolves instantly, no delay                                                           |
// | Promises run in parallel       | Even if you `await`, the Promises themselves are still resolving on their own schedule |





// **********************************************************IMPORTANT******************************************************

// 🧠 Imagine a real-life situation:
// Example: Pizza Order
// Tumne pizza order kiya.

// Ab 2 options hain uska response lene ke:

// 🔹 1. then (Old School Style)

// orderPizza().then(pizza => {
//    console.log("Pizza aagaya:", pizza);
// });
// 🔸 Explanation:

// Tumne orderPizza() function call kiya — usne ek Promise return ki.

// Tumne bola: "Jab pizza aajaye, to mujhe bata dena (then call kar lena)."

// Jab pizza deliver hota hai, .then() wala function chalega.
// ------------------------------------------------------------------------

// 🔹 2. await (Modern Easy Style)

// const pizza = await orderPizza();
// console.log("Pizza aagaya:", pizza);
// 🔸 Explanation:

// Tumne bola: "Main ruk jaunga jab tak pizza na aajaye."

// await likhne se JavaScript kehti hai:
// "Thik hai, ruk ja... jab tak pizza aata hai, main neeche ka code nahi chalaungi."

// ⚠️ But await sirf async function ke andar hi use hota hai.

// | Feature        | `then`                               | `await`                                |
// | -------------- | ------------------------------------ | -------------------------------------- |
// | Syntax         | `.then(result => {...})`             | `const result = await promise`         |
// | Simplicity     | Thoda complex (callback style)       | Easy & clean (looks like sync code)    |
// | Usage          | Kahi bhi use ho sakta hai            | Sirf `async` function ke andar         |
// | Readability    | Nested, hard to manage if many steps | Easy to read, like normal step-by-step |
// | Error Handling | `.catch(err => {...})`               | Use `try...catch` block                |


// 🧁 Real Life Analogy:
// Situation	then	await
// Pizza	"Pizza ban jaaye to mujhe bula lena"	"Main kitchen ke bahar wait karta hoon jab tak pizza ready na ho"









// -----------------------Dono function alag alag time lenge apna -------------------------------------------------------------------------------------------------------
function test1(){   
const p3 = new Promise((resolve,reject)=>{ 


        setTimeout(()=>{
            resolve("first promise resolved"); // ye value resolve hoke p1 me jaigi
        },5000)
    })

    return p3;
}

function test2(){
     const p4 = new Promise((resolve,reject)=>{ 


        setTimeout(()=>{
            resolve("second promise resolved"); // ye value resolve hoke p1 me jaigi
        },2000)
    })
    return p4;
}


    async function preet() {

        const data1=await test1(); // out put of test1 will take 5 sec 
         console.log(`1`,data1) //resolve  value print hogi


         const data2=await test2(); // test2 output  comes  after 5 seconds of test1 and it takes 2sec sepratley for output of test2
         console.log(`2`,data2)


    }

    // preet();




    // --------------------------------NOTE----------------------------------
    // Async function alwasys return promises even if theres nothing so undefined ko bhi promise ki tehra dega return krke

   
   
     async function doNothing() {
    // no return
}

const result = doNothing();
console.log(result); // Output: Promise { undefined }

// 🧾 Explanation:
// Function ke andar kuch bhi return nahi kiya → by default, undefined return hota hai.

// Lekin kyunki yeh async function hai, yeh undefined ko wrap karke ek Promise me return karega.

// So, result ban jaata hai: Promise { undefined }