// let a = ["Bat", "Ball", "Stump","Helmet"];
// console.log(a.length);
// console.log(a[2]);
// console.log(a.includes("Stump"));


// let a = ["John","Ned","Robb","Joffery"];
// let retrieve = prompt("Entre the data :");

// if(a.includes(retrieve)){
//     alert("Welcome");
// } 
// else{
//     alert("Invalid Name");
// }


// let a = [];
// let count = 1;

// function inp(){
    
//     if(count % 3 === 0 && count % 5 === 0 ){
//         a.push("FizzBuzz")
//     }
//     else if (count % 3 === 0 ){
//         a.push("Fizz");
//     } 
//     else if(count % 5 ===0 ){
//         a.push("Buzz")
//     }
     
//     else {
//         a.push(count);
//     }
//     count++;
//     console.log(a);
    
    
    
// }
// inp();




let myArr = [0,1,2,3,4,5,6,7,8,9,];

// console.log(myArr[5]); // Retrieve the value present in array at the [index].

// myArr.push(14); // New elements to add to the array at the end of array.
// console.log(myArr); // Appends new elements to the end of an array, and returns the new length of the array

// myArr.pop(); // Removes the last element from an array and returns it. 
// console.log(myArr)// If the array is empty, undefined is returned and the array is not modified.

// myArr.unshift(15)// Elements to insert at the start of the array.
// console.log(myArr);// Inserts new elements at the start of an array, and returns the new length of the array.

// myArr.shift();// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
// console.log(myArr);

// console.log(myArr.length); // Displays the total length of an array.

// console.log(myArr.includes(5)); // The element to search for.
     // Determines whether an array includes a certain element, returning true or false as appropriate.

// console.log(myArr.indexOf(8));// The value to locate in the array.
    // Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
    
// console.log('A',myArr);

// let myArr1 = myArr.slice(1,4);// The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
    // Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

// console.log(myArr1)
// console.log('B',myArr);

// let myArr2 = myArr.splice(1,4);// The zero-based location in the array from which to start removing elements.
     // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

// console.log(myArr2);
// console.log('C',myArr);



let languages = ["Java", "Python","JaaScript","C++","Ruby","Rust"]

for (const key of languages) {
    // console.log(key);            // provide value of index
}

for (const key in languages) {
    // console.log(`${key} is for ${languages[key]}`);         // provide index of value
}

languages.forEach(function(index){
    // console.log(index);
})

languages.forEach(index => {
    // console.log(index);
});

  function print(item) {
    // console.log(item);
}

// languages.forEach(print)



// Filter IN JS            :-  follows the condn in function
let nums = [1,2,3,4,5,6,7,8,9]
const myNum = nums.filter((num) =>num <8)
const myNum1 = nums.filter((num) =>{
    return num >4
})
// console.log(myNum);
// console.log(myNum1);


















