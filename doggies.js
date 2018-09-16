function createNode(element){
  return document.createElement(element);
}
function append(parent, el){
  return parent.appendChild(el);
}

const ul = document.getElementById("dogs");

fetch('https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=3')
  .then(response => response.json())
  .then(data => {
    let dogs = data.results;
    return dogs.map(dog => {
      let li = createNode('li'),
      img = createNode('img'),
      span = createNode('span');
      img.src=dog.url;
      span.innerHTML= `dog.breeds.name`;
      
      append(li, img);
      append(li, span);
      append(ul, li);
    })
});


//`This is #{fname} #{lname} who is awesome.<br>`
//https://www.youtube.com/watch?v=0bec1BmeY4c
//[
//  {
//    "id": "Hylo4Snaf",
//    "url": "https://cdn.thedogapi.com/images/Hylo4Snaf.jpeg",
//    "width": 1200,
//    "height": 922,
//    "mime_type": "image/jpeg",
//    "breeds": [
//      {
//        "id": 235,
//        "name": "Spanish Water Dog",
//        "weight": " 30 to 50 pounds",
//        "height": "16 to 20 inches at the shoulder",
//        "life_span": "12 to 15 years",
//        "breed_group": "Sporting"
//      }
//    ],
//    "categories": []
//  }
//]
