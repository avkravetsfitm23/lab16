import { breeds } from './data_sample.js';

var list = document.querySelector("ul");
var items = [];

for (var i = 0; i < breeds.length; i++) {
  var breed = breeds[i];

  var li = document.createElement("li");
  li.className = "card";

  var img = document.createElement("img");
  img.src = "https://cdn2.thedogapi.com/images/" + breed.reference_image_id + ".jpg";
  img.alt = breed.name;

  var name = document.createElement("h2");
  name.textContent = breed.name;

  if (breed.breed_group) {
    var group = document.createElement("p");
    group.className = "group";
    group.textContent = breed.breed_group;
    li.appendChild(group);
  }

  if (breed.bred_for) {
    var bredFor = document.createElement("p");
    bredFor.className = "group";
    bredFor.textContent = breed.bred_for;
    li.appendChild(bredFor);
  }

  if (breed.temperament) {
    var temperament = document.createElement("p");
    temperament.textContent = breed.temperament;
    li.appendChild(temperament);
  }

  if (breed.weight && breed.weight.metric) {
    var weight = document.createElement("p");
    weight.innerHTML = "Weight: <span>" + breed.weight.metric + " kg</span>";
    li.appendChild(weight);
  }

  li.insertBefore(img, li.firstChild);
  li.insertBefore(name, li.firstChild);

  items.push(li);
}

list.append(...items);
