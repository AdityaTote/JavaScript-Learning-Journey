    // let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());

// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());


let mycreatedDate = new Date("2024/02/15");
let mytimeStam = Date.now();
console.log(mytimeStam);
console.log(mycreatedDate.getTime());
console.log(mycreatedDate.getDate());
console.log(mycreatedDate.getMonth());
console.log(mycreatedDate.getDay());
console.log(mycreatedDate.getSeconds());
console.log(mycreatedDate.toLocaleString('default', {

    weekday : 'short' ,
    hour12 :'clock'
    
}))


