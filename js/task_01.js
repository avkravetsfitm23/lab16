var categories = document.getElementsByClassName('item');
console.log('Кількість категорій: ' + categories.length);

for (var i = 0; i < categories.length; i++) {
  var category = categories[i];
  var title = category.getElementsByTagName('h2')[0].textContent;
  var innerList = category.getElementsByTagName('ul')[0];
  var elementsCount = 0;
  if (innerList) {
    elementsCount = innerList.getElementsByTagName('li').length;
  }
  console.log('Категорія: ' + title);
  console.log('Кількість елементів: ' + elementsCount);
}
