// const Product = {
//      title : " Parker Pen ",
//      rating : " 4 ",
//      offer : " 5 ",
//      Price : " 270 "
// };

// console.log(Product)

// const Profile = {
//     title : "shardhakhapra" ,
//     isFollow : false ,
//     Post : "195 Post",
//     Follower : "596K Followers",
//     Name : "Shradha Khapra" ,
//     Status : "Entrepreneur",
//     About : " Apna College |Ex-Microsoft , DRDO /n To educate someone is highest privilege"

// };

// console.log(Profile)


// var houseKeeper = {
//     Name : "Shila" ,
//     Age : "31" ,
//     Experience : "5 Years" ,
//     Languages : ["Marathi" ," Hindi"] , 
//     City : "Pune"

// }

// Constructor Function 
// function houseKeeper(name,age,experience,languages,city){
//     this.name = name;
//     this.age = age;
//     this.experience = experience;
//     this.languages = languages;
//     this.city = city;
//     this.clean = function(){
//         alert("cleaning is in Progress!");
//     }
// }

// var houseKeeper1 = new houseKeeper("Shila",31,5,["Marathi","Hindi"],"Pune");
// console.log(houseKeeper1);



// Object Literals
const mySmb = Symbol();

const myObJ = {
    name : "Aditya" ,
    "Full name" : "Aditya Tote" ,
    Age : 19 ,
    Email : "adityatote@xyz.com" ,
    [mySmb] : "Key 1"
}

// console.log(myObJ.name); // Accesing value by dot notation
// console.log(myObJ["name"]); // Accesing the value using [] method
// console.log(myObJ["Full name"]);
// console.log(myObJ[mySmb]); // Accessing the symbol
myObJ.Email = "adityatote@google.com"; // change the value inside the obj 
//console.log(myObJ);
//Object.freeze(myObJ); // locks(unable to change the value in obj ) the object pass in argument 
myObJ.Email = "adityatote@xyz.com";
//console.log(myObJ);

myObJ.greeting = function(){
    console.log("Hello");
}
myObJ.greeting1 = function(){
    console.log(`Welcome ${this.name}`);
}
// console.log(myObJ.greeting());
// console.log(myObJ.greeting1());

// Singalton object

const xyZ = new Object() ; 


// Nested Obj

const tinderUser = {
    UserName : {
        fullName : {
            firstName : "John" ,
            lastName : "Snow"
        }
    }
}

// console.log(tinderUser.UserName.fullName.firstName);


//merge of two object


const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj3 = {5:"a",6:"b"};

const obj4 = Object.assign({},obj1,obj2,obj3); // Here , empty object is {} is target and other obj are source

const obj5 = {...obj1,...obj2,...obj3}; 
// console.log(obj4);
// console.log(obj5);


// Some IMP Propertie of Objects

const User = {}
User.id="1";
User.name="John";
User.isLoggedIn=true;

// console.log(Object.keys(User));
// console.log(Object.values(User));
// console.log(Object.entries(User));
// console.log(User.hasOwnProperty('isLoggedIn'));

// IN OBJECT FOROF LOOP CAN NOT B E USED FOR ITERABLE 

// IN OBJECTS FORIN LOOP CAN BE ITERABLE

const languages = {
    JS :"JavaScript" ,
    cpp : "C++" , 
    rb :"Ruby"
}

for (const key in languages) {
    console.log(`${key} is ${languages[key]}`);
}