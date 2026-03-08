// how to create an object:
const obj={
    name:"shrey",
    account_balance:420,
    gender:"male",
    "age":22, // keys will always stored as strings thats why when "age" is using no error is shown
    0:"hello ",  // Special case:  for numbers ; we can store numbers as keys also because in the end it will also be stored as string
    null:"hlo foddie",  // Special case:  for null ; i can take keywords as here as keys also : because ye bhi string ki tehra considered honge : not a good practice but
    undefined:10  // Special case:  for undefined ; i can take keywords as here as keys also : because ye bhi string ki tehra considered honge : not a good practice but
}
    


console.log(obj);
console.log(obj.name);
console.log(obj["account_balance"]); //when using [] always use " "
console.log(obj.age);
console.log(obj["0"]);
console.log(obj[0]);  //special case for numbers : ki unke liye humme [] <-- ye toh use krna hai but " " <-- ye cumpolsory nahi
console.log(obj.null); 
console.log(obj.undefined);
console.log(obj[null]); //special case for null : ki unke liye humme [] <-- ye toh use krna hai but " " <-- ye cumpolsory nahi
console.log(obj[undefined]); //special case for undefined : ki unke liye humme [] <-- ye toh use krna hai but " " <-- ye cumpolsory nahi

// Special Case for Variables as Keys ; Use Case: When you want to use a variable’s value as a property name.
const key1 = "name";
const key2 = "age";

let special = {
  [key1]: "Shrey", // Computed property name
  [key2]: 22       // Computed property name
};

console.log(special[key1]); // Output: Shrey
console.log(special[key2]); // Output: 22

// Another way of creating object: using new
const person=new Object();
// adding key : values
person.name="shrey";
person.age=22;
person.profession="bussiness man";
person.weight=85;

console.log(person);

// deleting key:values
delete person.age
delete person["weight"];
console.log(person);

// modify or update: if it is present and we change the value it will get updated
person.name="saumya"; // present phele se toh update hoga
person.account=420; //not present phele se toh add hoga
console.log(person);


// Anotherway of creating object: using class
class people{
    constructor(na,ag,gen){
        this.name=na;
        this.age=ag;
        this.gender=gen;
    }
}

let per1=new people("shrey", 22,"male");
let per2=new people("saumya", 22,"fe-male");
let per3=new people("smoesh", 21,"male");
let per4=new people("ayushi", 23,"fe-male");

console.log(per1,per2);




// Common Methods for Objects:
let obj1={
    name: "shrey",
    age: 22,
    account_balance: 420,
    gender:"male"
}

// if i wanted to access all keys of this obj1 then: Object.keys(obj1); this gives keys in arrays format

// console.log(Object.keys(obj1)); // this gives keys in 1darrays format

const arr=Object.keys(obj1);
console.log(arr);

// if i wanted to access all values of this obj1 then: Object.values(obj1); this gives values in 1darrays format
const arr1=Object.values(obj1);
console.log(arr1);


// if i wanted to get all the key and values both : Object.entries(obj1) ; this gives entries  in 2d-arrays format
const arr2=Object.entries(obj1);
console.log(arr2);


// combine
// If we want to copies properties from one or more source objects to a target object.: Object.assign()
let target={a:1, b:2};
let source1={b:3, c:4};
let source2={b:6, d:5};

let result=Object.assign(target, source2, source1);
console.log(result);
let result1=Object.assign(target, source1, source2);
console.log(result1);


// shallow copy and deep copy {defination in notebook}

// spread operator: used to combine
// Example 1: Copying and Merging Arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

// Copy array1 into a new array
let copyArr = [...array1]; // [1, 2, 3]
console.log(copyArr);

// Merge array1 and array2 into a new array
let mergedArr = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]
console.log(mergedArr);



// Example 2: Copying and Merging Objects
let object1 = { a: 1, b: 2 };
let object2 = { c: 3, d: 4 };

// Copy object1 into a new object
let copyObj = { ...object1 }; // { a: 1, b: 2 }
console.log(copyObj);

// Merge object1 and object2 into a new object
let mergedObj = { ...object1, ...object2 }; // { a: 1, b: 2, c: 3, d: 4 }
console.log(mergedObj); 



