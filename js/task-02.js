const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayLi = [];

ingredients.forEach((elem, index) => {
  arrayLi[index] = document.createElement('li');
  arrayLi[index].textContent = elem;
  arrayLi[index].classList.add('item');
});

const findUl = document.querySelector("ul");
findUl.append(arrayLi[0], arrayLi[1], arrayLi[2], arrayLi[3], arrayLi[4],arrayLi[5]);

