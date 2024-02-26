let randomNo1 = Math.floor(Math.random()*6)+1;
let randomImg = "images/dice"+randomNo1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImg);

let randomNo2 = Math.floor(Math.random()*6)+1;
let randomImg2 = "images/dice"+randomNo2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

if( randomNo1 > randomNo2){
    document.querySelector("h1").textContent="Player1 Wins"
}
else if(randomNo1 < randomNo2){
    document.querySelector("h1").textContent="Player2 Wins"
}
else{
    document.querySelector("h1").textContent="Draw!"
}