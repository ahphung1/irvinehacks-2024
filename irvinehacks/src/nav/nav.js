import './nav.css';
import React, { useState } from 'react';
import ProfilePicture from './profilepicture.png';
import RecipeBar from '../components/pantry-storage/recipes/recipes.js';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Popup from 'reactjs-popup';
import IconButton from '@mui/material/IconButton';

const loadedName = localStorage.getItem('username') 

const handleSubmit = (event) => {
  
}

function Nav({ items }) {
  const [userName, setUserName] = useState(loadedName == null ? '' : loadedName);
  const [nameInput, setNameInput] = useState('');
  const handleNameChange = (event) => {
    setNameInput(event.target.value);
  };

  const handleNameSubmit = (event) => {
    event.preventDefault(); 
    setUserName(nameInput);
    localStorage.setItem('username', nameInput);
    alert(`Hello ${nameInput}!`); 
  };

  return (
    <div className="navcontainer">
    <div className="nav">
      <div className="welcome-text">
        <form onSubmit={handleNameSubmit}>
          <input
            type="text"
            placeholder="What is your name?"
            value={nameInput}
            onChange={handleNameChange}
          />
          <IconButton type="submit"><AddCircleIcon /></IconButton>
        </form>
        <h1>ZOT Pantry</h1>
        {userName && <h2>Welcome {userName}!</h2>}
      </div>
    </div>
      <div>
        <img className = "pfp" src={ProfilePicture} alt="Avatar"></img>
      </div>
      <div>
        <h2 className = "suggestion">Want to make something new?</h2>
        <RecipeBar items={items}/>
      </div>
    </div>
    
  );
}

export default Nav;