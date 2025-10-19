import { breeds } from './data_sample.js';

var list = document.getElementById("breeds");
var markup = "";

for (var i = 0; i < breeds.length; i++) {
  var breed = breeds[i];

  var imgSrc = breed.reference_image_id
    ? "https://cdn2.thedogapi.com/images/" + breed.reference_image_id + ".jpg"
    : "https://via.placeholder.com/250x200?text=No+Image";

  var groupHTML = "";
  if (breed.breed_group) {
    groupHTML = '<p class="group">' + breed.breed_group + '</p>';
  }

  var bredForHTML = "";
  if (breed.bred_for) {
    bredForHTML = '<p class="group">' + breed.bred_for + '</p>';
  }

  var temperamentHTML = "";
  if (breed.temperament) {
    temperamentHTML = '<p>' + breed.temperament + '</p>';
  }

  var weightHTML = "";
  if (breed.weight && breed.weight.metric) {
    weightHTML = '<p>Weight: <span>' + breed.weight.metric + ' kg</span></p>';
  }

  markup +=
    '<li class="card">' +
      '<img src="' + imgSrc + '" alt="' + breed.name + '">' +
      '<h2>' + breed.name + '</h2>' +
      groupHTML +
      bredForHTML +
      temperamentHTML +
      weightHTML +
    '</li>';
}

list.insertAdjacentHTML("beforeend", markup);
