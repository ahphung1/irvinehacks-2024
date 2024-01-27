import './recipes.css';
import Column from "../column-dividers.js";

function RecipeColumn() {
  return (
    <div>
      <Column value = {RecipeContents()}/>
    </div>
  );
}

function RecipeContents(){
  return (
    <div>
      hello! recipe column
    </div>
  )
}

export default RecipeColumn;
