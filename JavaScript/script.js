// // Array

// let arr = ["cea","rr",2,3,4,true,null];
// console.log(arr.length);

// // console.log("before push: ", arr);

// // push()
// // arr.push("Kartavya")
// // console.log("after push: ", arr);

// // unshifted
// // arr.unshift("Kartavya");
// // console.log("unshift: ", arr);

// //splice-> remove element 
// console.log("before splice: ", arr);
// arr.splice(1,3);
// console.log("after splice: ",arr);
// console.log(arr.length);


// console.log(arr);


let num = [10,20,30,40];
console.log(num);

// for(let i=0;i<num.length;i++){
//     console.log(num[i]);
// }

// alternative of for loop tp print elements 
num.forEach((val,index,array) => {
    console.log(val,index,array)
});