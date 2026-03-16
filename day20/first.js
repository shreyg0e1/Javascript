// Accessing by CSS Selectors
// // 1) single element
// const id=document.querySelector('#first');
// id.innerHTML="dekho kaaam krraa hai"

// const id2=document.querySelector('.header2');
// console.log(id2)
// id2.style.backgroundColor="pink";


// To select all at once because querySelector will only gives the first matching one therefore to get all we use: querySelectorAll
// this gives us node list then to itterate node list we can do these methods
// How to itterate Nodelist

// const obj = document.querySelectorAll('.header1')

// 1st method: forEach loop
//1:  obj.forEach((val)=>{
//     console.log(val)
//     })

// 2nd method: for-of  loop
// 2: for(let val of obj)
// console.log(val)

// 3rd method: for loop
// 3: for(i=0;i<obj.length;i++)
//     obj[i].style.color = "red";


//  Convert NodeList into array
//  Array.from(obj)


// *************************************************

// const obj = document.getElementsByTagName('h1');

// let team = document.getElementsByTagName('li');

//  gives the live htmlcollection of all elements with the specified tagname


// How to iterate over it
// 1:for(let i=0;i<team.length;i++)
// team[i].style.color = "black";

// 2: for(let val of team)
    // console.log(val)

// 3: Array.from(team).forEach((val)=>{
// console.log(val);
//  })




// *************************************************

// const list = document.querySelector('li'); //li ka parent element "ul dega"
// console.log(list.parentElement);
// console.log(list.parentNode);

const par = document.querySelector('ul');
// console.log(par);
// console.log(par.childNodes); //(includes text nodes)
// console.log(par.children); //(includes only element nodes)
// console.log(par.firstChild);  //(includes text  if text is there: first child ka)
// console.log(par.firstElementChild);  //(includes only element : first child ka) )
// console.log(par.lastChild);  //(includes text if text is there: last child ka)
// console.log(par.lastElementChild);  //(includes only element : last child ka) )

// console.log(par.nextSibling); //(includes text  if text is there: next sibling ka)
// console.log(par.nextElementSibling);  //(includes only element : next sibling ka)
console.log(par.previousSibling);  //(includes text  if text is there: previous sibling ka)
console.log(par.previousElementSibling);  //(includes only element : previous sibling ka)