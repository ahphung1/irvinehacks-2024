import './App.css';
import RecipeColumn from './components/pantry-storage/recipes/recipes';
import ExpirationColumn from './components/pantry-storage/expiration/expiration';

function App() {
  return (
    <div className="row">
        <RecipeColumn />
        <ExpirationColumn />
    </div>
  );
}

export default App;
