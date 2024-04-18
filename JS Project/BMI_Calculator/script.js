// function calculateBMI() {
//     let height = parseFloat(document.getElementById('height').value);
//     let weight = parseFloat(document.getElementById('weight').value);
//     let resultElement = document.querySelector('#result');

//     if (isNaN(height) || isNaN(weight) || height === "" || weight === "" ) {       // Check if height and weight are valid numbers
//         resultElement.textContent="Please enter valid height and weight";
//         resultElement.style.background='Red';
//         resultElement.style.padding='10px';
//         resultElement.style.fontSize='25px';
        
//     }
//     else {
//         let bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);   // Calculate BMI & Convert height to meters

//         console.log("Your BMI is " + bmi);

    
//         if (bmi < 18.5) {
//             resultElement.textContent = `Your BMI is ${bmi}, so you are underweight.`;
//             resultElement.style.background='Red';
//             resultElement.style.padding='10px';
//             resultElement.style.fontSize='25px';
//         } else if (bmi >= 18.5 && bmi <= 24.9) {
//             resultElement.textContent = `Your BMI is ${bmi}, so you are normal weight.`;
//             resultElement.style.background='green';
//             resultElement.style.padding='10px';
//             resultElement.style.fontSize ='25px';
//         } else {
//             resultElement.textContent = `Your BMI is ${bmi}, so you are overweight.`;
//             resultElement.style.background='Red';
//             resultElement.style.padding='10px';
//             resultElement.style.fontSize ='25px';
//         }
//     }
// }

// document.addEventListener("keydown", function(event){
//     if (event.key === 'Enter') { 
//         calculateBMI(); 
//     }})

const form = document.querySelector('form');

form.addEventListener('submit' , (e) => {
    e.preventDefault();               
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let resultElement = document.querySelector('#result');

    if (isNaN(height) || isNaN(weight) || height === "" || weight === "" ) {       // Check if height and weight are valid numbers
        resultElement.textContent="Please enter valid height and weight";
        resultElement.style.background='Red';
        resultElement.style.padding='10px';
        resultElement.style.fontSize='25px';
        
    }
    else {
        let bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);   // Calculate BMI & Convert height to meters

        console.log("Your BMI is " + bmi);

    
        if (bmi < 18.5) {
            resultElement.textContent = `Your BMI is ${bmi}, so you are underweight.`;
            resultElement.style.background='Red';
            resultElement.style.padding='10px';
            resultElement.style.fontSize='25px';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultElement.textContent = `Your BMI is ${bmi}, so you are normal weight.`;
            resultElement.style.background='green';
            resultElement.style.padding='10px';
            resultElement.style.fontSize ='25px';
        } else {
            resultElement.textContent = `Your BMI is ${bmi}, so you are overweight.`;
            resultElement.style.background='Red';
            resultElement.style.padding='10px';
            resultElement.style.fontSize ='25px';
        }
    }
})