// /* ARRAYS IN JAVASCRIPT */

let arr =[2, 35, 1, 8, 9, "shrey", true, 1]

// /* 1. length: Number of elements in the array. */
// console.log(arr.length);


// /* at: if i want to access a particular value of array at particular index */

// console.log(arr[2]); /*cannot take negative index  */
// console.log(arr[-2]);/*As alredy told cannot take negative index will show undefined */
// console.log(arr.at(1)); /*can take negative index as well */
// console.log(arr.at(-1));

// // newarr==arr : true ; because dono ka refferance point ya address same hoga

////Structured clone: use krne se exact copy of array bnti hai with different refference address
// const newarr=structuredClone(arr);
// console.log(newarr==arr);


// // push():  it push/adds value to the last of array ; 
// arr.push(69);
// arr.push("goel");
// console.log(arr);


// // pop():  it deletes the  value from the last of array ; 
// arr.pop();
// console.log(arr);


// // unshift: it push/adds value to the start of array 
// arr.unshift(20);
// arr.unshift("radhe radhe");
// console.log(arr);

// // shift:  it deletes the  value from the first of array ; 
// arr.shift();
// console.log(arr);


// delete: it is used to delete any value from any particular index {not recommended} { consumes index}
// delete arr[0];
// console.log(arr);     /* <1 empty item> is called hole*/
// console.log(arr[0]); /*<1 empty item> isne index or space li  hui hai but ye undefined print krega*/

// // indexOf(): Returns the index of the first occurrence.
// console.log(arr.indexOf(1));
// console.log(arr.indexOf(167)); /*it will give -1 because it is not present , -1 because run time errorsko prevent krna  */

// // lastindexof(): Returns the index of the last occurrence.
// console.log(arr.lastIndexOf(1));

// // includes(): Checks if an element exists.
// console.log(arr.includes("shrey"));






// // slice(start, end): Extracts a portion of the array without modifying it. not included the last index; takes -ve index also
// console.log(arr.slice(3,5));
// console.log(arr.slice(-3,9));



// // splice(starting index, kitti values chaiye) method in JavaScript is a powerful array method used for modifying an array by adding, removing, or replacing elements
 
// console.log(arr.splice(2,6));
// console.log(arr) /*ye dekho splice ne original array me changes krdiye */


// splice(starting_index, total_element_delete, add_value );
// console.log(arr.splice(1,2,10,20,30,40)); /*original array me 1st index se ye add krdega 10,20,30,40 ko but jo splice return krega vo sirf delete kri hui krega yani 1st index se 2 elements tk */
// console.log(arr);
// console.log(arr.splice(1,0)); /*will not give anything */
// console.log(arr.splice(1,0,12,13)); /*without deleting anything it will just add elements from index 1 */
// console.log(arr);
// // incase i dont want to delete any Element but wants to add then
// console.log(arr.splice(1,0,10,20,30,40,50)); /*add hone lagjainge starting index se */
// console.log(arr);

// // Array to string : 1) tostring 2)join()
// // 1) tostring
// console.log(arr.toString());
// console.log(typeof arr.toString());

// // 2)join(): it also converts array to string but gives flexibility , ki kese seperate kree 
// console.log(arr.join(" "));
// console.log(arr.join(","));
// console.log(arr.join("*"));
// console.log(typeof arr.join(" "));



// // CONCAT
// let arr1=[2,35,6,11];
// let arr2=[5,12,19,20];
// let arr3=[10,2,13,14]
// let arr4=arr1.concat(arr2, arr3);
// console.log(arr4);


// // 2-D Array
// let array1=[1,2,3];
// let array2=[4,5,6,7];
// array1.push(array2);
// console.log(array1);
// console.log(array1.length);
// console.log(array1[2])
// console.log(array1[3][2]);



// // writing off 2-Darray
// let arr2d=[[1,2,3],[4,5,6],[7,8,9]];
// console.log(arr2d);
// console.log(arr2d.length);
// console.log(arr2d[0]);
// console.log(arr2d[0][2]);


// // 3-D Array
// let arr3d=[[1,2,[4,5],[6,7,8]]];
// console.log(arr3d);
// console.log(arr3d[0][2][0]);
// console.log(arr3d[0][3][0]);


// // how to make 2-d array into 1-d array: use flat
// let array2d=[[1,2,3],[4,5,6],[7,8,9]];
// let newar=array2d.flat();
// console.log(newar);

// // how to make 3-d array into 1-d array: use flat
// let array3d=[[1,2,[3,90,10],[4,5,6],[7,8,9]]];
// let newar3=array3d.flat(Infinity); /*flat(iske andar by default value 1 hoti hai) if 3d array hai toh 2 kro taki 1d array bnjai , best hai infinity krdo taki kuch bhi ho 1d bnjai */
// console.log(newar3);


// // how to check that ki humne backend se kuch recieve kiya hai jo vo array hi hai :  Array.isArray
// let abc=[1,2,3,4];
// console.log(Array.isArray(abc));

// let abcd=23;
// console.log(Array.isArray(abcd));



// //Anotherway of making array using : new { this method is notrecommended}
// let ac=new Array(10); /*ek value se sirf array ki length declare hori hai array nahi bnra agar number dala hai toh */
// console.log(ac);
// console.log(ac.length);
// let ajc=new Array("shrey"); 
// console.log(ac);
// let bc=new Array(10,30); /*atleast 2 value dene se array bngya hai jiski length 3 hai */
// console.log(bc);
// console.log(bc.length);