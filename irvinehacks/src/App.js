import React, { useState } from 'react'; 
import './App.css';
import Nav from './nav/nav';
import Home from './home/home'; 
import Middle from './middle/middle';

function isExpired(item) {
  console.log(item);
  if (!Date.parse(item.expiration_date)) {
    return false;
  }
  const date = new Date(item.expiration_date);
  return date.getTime() < Date.now();
}

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

  const [expiredItems, setExpiredItems] = useState([])

  function updateItems(newItems) {

    while (newItems.length > 0 && isExpired(newItems[0]))
    {
      setExpiredItems([...expiredItems, newItems[0]]);
      newItems.shift();
    }
    console.log('exp')
    console.log(expiredItems);
    console.log(newItems);
    setItems(newItems);
   
  }
  
  return (
    <div className="root">
      <Nav items={items}/>
      <Middle />
      <Home items={items} setItems={(i) => updateItems(i)}/>
    </div>
  );
}



export default App;
