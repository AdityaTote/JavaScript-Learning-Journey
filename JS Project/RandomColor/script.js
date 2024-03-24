const randomColor = ()=>{
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0; i<6 ; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
     return color;

}

let colorInterval;
const startChangingColor= ()=>{
    const changeColor = ()=>{
        document.body.style.backgroundColor = randomColor();
    }
    if (!colorInterval){
    colorInterval = setInterval(changeColor , 2000);}
}
const stopChangingColor=()=>{
    clearInterval(colorInterval);
    colorInterval = null ;
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)