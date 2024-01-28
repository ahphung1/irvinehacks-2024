import './nav.css';
import ProfilePicture from './profilepicture.png';
import RecipeBar from '../components/pantry-storage/recipes/recipes.js';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Popup from 'reactjs-popup';
import IconButton from '@mui/material/IconButton';

const handleSubmit = (event) => {
  
}

function Nav({ items }) {
  const userName = "Steven";
  return (
    <div className="navcontainer">
      <div className = "nav">
        <div className= "welcome-text">
          <h1>ZOT Pantry</h1>
          <h2>Welcome {userName}!</h2>
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