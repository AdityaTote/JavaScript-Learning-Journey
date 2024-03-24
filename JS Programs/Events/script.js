// document.getElementById('owl').onclick = function(){
//     alert('owl');
// }                // this method is does not give the detal info / feature of the fuction.

/*
Event :
type , timetsamp , defaultPrevented
taget  , currentTarget , toElement , srcElement
clientX , clientY , screenX , screenY
*/

// Event Propogation

// document.getElementById('images').addEventListener('click', ()=>{
//     console.log('images');
// } , false)
// document.getElementById('prayer').addEventListener('click',(e)=>{
//     console.log('prayer');
//     e.stopPropagation();
// }, false)                     // first the prayer eill be propogated and then the images will be propogated.

// document.getElementById('images').addEventListener('click',(e)=>{
//     console.log(e);
// })

document.querySelector('#images').addEventListener('click',(e)=>{
    let path = e.target.tagName;
    console.log(path);
    if(path === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode;
        // removeIt.parentNode.removeChild(removeIt);
        removeIt.remove();
    }
},false)