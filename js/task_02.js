var items = document.getElementsByClassName('item');

for (var i = 0; i < items.length; i++) {
  var item = items[i];
  var title = item.getElementsByTagName('h2')[0];
  var innerList = item.getElementsByTagName('ul')[0];
  if (innerList) {
    var count = innerList.getElementsByTagName('li').length;
    title.textContent = title.textContent + ' [' + count + ']';
  }
}
