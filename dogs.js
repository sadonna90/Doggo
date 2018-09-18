var dogs;
var doggies;

//fetch('https://api.thedogapi.com/v1/breeds?limit=10&page=0')


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
  fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1')
    .then(response => response.json())
    .then(data => {
      dogs = data;

//      doggies = dogs.map(dog => dog.name).join(",<br>");
      populateCard(dogs[0]);
  });

  document.getElementById("dogGif").innerHTML = `<img src = "https://api.thedogapi.com/v1/images/search?format=src&mime_types=image/gif"\>`;
}

function getDogNames(){
  document.getElementById("newCard").outerHTML = doggies;
}





// added sampleJSON variable to fix error where Object was interpreted as a malformed function.
var sampleJSON = {"id":"rkiByec47","url":"https://cdn2.thedogapi.com/images/rkiByec47_640.jpg","breeds":[{"id":3,"name":"African Hunting Dog","life_span":"11 years","bred_for":"A wild pack animal","temperament":"Wild, Hardworking, Dutiful","weight":{"imperial":"44 - 66 lbs","metric":"20 - 30 kgs"},"height":{"imperial":"30 inches at the withers","metric":"76 cm at the withers"}}],"categories":[]}

// var dogImage = "https://cdn2.thedogapi.com/images/rkiByec47_640.jpg",
// dogName = "African Hunting Dog",
// dogDesc = "";

// console.log(sampleJSON.url)
// console.log(sampleJSON.breeds.name)
// console.log(sampleJSON.breeds.bred_for & ". " &  sampleJSON.breeds.temperament)


// https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1
//"bred_for":"A wild pack animal","temperament":"Wild, Hardworking, Dutiful"

var populateCard = function (dog) {
  let dogImage = dog.url;
  let dogName = dog.breeds[0].name;
  let dogDesc = dog.breeds[0].bred_for + ". " +  dog.breeds[0].temperament;

  dogCardHTML = `
    <div class="card" onclick="flip()">
      <div class="front">
        <img src = "${dogImage}" class="center">
      </div>
      <div class="back">
        <div class="textContainer">
          <h2>${dogName}</h2>
          <p>${dogDesc}</p>
        </div>
      </div>
    </div>
  `;
  document.getElementById("newCard").innerHTML = dogCardHTML;

}