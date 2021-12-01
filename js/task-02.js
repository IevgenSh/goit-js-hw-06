const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.
const list = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const neWelement = document.createElement('li');
  neWelement.textContent = ingredient;
  neWelement.classList.add('item');
  
  return neWelement;
})

console.log(elements);

list.append(...elements);


