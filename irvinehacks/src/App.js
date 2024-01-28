import React, { useState } from 'react'; 
import './App.css';
import Nav from './nav/nav';
import Home from './home/home'; 
import Middle from './middle/middle';

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

  function updateItems(newItems) {
    // use setItems
    setItems(updateItems);
    // store to local storage
  }
  
  return (
    <div className="root">
      <Nav />
      <Middle />
      <Home items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
