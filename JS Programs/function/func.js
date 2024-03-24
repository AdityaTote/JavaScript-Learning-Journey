// function getMilk(price){
//     let bottle = Math.floor(price / 1.5) ;
//     console.log("bottles are :" + bottle);
    
// }

// getMilk(15);


// function lifeInWeeks(age) {
    
//     let yearRemain = 90 - age ;
//     let x =  yearRemain*365;            // let x = 32850 - ( age *365);
//     let y =  yearRemain*52;            // let y = 4680 - ( age *52);
//     let z =  yearRemain*12;            // let z = 1080 - ( age *12);
    
//     console.log("You have " +x +" days,"+y+ " weeks, and "+z+" months left.");
        
// }
// lifeInWeeks(53);


// function getMilk(price){
    
//     console.log("Bottle are "+calcBot(price , 1.5) +" bought");
//     console.log("change "+change(price , 1.5) );

// }
// function calcBot (priceMilk , costperBot){
//     let bottle = Math.floor(priceMilk /costperBot);
//     return bottle;

// }
// function change (priceMilk , costperBot){
//     let chg = priceMilk % costperBot ;
//     return chg;
// }

// getMilk(16);


//Create your function below this line.
//The first parameter should be the weight and the second should be the height.



// function bmiCalculator(weight , height){
    
//     let bmi =(weight)/Math.pow(height,2) ;
//     console.log("BMI " +bmi);
//     return Math.round(bmi);
// }
// var bmi = bmiCalculator(100, 1.8);

// BMI Calculator
// function bmiCalculator(weight, height) {
//     let bmi = weight / Math.pow(height, 2);
    
//     if (bmi < 18.5) {
//         console.log( "Your BMI is " + bmi + " , so you are underweight");
//     }
//     if (bmi > 18.5 && bmi < 24.9) {
//         console.log( "Your BMI is " + bmi + " , so you are normal weight.");
//     } if (bmi > 24.9){
//         console.log( "Your BMI is " + bmi + " , so you are overweight.");
//     }
// }
// bmiCalculator(52,4.6)

// Leap Year 

// function isLeap(year) {
//         if ( year % 4 === 0 ){          
//             if(year % 100 === 0 ){                     
//                 if( year % 400 === 0){
//                     console.log("Leap year.");
//                 } else{
//                     console.log("Not leap year.");
//                 }
//            else{   
//                 console.log("Leap year.");
//             }
//         }
//         else{
//             console.log( "Not leap year.");
//         }
// }

// isLeap(400);

// function add(num1,num2){
//     return num1+num2;
// }
// function sub(num1,num2){
//     return num1-num2;
// }
// function multiply(num1,num2){
//     return num1*num2;
// }
// function divide(num1,num2){
//     return num1/num2;
// }
// function calculate(num1,num2,operator){
//     return operator;
// }
// calculate(2,6,multiply);


one(1,2)         //can be call above function or below fuction
function one(num1,num2){
    console.log(num1+num2);
}

// two(1,8)   // cannot call above of func
let two = function (num1,num2){
    console.log(num1+num2);
}
two(1,9)







