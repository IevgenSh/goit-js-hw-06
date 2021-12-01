const allCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${allCategoriesEl.length}`);

allCategoriesEl.forEach(element => {
  const titleEl = element.querySelector('h2');
  const categoriesEl = element.querySelectorAll('li');

  console.log(`Category: ${titleEl.textContent}`)
  console.log(`Elements: ${categoriesEl.length}`)
})