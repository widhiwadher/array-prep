const arr = [3,5,7,8,4,2]

// //  double the number

//   function double (arr){
//       return  arr*2 ;
//   }
//   console.log(arr.map(double));

// // triple the number

// function triple (arr) {
//     return arr*3 ; 
// }

// console.log(arr.map(triple));

// // make it binary

// function binary (arr) {
// return arr.toString(2);
// }

// console.log(arr.map(binary));



// another syntax is 

const output = arr.map((x) => x.toString(2));
console.log (output);


// filter function  


function oddNumber  (x)  {
  return x % 2 ; 
}
 
const result  = arr.filter(oddNumber); 
console.log(result);

// find even value 

function Evenvalue (x) {
return x % 2 === 0 
}

console.log(arr.filter(Evenvalue));