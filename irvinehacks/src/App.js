import React, { useState } from 'react'; 
import './App.css';
import Nav from './nav/nav';
import Home from './home/home'; 
import Middle from './middle/middle';

const localItemData = localStorage.getItem('items');
const localExpiringData = localStorage.getItem('expiring');
const localExpiredData = localStorage.getItem('expired');

const localItems = localItemData == null ? [] : JSON.parse(localItemData);
const localExpiring = localExpiringData == null ? [] : JSON.parse(localExpiringData);
const localExpired = localExpiredData == null ? [] : JSON.parse(localExpiredData);




function isExpired(item) {
  console.log(item);
  if (!Date.parse(item.expiration_date)) {
    return false;
  }
  const date = new Date(item.expiration_date);
  return date.getTime() < Date.now();
}

function isExpiring(item) {
  if (!Date.parse(item.expiration_date)) {
    return false;
  }
  const date = new Date(item.expiration_date);
  return (date.getTime() - Date.now()) / (1000 * 60 * 60 * 24) < 7;
}

function App() {
  const [items, setItems] = useState(localItems)
  //const [items, setItems] = useState([
      //{
          //name: "apples",
          //id: "wjavande",
          //expiration_date: "2024-02-03"
      //},
      //{
          //name: "potatoes",
          //id: "azerty",
          //expiration_date: "2024-12-24"
      //},
      //{
          //name: "marinara",
          //id: "dvorak",
          //expiration_date: "2025-02-03"
      //}
  //]);

  const [expiredItems, setExpiredItems] = useState(localExpired)

  const [expiringItems, setExpiringItems] = useState(localExpiring)

  function updateExpiredItems(newItems) {
    localStorage.setItem('expired', JSON.stringify(newItems));
    setExpiredItems(newItems);
  }

  function updateExpiringItems(newItems) {
    while (newItems.length > 0 && isExpired(newItems[0])) {
      updateExpiredItems([...expiredItems, newItems[0]]);
      newItems.shift();
    }
    localStorage.setItem('expiring', JSON.stringify(newItems));
    setExpiringItems(newItems);
  }

  function addExpiringItems(toExpiring) {
    var newItems = [...expiringItems, ...toExpiring]
    console.log('expr')
    console.log(newItems)
    while (newItems.length > 0 && isExpired(newItems[0])) {
      updateExpiredItems([...expiredItems, newItems[0]]);
      newItems.shift();
    }
    localStorage.setItem('expiring', JSON.stringify(newItems));
    setExpiringItems(newItems);
  }

  function updateItems(newItems) {
    var toExpire = []
    var toExpiring = []

    while (newItems.length > 0 && isExpired(newItems[0]))
    {
      toExpire.push(newItems[0])
      newItems.shift();
    }
    while (newItems.length > 0 && isExpiring(newItems[0]))
    {
      toExpiring.push(newItems[0])
      console.log(toExpiring)
      newItems.shift();
    }
    updateExpiredItems([...expiredItems, ...toExpire])
    addExpiringItems(toExpiring);
    localStorage.setItem('items', JSON.stringify(newItems))
    setItems(newItems);
   
  }
  
  return (
    <div className="root">
      <Nav items={[...expiringItems, ...items]}/>
      <Middle expired={expiredItems} setExpired={updateExpiredItems} expiring={expiringItems} setExpiring={updateExpiringItems}/>
      <Home items={items} setItems={(i) => updateItems(i)}/>
    </div>
  );
}



export default App;
