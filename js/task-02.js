const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const arrayLi = ingredients.map((elem) => {
  const itemLi = document.createElement("li");

  itemLi.textContent = elem;
  itemLi.classList.add("item");
  return itemLi;
});

const findUl = document.querySelector("ul");
findUl.append(...arrayLi);
