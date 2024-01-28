import './recipes.css';
import Column from "../column-dividers.js";

const api_key = '83c9dd5649db42ad9768f557fefe366e';

function RecipeColumn({items}) {
  return (
    <div>
      <Column value = {RecipeContents({items})}/>
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

function fetchAvailableRecipes(query) {

  fetch(query)
  .then(response => {
    if (response.ok) {
      return response.json(); // Parse the response data as JSON
    } else {
      throw new Error('API request failed');
    }
  })
  .then(data => {
    return data
    // Process the response data here
    //console.log(data); // Example: Logging the data to the console
  })
  .catch(error => {
    // Handle any errors here
    console.error(error); // Example: Logging the error to the console
    return null;
  });

}

function Recipe(props){
  return (
    <div>
      <a href={props.sourceUrl}>{props.title}</a>
      <br/>
      <img src={props.image} alt={props.title}/>
    </div>
  )
}



export default RecipeColumn;
