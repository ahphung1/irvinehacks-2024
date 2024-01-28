import './recipes.css';
import Column from "../column-dividers.js";
import React, { useState, useEffect } from 'react';

const api_key = '83c9dd5649db42ad9768f557fefe366e';

function RecipeColumn({items}) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const query = getRecipeQuery({items, api_key});
    fetchAvailableRecipes(query, setRecipes);
  }, [items]);

  // const renderRecipes = recipes.map((recipe) => (
  //   <Recipe key={recipe.id} title={recipe.title} image={recipe.image} sourceUrl={`https://spoonacular.com/recipes/${recipe.title}-${recipe.id}`} />
  // ));

  return (
    <div>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} title={recipe.title} image={recipe.image} sourceUrl={`https://spoonacular.com/recipes/${recipe.title}-${recipe.id}`} />
      ))}
    </div>
  );
}

function RecipeContents({items}) {
  const query = getRecipeQuery({items, api_key});
  return (
    <div>
      hello! recipe column
      <br/>
      <RecipeList query={query}/>
    </div>
  )
}

function RecipeList({query}) {

  return (
    <div>
      {query}
    </div>
  )
}

function getRecipeQuery({items, api_key}) {
  let ingredients = []
  for (let i = 0; i < items.length; ++i) {
    ingredients.push(items[i].name)
  }
  const ingredientsQuery = ingredients.join(',+')
  return 'https://api.spoonacular.com/recipes/findByIngredients?number=10&ignorePantry=true&ranking=2&limitLicense=true&ingredients=' + ingredientsQuery + "&apiKey=" + api_key;
}

function fetchAvailableRecipes(query, setRecipes) {

  fetch(query)
    .then(response => response.json())
    .then(data => {
      setRecipes(data); 
    })
    .catch(error => {
      console.error(error);
    });
}



function Recipe({title, image, sourceUrl}) {

  return (
    <div className="recipe">
      <a href={sourceUrl} target="_blank" rel="noopener noreferrer">{title}</a>
      <img src={image} alt={title} />
    </div>
  );
}



export default RecipeColumn;
