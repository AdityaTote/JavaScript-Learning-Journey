const map = new Map()

map.set('Name', "John Snow");
map.set('Age', "22");
map.set('City', "Winter Fell");
map.set('Father', "Rhaegar Targaryen");

console.log(map);

for (const [key,value] of map) {   // for-of lop can be iterated on maps but not in objects 
    // console.log(key +":-"+ value);
}
for (const key in map) {
    // console.log(key);       // its is ot iterable
}



// In JavaScript, a Map is a collection of key-value pairs where each key is unique. Unlike arrays, where the index is numerical, in Maps, you can use any value, including objects, functions, or even other Maps, as keys or values. Maps provide a more flexible way to manage data compared to arrays, especially when you need to associate values with specific keys.

// Creating a Map
// You can create a Map in JavaScript using the Map constructor or by using the Map literal syntax {}.


// Creating an empty Map
// let myMap = new Map();

// Creating a Map with initial values
// let myMap = new Map([
//     ['key1', 'value1'],
//     ['key2', 'value2'],
//     ['key3', 'value3']
// ]);
// Adding and Accessing Values
// You can add key-value pairs to a Map using the set() method and access them using the get() method.

// javascript
// Copy code
// myMap.set('key4', 'value4');

// console.log(myMap.get('key1')); // Output: value1
// Iterating through a Map
// You can iterate over a Map using various methods such as forEach, for...of loop, or accessing keys/values directly.

// javascript
// Copy code
 // Using forEach
// myMap.forEach((value, key) => {
//     console.log(`${key} = ${value}`);
// });

 // Using for...of loop
// for (let [key, value] of myMap) {
//     console.log(`${key} = ${value}`);
// }
// Checking Existence and Size
// To check if a key exists in a Map, you can use the has() method. To get the size of a Map, you can use the size property.

// javascript
// Copy code
// console.log(myMap.has('key1')); // Output: true
// console.log(myMap.size); // Output: 4
// Removing Entries
// To remove a specific entry from a Map, you can use the delete() method. To clear all entries from a Map, you can use the clear() method.

// javascript
// Copy code
// myMap.delete('key2');
// myMap.clear();
// Key Features of Maps
// Order Preservation: Maps preserve the order of elements, which means the insertion order is maintained.

// Flexibility: Keys in a Map can be of any data type, including objects and functions, which is not possible in objects.

// Efficiency: Maps are optimized for frequent addition and removal of elements.

// No Implicit Type Conversion: Unlike objects, keys in a Map are not converted to strings. This prevents unintended key collisions.

// When to Use Maps
// When you need to associate values with unique keys: Maps are suitable for scenarios where you need to store key-value pairs with unique keys.

// When you need to preserve the order of elements: If the order of insertion is important, Maps are preferable over objects.

// When you need flexible keys: Maps allow you to use any data type as keys, providing more flexibility compared to objects.

// Understanding Maps in JavaScript is essential for managing data effectively and efficiently. With their flexibility and features, Maps offer a powerful tool for handling complex data structures in JavaScript applications.


let operation = new Map([
    ['sum' ,function(num1 ,num2){
        console.log(num1+num2);
    } ],
    ['sub' , function(num1 , num2){
        console.log(num1-num2);
    }]
])

operation.get('sum')(8,6);
operation.get('sub')(8,6);
