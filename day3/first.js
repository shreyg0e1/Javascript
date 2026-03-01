// // Non-primitive datatypes: array , objects, functions
// // 1) Array: used to strore things in a single variable in javascript it can store any datatype

// // need

// // n=10;
// // num=30;
// // number=50;

// let arr=[10,30,50, "shrey", "saumya"];
// console.log(arr);
// console.log(typeof arr);

// // array shows its type as OBJECT when typeof is used , this is not the error  


// // object: stores data in key value pairs
// // key:value
//  let obj={
//     user_name:"shrey",
//     account_number:473897,
//     balance:420
//  }
//  console.log(obj);
//  console.log(typeof obj); /*typeof object is object only */

// // function
// let fun=function(){
//     console.log("Jai shree krishna")
    
//     return 10;
// }

// fun();
// console.log(fun()) /*return statement*/
// console.log(typeof fun); /*typeof function is function only */


// // type conversion: string to number
//  let account_balancce="100"
//  console.log(account_balancce);
//  console.log(typeof account_balancce)

// // conversion
//  let num=Number(account_balancce)
//  console.log(num)
//  console.log(typeof num)



// //  boolean to number 
// let x= true
// console.log(Number(x));
// let y= false
// console.log(Number(y));


// let account="100xs"
// let bal="200s"
// console.log(Number(account))
// console.log(Number(bal))

// // null to number: null in number is = 0
// let x1=null
// console.log(Number(x1))


// // undefined to number: it will give NaN(not a number)
// let x2;
// console.log(Number(x2));


// // number to string
// let ab=20;
// console.log(String(ab));
// console.log(typeof String(ab));

// // boolean to string
// let ax=true;
// console.log(String(ax));
// console.log(typeof String(ax));


// // null to string
// let nu=null;
// console.log(String(nu));
// console.log(typeof String(nu));

// // undifined to string: it will give undefined 
// let un;
// console.log(String(un));
// console.log(typeof String(un));

// // String  to Boolean 
// let abc="str";
// console.log(Boolean(abc));


// let abc1=""; /*gives false  */
// console.log(Boolean(abc1));


// // arthemetic operations
// // rules : (1) divide and multiply (left to right)
//         // (2) add and sub (left to right)
// console.log(3+2*4/2-1)
// // 3+2*4/2-1=> 3+8/2-1=>3+4-1=>7-1 = 6

// // using brackets tells which operations to solve first
// console.log(((6*(3+18)/6)-9))
// // (3+18)=21 
// // 6*21=126
// // 126/6=21
// // 21-9=12 (final answer)



// // Modulous gives remainder
// console.log(20%3);


// // increment and decrement operators
// // (1) post-increment : sum ++  , (2) post-decrement : sum -- {post mtlv ki "baadme , ye original value dega phele baadme update hoga"}
// let sum= 20;
// let total=sum++;
// console.log(total);
// console.log(sum)

// let sub= 20;
// let totalsub=sub--;
// console.log(totalsub);
// console.log(sub)


// // (3) pre-increment : ++ sum   , (4) pre-decrement : -- sum  {pre mtlv phele , ye phele update hoke updated value hidega}
// let psum= 20;
// let ptotal=++psum;
// console.log(ptotal);
// console.log(psum);


// let psub= 20;
// let ptotalsub=--psub;
// console.log(ptotalsub);
// console.log(psub);



// // Assignment operators
// let assign =20;
// assign += 10;
// // assign=assign+10;
// console.log(assign);

// let ass =20;
// ass -= 10;
// // ass=ass-10;
// console.log(ass);


// let as =20;
// as *= 10;
// // as=as*10;
// console.log(as);

// let a =20;
// a %= 10;
// // a=a%10;
// console.log(a);

// let div =20;
// div /= 10;
// // div=div/10;
// console.log(div);