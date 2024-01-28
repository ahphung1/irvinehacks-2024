import './nav.css';
import React, { useState } from 'react';
import ProfilePicture from './profilepicture.png';
import RecipeBar from '../components/pantry-storage/recipes/recipes.js';

function Nav({ items }) {
  const [userName, setUserName] = useState('');
  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleNameSubmit = (event) => {
    event.preventDefault(); 
    alert(`Hello ${userName}!`); 
  };

  return (
    <div className="navcontainer">
    <div className="nav">
      <div className="welcome-text">
        <form onSubmit={handleNameSubmit}>
          <input
            type="text"
            placeholder="What is your name?"
            value={userName}
            onChange={handleNameChange}
          />
          <button type="submit">Submit</button>
        </form>
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