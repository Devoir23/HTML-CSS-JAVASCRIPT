/*Array

let arr = ["cea","rr",2,3,4,true,null];
console.log(arr.length);

console.log("before push: ", arr);

push()
arr.push("Kartavya")
console.log("after push: ", arr);

unshifted
arr.unshift("Kartavya");
console.log("unshift: ", arr);

splice-> remove element 
console.log("before splice: ", arr);
arr.splice(1,3);
console.log("after splice: ",arr);
console.log(arr.length);


console.log(arr);


let num = [10,20,30,40];


console.log(num.indexOf(30)); //indexof
console.log(num.reverse());
console.log(num.sort());
*/


/* map function

const num = [10,20,30,40,50,70,80,90];

const detailsMap = num.map((num,index)=>{
    return `${index} : ${num}`
}) 

console.log(detailsMap);
console.log(num); */

// forEach
const num = [10,20,30,40,50,70,80,90];

num.forEach((num) => {
    square = num * num
    console.log(square)
})

let detailEach = num.forEach((num) => {
    square = num * num
    return square
})
console.log(detailEach) 