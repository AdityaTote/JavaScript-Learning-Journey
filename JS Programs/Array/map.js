const map = new Map()

map.set('Name', "John Snow");
map.set('Age', "22");
map.set('City', "Winter Fell");
map.set('Father', "Ned Stark");

// console.log(map);

for (const [key,value] of map) {   // for-of lop can be iterated on maps but not in objects 
    console.log(key +":-"+ value);
}
for (const key in map) {
    console.log(key);       // its is ot iterable
}
