let dic = document.createElement('div');
dic.className = "divClass";
dic.id=Math.round(Math.random()*10);
dic.style.color="orange";
dic.style.backgroundColor="Dark Blue";
const addText = document.createTextNode("Let's do somthing");
dic.appendChild(addText);
document.body.appendChild(dic);

