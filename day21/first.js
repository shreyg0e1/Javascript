// How to create an element in DOM
// (1)create an element:  <li>TS</li>
const element=document.createElement('li');
element.innerHTML="TS";

// To make it insert in html(so that it should be visible on webpage)
// access where you need to put it
// in this case  <ul id="root"></ul>
// then append that element into it
// therefore:
const parent=document.getElementById("root");
parent.appendChild(element);




// If i need to attach many elements then best way is to make a function of it
// appendChild(element): can only attach one element in the last (React)
// append(element,element2); can attach more then one elements in the last(react VS2.0)
function attach(content){
    const element=document.createElement('li');
    element.innerHTML=content;

    const element2=document.createElement('li');
    element2.innerHTML=content + "VS2.0";
    const parent=document.getElementById("root");
    // parent.appendChild(element);
    parent.append(element,element2);
}
attach("Git Github");
attach("React");
attach("Node");

// ************************************************************

// (2) How to Create and attach  a Text Node:
const element2=document.createTextNode("Hello Coder Army")
const parent2=document.getElementById("root")
parent.appendChild(element2)


// ************************************************************

// (3) How to create and attach Attribute Node:
// attribute example: id, class etc 
const element3= document.createAttribute("id")
element3.value="first"
//acess to the first list
const curr_list= document.querySelector("li")
curr_list.setAttributeNode(element3)



//access the second list element to put attribute
const element4= document.createAttribute("id")
element4.value="second"
const parent3=document.getElementById("root");
parent3.children[1].setAttributeNode(element4)



// **********************Accessing Attributes***********************************
// Accessing Attributes
// (1) getAttribute
const element5=document.getElementById("root");
console.log(element5.getAttribute("id")); //root
console.log(element5.getAttribute("class")); //mohan
console.log(element5.getAttribute("style")); //null: because it is not there

// (2) setAttribute 
//set krna koi bhi attribute ko joki phele tha bhi nhi jese custom
element5.setAttribute("custom", "20")

//jo attribute already exist hai uski value update hojai
element5.setAttribute("class", "shrey")


//(3) removeAttribute
//kisi bhi attribute ko htane k liye
element5.removeAttribute("custom")





// ************************Add Nodes to the DOM*****************************************
// Add Nodes to the DOM
//1: appendChild(node)
const parent4=document.getElementById("root"); // accessing parent first
const element6=document.createElement("li"); //create element
element6.innerHTML="lastmelanahai"
parent4.appendChild(element6); //last me add krega node


// 2: append(node1,node2,...)
function attach(content){
    const element=document.createElement('li');
    element.innerHTML=content;

    const element2=document.createElement('li');
    element2.innerHTML=content + "VS2.0";
    const parent=document.getElementById("root");
    // parent.appendChild(element);
    parent.append(element,element2);
}
attach("Git Github");

// 3: insertBefore(newNode, referenceNode): if i need to put before html
// fore better understanding: insertBefore(konsa element attch krvana hai, konse vale se phele krana hai)
const parent_insertbefore=document.getElementById("root");
const child=parent_insertbefore.children[1];
const element_before=document.createElement("li"); //create element
element_before.innerHTML="before"
parent_insertbefore.insertBefore(element_before,child);




// 4: prepend
const parent5=document.getElementById("root"); // accessing parent first
const element7=document.createElement("li"); //create element
element7.innerHTML="firstmelanahai"
parent5.prepend(element7) //first me add krega node


// 5: replaceChild(new element jo daalna hai, purana element jisse replace krna hai)
const parent_replace=document.getElementById("root");
const child2=parent_replace.children[1];
console.log(child2)
const element_replace=document.createElement("li"); //create element
element_replace.innerHTML="replace"
parent_replace.replaceChild(element_replace,child2); //CN replace hoke replace likha va aagya


// 6: Using innerHTML: Directly sets the HTML content of an element.
const parent6=document.getElementById("root");
parent6.innerHTML+= "<li>TS</li>" // means:  parent6.innerHTML = parent6.innerHTML + "TS"

// 7: Using 1) insertAdjacentHTML() or 2) insertAdjacentElement():
// beforebegin: Before the element itself.
// afterbegin: Inside the element, before its first child.
// beforeend: Inside the element, after its last child.
// afterend: After the element itself.

// 1) insertAdjacentHTML(): ye alag alag div create krega naki ek ko hi idhr udhr krega
const parent_adjacenthtml=document.getElementById("root");
parent_adjacenthtml.insertAdjacentHTML("beforebegin",'<div>Radha Krishn</div>')
parent_adjacenthtml.insertAdjacentHTML("afterbegin",'<div>Radha Krishn</div>')
parent_adjacenthtml.insertAdjacentHTML("beforeend",'<div>Radha Krishn</div>')
parent_adjacenthtml.insertAdjacentHTML("afterend",'<div>Radha Krishn</div>')


// 2) insertAdjacentElement() : isme sirf ye ek hi har jga jaata hai  beacause element ha dom ka
const parent_adjacentelement=document.getElementById("root");
const element_adjacentelement=document.createElement("div");
element_adjacentelement.innerHTML="Radhe Radhe";
  parent_adjacentelement.insertAdjacentElement("beforebegin",element_adjacentelement)
//  parent_adjacentelement.insertAdjacentElement("afterbegin",element_adjacentelement)
//  parent_adjacentelement.insertAdjacentElement("beforeend",element_adjacentelement)
//  parent_adjacentelement.insertAdjacentElement("afterend",element_adjacentelement)



// 8: deleting node:- 1) remove() and 2) removeChild(node)
//  1) remove()
const element_remove=document.querySelector("li");
element_remove.remove() // firstmelanahai remove hojaiga kyu ki ye the first element list ka

// 2) removeChild(node): works on a Parent node(parent se child htaiga)
const parent_removechildnode= document.getElementById("root")
const element_removechildnode=document.querySelector("li");
parent_removechildnode.removeChild(element_removechildnode) // replace remove hojaiga kyu ki ye the first element list ka




