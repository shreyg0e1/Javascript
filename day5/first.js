let a =10;
let b=a;
b=30;
console.log(b);
console.log(a);

// primitve and non-primitive
// primitve: immutable (not changable)
// Non-primitve: mutable (changable)


let obj1={
    id:20,
    name:"shrey"
}

let obj2=obj1;
console.log(obj1);
console.log(obj2);
// now ill access the id of obj2 and change it by this command

obj2.id=30;
console.log(obj1);
console.log(obj2);
