    let buttons = document.querySelectorAll('.button')   // list the buttons i.e grey , white , blue , green
    let body = document.querySelector('body')        // select sthe body 

    // for (let i = 0; i < buttons.length; i++) {             // using simple for loop
    //     buttons[i].addEventListener('click',(e)=>{              // add click as eventlister 
    //         let col = e.target.id;
    //         console.log(col);
    //         if (col=== 'grey'){
    //             body.style.backgroundColor=col;
    //         }
    //         else if(col=== 'white'){
    //             body.style.backgroundColor=col;
    //         }
    //         else if(col=== 'blue'){
    //             body.style.backgroundColor=col;
    //         }
    //         else if(col=== 'yellow'){
    //             body.style.backgroundColor=col;
    //         }
    //     })
        
    // }

    // alternative 

    buttons.forEach(function(button){                         // using foreach loop
        button.addEventListener('click',(e)=>{
            let col = e.target.id;
            if ( col === 'grey'){
                body.style.backgroundColor=col;
            }
            else if(col=== 'white'){
                body.style.backgroundColor=col;
            }
            else if(col=== 'blue'){
                body.style.backgroundColor=col;
            }
            else if(col=== 'yellow'){
                body.style.backgroundColor=col;
            }
        
    })
    })