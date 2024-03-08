let height = document.getElementById('height');
let weight = document.getElementById('weight');
let resultElement = document.querySelector('#result');

function calculateBMI() {
    let num1 = parseFloat(height.value);
    let num2 = parseFloat(weight.value);

    if (isNaN(num1) || isNaN(num2) || num1 <= 0 || num2 <= 0) {       // Check if height and weight are valid numbers
        alert("Please enter valid height and weight.");
        return;
    }

    let bmi = num2 / Math.pow(num1 / 100, 2);   // Calculate BMI & Convert height to meters

    console.log("Your BMI is " + bmi.toFixed(2));

   
    if (bmi < 18.5) {
        resultElement.textContent = "Your BMI is " + bmi.toFixed(2) + ", so you are underweight.";
        resultElement.style.background='Red';
        resultElement.style.padding='10px';
        resultElement.style.fontSize='25px';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultElement.textContent = "Your BMI is " + bmi.toFixed(2) + ", so you are normal weight.";
        resultElement.style.background='green';
        resultElement.style.padding='10px';
        resultElement.style.fontSize ='25px';
    } else {
        resultElement.textContent = "Your BMI is " + bmi.toFixed(2) + ", so you are overweight.";
        resultElement.style.background='Red';
        resultElement.style.padding='10px';
        resultElement.style.fontSize ='25px';
    }
}

document.addEventListener("keydown", function(event){
    if (event.key === 'Enter') { 
        calculateBMI(); 
    }})