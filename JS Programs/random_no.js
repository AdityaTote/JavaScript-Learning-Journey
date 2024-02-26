// Random numbers Generations

// let n = Math.random();
// n =n*10;
// console.log(n);
// n= Math.floor(n)+1;
// console.log(n);


//Love Calculator
let name1 = prompt("Entre Your Name: ");
let name2 = prompt("Entre Your loves Name: ");
let n = Math.random();
n= Math.floor(n*100)+1;
if (n > 70){
    alert("Your Love Score is: " +n+"%"+" You are Laila and Manjnu" );
}
if(n > 30 && n<=70 ){
    alert("Your Love Score is: " +n+"%");
}
 else {
    alert("Your Love Score is: " +n+"%" + " You are Deepika and Ranveer");
}



