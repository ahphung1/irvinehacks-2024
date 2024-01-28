import React, { useState, useEffect } from 'react';
import './recipes.css';
import Column from "../column-dividers.js";

const api_key = 'a2d3ea4415e3415cbef769aa4b7a86de';

// function RecipeNav() {
//   return (
//     <div className="recipe-scroll">
//       <RecipeItem text = "league of legengdsleague of legengdsleague of legengdsleague of legengds"/>
      // <RecipeItem text = "league of legengds"/>
      // <RecipeItem text = "league of legengds"/>
      // <RecipeItem text = "league of legengds"/>
      // <RecipeItem text = "league of legengds"/>
      // <RecipeItem text = "league of legengds"/>
      // <RecipeItem text = "league of legengds"/>
//     </div>
//   );
// }

function RecipeBar({ items }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (items && items.length > 0) {
      const query = getRecipeQuery({ items, api_key });
      fetchAvailableRecipes(query, setRecipes);
    }
  }, [items]);

  return (
    <div className="recipe-scroll">
      {recipes && recipes.length > 0 ? 
        recipes.map(recipe => (
          <RecipeItem 
          key={recipe.id} 
          title={recipe.title}
          sourceUrl={`https://spoonacular.com/recipes/${recipe.title}-${recipe.id}`} />
        )) :
        items && items.map(item => (
          <div key={item.id} className="recipe-item">
            <p>Recipe:</p>
            <div className="recipe-item">{item.name}</div>
          </div>
        ))
      }
    </div>
  );
}


function RecipeItem({ title, sourceUrl }) {
  return (
    <div className="recipe-item">
      <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </div>
  );
}

function getRecipeQuery({items, api_key}) {
  let ingredients = items.map(item => item.name);
  const ingredientsQuery = ingredients.join(',+');
  return `https://api.spoonacular.com/recipes/findByIngredients?number=10&ignorePantry=true&ranking=2&limitLicense=true&ingredients=${ingredientsQuery}&apiKey=${api_key}`;
}

function fetchAvailableRecipes(query, setRecipes) {
  fetch(query)
    .then(response => response.json())
    .then(data => setRecipes(data))
    .catch(error => console.error(error));
}

export default RecipeBar;
