// Basic Representation 
// representation through assigning variable
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('1st Async');
        resolve();
    },1000)
});
promiseOne.then(()=>{
    console.log('1st resolve');
})                                                 

// Representation without variable

new Promise((resolve , reject)=>{
    setTimeout(()=>{
        console.log('2nd async');
        resolve();
    },1000)
}).then(()=>{
    console.log('2nd resolve')
})

// Showing Object in Output

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:'JohnSnow',email:'john@snow.com'})
    },2000)
});

promiseThree.then((user)=>{
    console.log(user);
})

// Using then , catch , finally

const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const err = false;
        if(!err){
            resolve({username:'JohnSnow',email:'john@snow.com'})
        } else {
            reject('ERROR:Something Went Wrong')
    }},2000)
});
promiseFour.then((user)=>{
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log('promise is resolve or reject')
});

// Using Try catch method

const promiseFive = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const err = false;
        if(!err){
            resolve({username:'JohnSnow',email:'john@snow.com'})
        } else {
            reject('ERROR:Something Went Wrong')
    }},4000)
});

async function consumePromiseFive(){
   try {
        const response = await promiseFive ;
        console.log(response)
   } catch (error) {
        console.log(error)
   }
}
consumePromiseFive()

// use of async function
async function getData(){
    
    try{
        const res = await fetch('https://api.github.com/users/AdityaTote');
        const data = await res.json()
        console.log(data);
    } catch {
        console.log('E:Error');
    }
}
// getData();

// Fetch using then catch 

fetch('https://api.github.com/users/AdityaTote').then((response)=>{
    return response.json()
}).then((data)=>{
    return data.name;
}).then((user)=>{
    console.log(user);
}).catch(()=>{
    console.log('ERROR');
})

