const categories = document.querySelectorAll('.item');

console.log('Number of categories: ', categories.length);

const paragraphs = document.querySelectorAll('h2');

paragraphs.forEach(category => {
  console.log('Category: ', category.textContent);
  console.log('Elements: ', category.nextElementSibling.children.length);
});
