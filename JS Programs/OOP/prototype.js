const superMan = {
    BatMan : 'Rich',
    IronMan : 'Rich',
    Thor : 'Hammer',

    supes : function(){
        const keys = Object.entries(superMan).find(([key , value ])=> {
            value === 'Rich';
            return key ;
        })
        console.log(`I am ${keys}`);
    }

}

Object.prototype.hello = () => {                     // creating own function that cn be work
    console.log(`This works over all objects`);
}

superMan.hello();

const myArr = [1,2,3,4,5,6,7,8,9];
myArr.hello();


Array.prototype.printMe = (str) => {
    console.log(`${str}: I am contain in object ?`);
}   

myArr.printMe('Array');
// superMan.printMe('Object'); // object , string , function will not work 
