const item = document.querySelectorAll(".item");
console.log(`Number of categories: ${item.length}`);
console.log('');

var elems = item;
elems = Array.prototype.slice.call(elems);

elems.forEach(element => {
   // if (element === 'ul#categories')
    console.log('Category: ', element.firstElementChild.textContent);
    console.log('Elements: ', element.lastElementChild.children.length);
    console.log('');
});