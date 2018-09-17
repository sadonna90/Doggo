var dogs;
var doggies;

fetch('https://api.thedogapi.com/v1/breeds?limit=10&page=0')
  .then(response => response.json())
  .then(data => {
    dogs = data;
    doggies = dogs.map(dog => dog.name).join(",<br>");
    getDogNames();
});

function getDogNames(){
  document.getElementById("ourdogs").innerHTML = doggies;
}

//get random photos

var pics;
var dogPics;

// fetch('https://api.thedogapi.com/v1/images/search?format=src&mime_types=image/gif')
//   .then(response => response.blob())  //changed to appropriate data type for images
//   .then(data => {
//     pics = data;
//     //dogPics = pic.map(pic => pic.name).join(",<br>");
//     getDogPics();
// });

function getDogPics(){
//  document.getElementById("dogGif").innerHTML = dogPics;
  document.getElementById("dogGif").innerHTML = `<img src = "https://api.thedogapi.com/v1/images/search?format=src&mime_types=image/gif"\>`;
}

// added sampleJSON variable to fix error where Object was interpreted as a malformed function.
var sampleJSON = {"id":"rkiByec47","url":"https://cdn2.thedogapi.com/images/rkiByec47_640.jpg","breeds":[{"id":3,"name":"African Hunting Dog","life_span":"11 years","bred_for":"A wild pack animal","temperament":"Wild, Hardworking, Dutiful","weight":{"imperial":"44 - 66 lbs","metric":"20 - 30 kgs"},"height":{"imperial":"30 inches at the withers","metric":"76 cm at the withers"}}],"categories":[]}