import './recipes.css';

function RecipeBar() {
  return (
    <div className="recipe-scroll">
      <RecipeItem text = "league of legengds"/>
      <RecipeItem text = "league of legengds"/>
      <RecipeItem text = "league of legengds"/>
      <RecipeItem text = "league of legengds"/>
      <RecipeItem text = "league of legengds"/>
      <RecipeItem text = "league of legengds"/>
      <RecipeItem text = "league of legengds"/>
    </div>
  );
}

function RecipeItem(props) {
  return (
    <div className = "recipe-item">
      <p>Recipe:</p>
      <div className = "recipe-text">{props.text}</div>
    </div>
  );
}

export default RecipeBar;
