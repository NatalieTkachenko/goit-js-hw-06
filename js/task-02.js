const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];



const listOfIngredients = document.querySelector("#ingredients");

console.log(listOfIngredients);

ingredients.map(ingredient => {
  const category = document.createElement('li');
  category.textContent = ingredient;
  category.classList.add("item");
  listOfIngredients.append(category);
});



//перебрать массив
//для каждого элемента массива:
//создать li элемент, добавить в качестве имени элемент массива, присвоить класс
//полученный объект вставить в разметку
//<li class="item">name</li>

