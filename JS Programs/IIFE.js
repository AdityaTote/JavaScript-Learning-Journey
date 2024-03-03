// Immediately Invoked Function Expressions

( function print(){
    console.log(`test 1 checked`)
})(); // ; should be present to progress the code

( (name) => {
    console.log(`test 2 ${name}`);
}
)("checked");

// to remove the pollution from global scope. 
// this is ussed to invole the fuction immediatly.
 