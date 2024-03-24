//  this  

const data ={
    userName : "john" ,
    age : 45 ,
    welcome : function () {
        console.log(`${this.userName} , welcome to page. `);
        console.log(this);  // Her this refer to the obj data so it show data obj
    }
}
data.welcome();
data.userName="Ned";
data.welcome();
console.log(this);  // here this refer to the goba scope which is empty 


// this is uesd in object only 

// Arrow Function

const add = (num1,num2) => {
    return num1+num2 ;  // explicit return
}
console.log(add(5,8));

const sub = (a,b) => (a-b) // implicit return   
console.log(sub(9,7));












