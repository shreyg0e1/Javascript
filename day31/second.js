// function test1(){

//     const p1 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("First Promise resolved");
//         },8000)
//     })

//     return p1;

// }


// function test2(){
    
//     const p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Second Promise resolved");
//         },5000)
//     })

//     return p2;

// }



// async function greet() {
    
    
//     console.log("Hello I greet You"); 

//     const data1 = await test1();
//     console.log(data1);
//      const data2 = await test2();
//     console.log(data2);
// }

// greet();
// console.log("Hello Coder Army");
// console.log("Kaise ho aap sab log");





// -----------------------------------------------OUTPUT---------------------------------------------
// Hello I greet You
// Hello Coder Army
// Kaise ho aap sab log
// First Promise resolved //(after 8 sec)
// Second Promise resolved //(after 5 sec)
// -----------------------------------------------OUTPUT---------------------------------------------



// --------------------------------------------OUTPUT-FLOW------------------------------------------------
// 1.   ignore the function both (test1, test2)
// 2. ignore the async function also
// 3. greet():- yha pe call hote hi vo asyn function pe jaiga: or fir turant
// console.log("Hello I greet You"); : isko print krdega
//  4. fir await milega , is line se toh ruka nhi rhega ispe :  const data1 = await test1(); inko microtask queue me rkhega baki chaliga normal 
// 5. console.log("Hello Coder Army");
//    console.log("Kaise ho aap sab log");
// indono ko excecute krega and then
// 8 seconds me data1 ko
//  after 8 sec it will take 5sec more to print data2
// -----------------------------------------------------------------------------------------------------------

// ----------------How to run parallely if both function are not depended on each other(test1,test2)-----------------------
// : using - Promise.all([array])



function test1(){

    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("First Promise resolved");
        },8000)
    })

    return p1;

}


function test2(){
    
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second Promise resolved");
        },5000)
    })

    return p2;

}



async function greet() {
    
    
    console.log("Hello I greet You"); 

    const [data1,data2] = await Promise.all([test1(),test2()]); 
    // Promise.all([test1(),test2()]) array lera hai toh humne Destructuring krdi uski[data1,data2]
    // output same time pe ayega dono ka (agar koi 4 sec or koi 5 sec pe hai toh dono me se maximum time vale pe ayega but output same time pe ayega)
    console.log(data1);
    console.log(data2);
}

greet();
console.log("Hello Coder Army");
console.log("Kaise ho aap sab log");


        
