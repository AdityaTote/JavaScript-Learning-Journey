let display = document.getElementById("display");  // Display Id called to maniplulate the input tag
let appendEnabled = true;  // Flag delared for functionality of appendToDisplay

function appendToDisplay(input){    // Function for appending th input value from user like 5+8,etc

    if (appendEnabled) {
        if (!isNaN(input) || input === ".") {
            // Handle numeric inputs separately
            // If it's a number or a dot and the display is not "Invalid Format"
            if (display.value !== "Invalid Format") {
                display.value += input;
            }
        } else {
            display.value += input;
        }
    }
}

function calculate(){            // fuction to caculate the values from user 
    try{

        display.value = eval(display.value) ;         // eval function is used to evaluate the expression
    }
    catch(error){
        display.value="Invalid Format";         // if the expression is invalid then it will display Invalid Format
        appendEnabled = false;                  // appendEnabled is set to false
    }
    
}

function clearDisplay(){         // to clear the screen 
    display.value="";             
    appendEnabled = true;
}

document.addEventListener("keypress", function(event) {
    
    const key = event.key;                      
    const validKeys = ["0","1","2","3","4","5","6","7","8","9","/","*","-","+","."];            

    if (validKeys.includes(key)) {
        appendToDisplay(key);
    }else if (event.keyCode === 13) { 
        calculate(); 
    } else if (event.keyCode === 8) {
        backSpace();
    } else if (event.keyCode === 27) {
        display.value="";             
        appendEnabled = true;
    }
});


function backSpace() {
    display.value = display.value.slice(0, -1);             
}