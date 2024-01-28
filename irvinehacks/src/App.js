import './App.css';
import RecipeColumn from './components/pantry-storage/recipes/recipes';
import ExpirationColumn from './components/pantry-storage/expiration/expiration';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState([
      {
          name: "apples",
          id: "wjavande",
          expiration_date: "2024-02-03"
      },
      {
          name: "potatoes",
          id: "azerty",
          expiration_date: "2024-12-24"
      },
      {
          name: "marinara",
          id: "dvorak",
          expiration_date: "2025-02-03"
      }

  ]);
  return (
    <div className="row">
        <RecipeColumn items={items}/>
        <ExpirationColumn items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
