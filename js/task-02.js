const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const category = document.querySelector('#ingredients')
let list = '';
ingredients.forEach((el) => {
    const li = document.createElement('li')
    li.innerText = el;
    li.id = 'ingredients'
    category.appendChild(li)
})