// lets say i have ordered 
//   const cart=["pizza", "coke", "sandwich"]

// // callback hell 
// function placeOrder( cart, callback){
//     console.log("Talking with Domino's");
    
//     setTimeout(()=>{
//      console.log("Order Placed Succesfully");
//      const order={ orderid:221, food:cart, restraunt:"Dominos", drop_location:"suddhowala"} // order placed ke baad ye sb chize generate hongi
//      callback(order);
//     },2000)
// }

// function preparingOrder(order, callback){ // ye order ki deatils bhi lega taki bna ske
//     console.log("Pizza preparation started....");

//     setTimeout(()=>{
//         console.log("Pizza preparation Done");
//         const food_details={token:12, restraunt: order.restraunt, location:order.drop_location}
//         callback(food_details);
//        },5000)
// };

// function pickupOrder(food_details, callback){
//     console.log("Reaching restaurant for picking order")

//     setTimeout(()=>{
//         console.log("Order picked up by Delivery Boy");
//         const dropLocation=food_details.location
//         callback(dropLocation);
//        },3000)
// }

// function deliverOrder(dropLocation){
//     console.log("Delivery boy on the way");

//     setTimeout(()=>{
//         console.log("Order Delivered succesfully");
        
//     },5000)
// }

// function ratingOrder(){

// }

// placekrdo order apna const cart=["pizza", "coke", "sandwich"]
// placeOrder(cart, (order)=>{
//     preparingOrder(order, (food_details)=>{
//         pickupOrder(food_details, (dropLocation)=>{
//             deliverOrder(dropLocation);
//         });
//     })
// });

// ============================================================
//              this pyramid is callback hell
// ============================================================

// ===================================================================================================
//                                  Lets see how  Promises help to solve these problems

// (1) inversion control: sbhi ka calling ekdusre pe kisi or pe depend hai (apne hath me hona chaiye)
// ===================================================================================================
// placeOrder(cart)
// .then((order)=>preparingOrder(order))
// .then((food_details)=>pickupOrder(food_details))
// .then((dropLocation)=>deliverOrder(dropLocation))


// =======================================================================================================

//                                            how to create a Promise:
//  const pr= new Promise(function(resolve, reject){

//  })

//  return pr;
// =======================================================================================================

const cart=["pizza", "coke", "sandwich"]

// function placeOrder( cart, callback){
//     console.log("Talking with Domino's");
    
//     setTimeout(()=>{
//      console.log("Order Placed Succesfully");
//      const order={ orderid:221, food:cart, restraunt:"Dominos", drop_location:"suddhowala"} // order placed ke baad ye sb chize generate hongi
//      callback(order);
//     },2000)
// }

// function preparingOrder(order, callback){ // ye order ki deatils bhi lega taki bna ske
//     console.log("Pizza preparation started....");

//     setTimeout(()=>{
//         console.log("Pizza preparation Done");
//         const food_details={token:12, restraunt: order.restraunt, location:order.drop_location}
//         callback(food_details);
//        },5000)
// };

// function pickupOrder(food_details, callback){
//     console.log("Reaching restaurant for picking order")

//     setTimeout(()=>{
//         console.log("Order picked up by Delivery Boy");
//         const dropLocation=food_details.location
//         callback(dropLocation);
//        },3000)
// }

// function deliverOrder(dropLocation){
//     console.log("Delivery boy on the way");

//     setTimeout(()=>{
//         console.log("Order Delivered succesfully");
        
//     },5000)
// }

// placeOrder(cart)
// .then((order)=>preparingOrder(order))
// .then((food_details)=>pickupOrder(food_details))
// .then((dropLocation)=>deliverOrder(dropLocation))


function placeOrder(cart){
    console.log("Talking with Domino's");
     
    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
            
           const food_available = true;
            if(food_available){
            console.log("Order Placed Succesfully");
            const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
            resolve(order);
            }
            else{
                reject("Items Out of Stocks");
            }
           },2000)

    })


    return pr;
}

function preparingOrder(order){
    console.log("Pizza preparation started....");

    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
            console.log("Pizza preparation Done");
            const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
            resolve(foodDetails);
           },5000)
    })

    return pr;
};

function pickupOrder(foodDetails){
    console.log("Reaching restaurant for picking order")
    
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Order picked up by Delivery Boy");
            const droplocation = foodDetails.location;
            resolve(droplocation);
           },3000)

    })

     return pr;
    
};

function deliverOrder(droplocation){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
};



placeOrder(cart)
.then(order=>preparingOrder(order))
.then(foodDetails=>pickupOrder(foodDetails))
.then(droplocation=>deliverOrder(droplocation))
.catch(error=>console.log(error));


// 🧠 Flow:
// placeOrder(cart) returns a Promise ➤ resolve(order)

// Passes order ➤ preparingOrder(order)

// Returns foodDetails ➤ pickupOrder(foodDetails)

// Returns droplocation ➤ deliverOrder(droplocation)

// If any error → goes to .catch()



// If pickupOrder doesn’t return pr, the next .then() will get undefined.

// Every .then() gets the value passed via resolve() from previous Promise.