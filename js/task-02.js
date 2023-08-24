const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayLi = ingredients.map((elem, index) => {
  const temp = document.createElement('li');
 
  elem.textContent = elem;
  elem.classList.add('item');
});

const findUl = document.querySelector("ul");
findUl.append(...arrayLi);

