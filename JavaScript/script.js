// Traversal DOM

// Parent Element 
// var parent = document.querySelector('div')
// var p = parent.parentElement;
// console.log(p);

// childrenElemt
// var child = document.querySelector('ul')
// var c = child.children;
// console.log(c);

// previousElementSibling
// console.log(document.querySelector('.hero').previousElementSibling);

// append child 
const ul = document.querySelector('ul');
const newElement = document.createElement('li');
newElement.textContent = "Append child";
ul.appendChild(newElement)

document.getElementById('elementId');