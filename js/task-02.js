const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];



const listOfIngredients = document.querySelector("#ingredients");

console.log(listOfIngredients);

const categories = ingredients.map(ingredient => {
  const category = document.createElement('li');
  category.textContent = ingredient;
  category.classList.add( "item" );
  return category;
  });

listOfIngredients.append(...categories);


