const map = new Map()

map.set('Name', "John Snow");
map.set('Age', "22");
map.set('City', "Winter Fell");
map.set('Father', "Ned Starck");

// console.log(map);

for (const [key,value] of map) {   // forof lop can be iterated on maps but not in objeetcs 
    console.log(key +":-"+ value);
}
for (const key in map) {
    console.log(key);       // its is ot iteratable
}
