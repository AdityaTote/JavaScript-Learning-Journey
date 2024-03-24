let myArr = [1,2,3,4,5,6]

let sumArr = myArr.reduce(function (acc ,currval){
    // console.log(`acc : ${acc}, currval : ${currval} `);
    return acc + currval ;
},0)

// console.log(sumArr);

let myTotal = myArr.reduce((acc , currval) => acc + currval ,0 )

// console.log(myTotal);

let cart =[
    {
        itemName : "JS course" ,
        price : 2999
    },
    {
        itemName : "Py course" ,
        price : 999
    },
    {
        itemName : "data science course" ,
        price : 12999
    },
    {
        itemName : "modile dev course" ,
        price : 5999
    },
    {
        itemName : "Java  course" ,
        price : 4999
    },
]

let total = cart.reduce((acc , item) => acc + item.price ,0 );

console.log(total);