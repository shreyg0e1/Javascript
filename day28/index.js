//  JS is a single threaded synchronous language:

// JS bheviour: Async
// ============================================

console.log("10");

setTimeout(() => {
    console.log("20");
}, 5000);


console.log("30");

// ===============================================
// setTimeout is not part of javascript thats why showing async behaviour
// ===============================================
// single threaded: One task will be executed at a time:


// ------------------------------------------------------------------------
console.log("10");

const timer = Date.now();
// timer Older time
while(Date.now()-timer<2000){
    // Wait for 2 second
}

console.log('20');


console.log("30");
// ------------------------------------------------------------------------
// this will aslo wait for 2 second but here output is :10 20 30 (because while is part of js thats why behaving synchronous)
// ------------------------------------------------------------------------