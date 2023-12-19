
// const posts = [
//     {title:'Post One', body: 'This is post number one'},
//     {title:'Post Two', body: 'This is post number two'}
// ];

// function createPost(post) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             resolve();
//         }, 2000);
//     })
// }
// function getPosts() {
//     setTimeout(() => {
//     posts.forEach(function (post){
//     const div = document.createElement('div');
//     div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//     document.querySelector('#posts').appendChild(div);
//         });
//     }, 1000);
// }
// createPost({title:'Post Three', body:'This is post number three'})
// .then(getPosts);

// // Create a Promise This is a Non-Blocking ASync code 
// const promise = new Promise((resolve, reject) => {
//     // Do some Async task
//     setTimeout(() => {
//         console.log('Async Task complete');
//         resolve(); // This resolve is insted of a callback functions
//     }, 1000);
// })
// promise.then(() => {
//     console.log('Promise consumed..');
// })

// const getUser = new Promise((resolve, reject) => {
//     // Do some Async task
//     setTimeout(() => {
//         let error = true;

//         if (!error) {
//             resolve({ name:'John Cena', age: 30});
//         } else {
//             reject('Error: something went wrong bro')
//         }
//     }, 1000);
// })
// getUser
// .then((user) => {console.log(user)})
// .catch((error) => console.log(error));

// console.log('Hello from global scope');


                    // This is Promises 
function getData(endpoint) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.open('GET', endpoint);

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject('Something Went wrong');
                }
            }
        }
        setTimeout(() => {
            xhr.send();
        }, Math.floor(Math.random() * 3000) + 1000);
    })
}
// // create these varaibles to store in the json values in 
// const moviesPromise = getData('./movies.json');
// const actorsPromise = getData('./actors.json');
// const directorsPromise = getData('./directors.json');

// const dummyPromise = new Promise((resolve, reject) => {
//     resolve('Hello Wrold')
// });
// // Using promise ALL
// Promise.all([moviesPromise,actorsPromise,directorsPromise,dummyPromise])
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => console.log(error));

function fetchUser() {
 showSpinner();
 fetch('https://randomuser.me/api')
 .then((res) => {
  if (!res.ok) {
throw new Error('Request Failed');
  }

  return res.json()
})
 .then((data) => {
    hideSpinner();
    displayUser(data.results[0]);
 })
 //Here we define the Error handler - .catch() method
 .catch((error) => {
  document.querySelector('#user').innerHTML = `
  <p class="text-xl text-center text-red-500 mb-5">${error}</p>
  `
 })
}

function displayUser(user) {
    const userDisplay = document.querySelector('#user');
      
    if (user.gender === 'female') {
        document.body.style.backgroundColor = 'rebeccapurple';
    } else {
        document.body.style.backgroundColor = 'steelblue';
    }

 // This i the quick and dirty way of doing it .. you can change this ti clean code 
 // refer to shopping list project when building
userDisplay.innerHTML = `
 <div class="flex justify-between">
<div class="flex">
  <img
    class="w-48 h-48 rounded-full mr-8"
    src="${user.picture.large}"
  />
  <div class="space-y-3">
    <p class="text-xl">
      <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
    </p>
    <p class="text-xl">
      <span class="font-bold">Email: </span>${user.email}
    </p>
    <p class="text-xl">
      <span class="font-bold">Phone: </span>${user.phone}
    </p>
    <p class="text-xl">
      <span class="font-bold">Location: </span>${user.location.city}
    </p>
    <p class="text-xl"><span class="font-bold">Age: </span>${user.dob.age}</p>
  </div>
</div>
</div>`
};

function showSpinner(){
    document.querySelector('.spinner').style.display = 'block';
}
function hideSpinner(){
    document.querySelector('.spinner').style.display = 'none';
}
document.querySelector("#generate").addEventListener('click',fetchUser);
fetchUser();


// Using Async& Await insted of .then promise call backs
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}
// Async with Arrow functions

const getPosts1 = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  console.log(data);
}

// getUsers();
// getPosts1(); dont forget to call the functions :) 

try {
  // this here yo handle all error 
  // trow new error 
  // fro the async & await functions
} catch (error) {
  
}

async function getAllData() { // This functions refers to getData endpoint (Par)
const movies = await getData('./movies.json');
console.log(movies); // This way is cleaner then writing .then ^^ Refer to getData function
const actors = await getData('./actors.json');
console.log(actors); 
const directors = await getData('./directors.json');
console.log(directors); 
// or
console.log(movies,actors,directors);
};

// getAllData(); call up the function


// with Async Arrow functions u type async () => ****  
//create the async functions with Fetch()
async function getAllDataWithFetch() {
  const moviesRes = await fetch('./movies.json') ;
  const movies = await moviesRes.json();

  const actorsRes = await fetch('./actors.json') ;
  const actors = await actorsRes.json();

  const directorsRes = await fetch('./directors.json') ;
  const directors = await directorsRes.json();
  
  console.log(movies,actors,directors);
}