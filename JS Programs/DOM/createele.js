function addLang(lang){
    let ele = document.createElement('li');
    ele.innerHTML=`${lang}`;
    document.querySelector('.lang').appendChild(ele);
}
addLang("Python")        // this method is used in small programs but which there are more list then it takes time for raversing the list so it is not refereabel 

function addllang(lang){
    let ele = document.createElement('li');
    ele.appendChild(document.createTextNode(lang));
    ele.style.color = 'orange'
    document.querySelector('.lang').appendChild(ele);
}
addllang('Java')
addLang('Kotlin')

// Edit

let slang = document.querySelector('li:nth-child(2)');
slang.innerHTML='Golang';  // not appropiate method 

let flang = document.querySelector('li:nth-child(4)');
let newel = document.createElement('li');
newel.appendChild(document.createTextNode('Solidity'));
flang.replaceWith(newel);

// Remove

let del = document.querySelector('li:nth-child(3)')
del.remove();