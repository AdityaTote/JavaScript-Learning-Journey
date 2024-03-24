function User (username , email ){
    this.username = username;
    this.email = email;
    
    return this ;
}

const userOne = new User('John','john@google.com');
const userTwo = new User('Ned', 'ned@google.com');
console.log(userOne);
console.log(userTwo);














