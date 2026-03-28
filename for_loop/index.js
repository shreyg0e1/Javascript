// // for loop
// let array=[1,2,3,4, ,6]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
// }

// // nested for-loop
// // print table till 10
// // Table of 1 :
// // 1 * 1 = 1
// // 1 * 2 = 2
// //     .
// //     .
// //     .
// // 10 * 10 = 100

// for(let i=1; i<=10;i++){
//     console.log(` Table of ${i} `);

//     for(let j=1; j<=10; j++){
//         // console.log(`${i} + "*" + ${j} + "=" + ${i*j}`)  //mistake krdi thi ye mene
//         console.log(`${i}  *  ${j}  =  ${i*j}`)
//     }
//     // console.log(`\n`)
// }



// Printing Patterns:
// Pattern 1:
// ****
// ****
// ****
// ****
console.log(`Pattern 1:\n`);
 for(let i = 0; i<4; i++){
    let  row=" ";
    for(let j= 0; j<4; j++){
        row+="*";
    }
    console.log(row);
 }

 console.log(`\n`)


//  Pattern 2:
// *
// **
// ***
// ****
// *****
console.log(`Pattern 2:\n`);
for(let i = 0; i<5; i++){
    let  row=" ";
    for(let j= 0; j<=i; j++){
        row+="*";
       
    }
    console.log(row);
 }
 console.log(`\n`)



 //  Pattern 3:

//  1
//  12
//  123
//  1234
//  12345

console.log(`Pattern 3:\n`);
for(let i = 1; i<6; i++){
    let  row=" ";
    for(let j= 1; j<=i; j++){
        row+=j;
    }
    console.log(row);
 }
 console.log(`\n`)



  //  Pattern 4:

//   1
//   22
//   333
//   4444
//   55555

console.log(`Pattern 4:\n`);
for(let i = 1; i<6; i++){
    let  row=" ";
    for(let j=1 ; j<=i; j++){
        row+=i;
    }
    console.log(row);
 }
 console.log(`\n`)



   //  Pattern 5:

//    *****
//    ****
//    ***
//    **
//    *

console.log(`Pattern 5:\n`);
for(let i = 1; i<6; i++){
    let  row=" ";
    for(let j=1 ; j< 6-i+1; j++){
        row+="*";
    }
    console.log(row);
 }
 console.log(`\n`)



    //  Pattern 6:

    // 12345
    // 1234
    // 123
    // 12
    // 1

console.log(`Pattern 6:\n`);
for(let i = 1; i<6; i++){
    let  row=" ";
    for(let j=1 ; j< 6-i+1; j++){
        row+=j;
    }
    console.log(row);
 }
 console.log(`\n`)


  //  Pattern 7:
 
//    *

//   ***

//  *****

// *******

// *********

  console.log(`Pattern 7:\n`);
// outer loop
for(let i=1; i<=5;i++){
    let row=" ";
    // space loop:
    for(let space=1;space<=5-i; space++){
        row+=" ";
       

    }
    console.log(row);

    // star loop
    for (let star=1; star<=2*i-1;star++){
        row+="*";
       
    }
    console.log(row);
}

console.log(`\n`)


// Pattern 8:


//   *********

//    *******

//     *****

//      ***

//       *

console.log(`Pattern 8:\n`);
// outer loop
for(let i=1; i<=5;i++){
    let row=" ";
    // space loop:
    for(let space=1;space<=i; space++){
        row+=" ";
       

    }
    console.log(row);

    // star loop
    for (let star=1; star<=11-2*i;star++){
        row+="*";
       
    }
    console.log(row);
}

console.log(`\n`)