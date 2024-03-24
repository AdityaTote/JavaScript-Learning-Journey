let div = document.createElement('div');
div.classList.add('card');


let img = document.createElement('img');
img.classList.add('img');


let name = document.createElement('h1');
name.classList.add('username');

let follower = document.createElement('p');
follower.classList.add('follower');

let following = document.createElement('p');
following.classList.add('following');

let bio = document.createElement('p');
name.classList.add('bio');

div.appendChild(img);
div.appendChild(name);
div.appendChild(follower);
div.appendChild(following);
div.appendChild(bio);


document.body.appendChild(div);

const requestUrl = 'https://api.github.com/users/AdityaTote' 
const xhr = new XMLHttpRequest();

xhr.open('GET', requestUrl);
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
       const res = JSON.parse(this.responseText);
        img.src = res.avatar_url;
        name.innerHTML = `<h3>${res.name}</h3>`
        follower.textContent= `Follower:${res.followers}`;
        following.textContent= `Following:${res.following}`;
        bio.innerHTML = `<p style='color : white'><b>BIO:</b> ${res.bio}</p>`
    }
}
xhr.send();

