const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const category = document.querySelector('#ingredients')
let list = '';
ingredients.forEach((el) => {
    list += `<li class="item"> ${el}</li>`
})

category.insertAdjacentHTML('afterend', list);