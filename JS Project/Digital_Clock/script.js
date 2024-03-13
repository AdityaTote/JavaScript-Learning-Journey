let clock1 = document.querySelector('#clock1')
let clock2 = document.querySelector('#clock2')

setInterval(function(){

    let mydate = new Date();
    clock1.innerHTML = mydate.toLocaleTimeString();
    let hours = mydate.getHours().toString().padStart(2, '0');
    let minutes = mydate.getMinutes().toString().padStart(2, '0');
    let seconds = mydate.getSeconds().toString().padStart(2, '0');
    clock2.innerHTML = `${hours}: ${minutes} : ${seconds}`;
},1000)