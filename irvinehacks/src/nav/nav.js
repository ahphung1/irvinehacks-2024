import './nav.css';
import ProfilePicture from './profilepicture.png';
import RecipeBar from '../components/pantry-storage/recipes/recipes.js';

function Nav({ items }) {
  const userName = "Steven";
  return (
    <div className="navcontainer">
      <div className = "nav">
        <div className= "welcome-text">
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