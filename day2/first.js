// Datatypes: 1) Primitive  2) Non-primitive
//  primitive:- numbers , boolean , string, null , undefined , symbols , BigInt

// numbers
let acc_ballance=30;
console.log(acc_ballance);

//string
let str="shrey"
console.log(str);
console.log("str");
 let str2='another way of writing string';
 console.log(str2);

//  to check datatype of anything we use : typeof

console.log(typeof acc_ballance);
console.log(typeof str);
console.log(typeof str2);



// boolean: either true or false
let negativity_block= true;
console.log(negativity_block);
console.log(typeof negativity_block);


// undefined
let account;
console.log(account); /*agar isko sirf print krunga without givingits value tbhi output undefined ayega and datatype toh ha hi undefined */
console.log(typeof account);


// null : only null hi ek esa datatype hai jo apna dataype nikalne pr yani typeof krne pr khud ka name nhi blki "object" show krta hai because ye erroe hai

let bal=null;
console.log(bal);
console.log(typeof bal);

// bigint
let a = 47490380938433374734707343343222222222222n;
console.log(a);


// maximum and minimum integer that can be print 
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);