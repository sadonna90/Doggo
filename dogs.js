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
