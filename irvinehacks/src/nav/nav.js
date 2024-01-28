import './nav.css';
import ProfilePicture from './profilepicture.png';
import RecipeBar from '../components/pantry-storage/recipes/recipes.js';

function Nav() {
  const userName = "Steven";
  return (
    <div>
      <div className = "nav">
        <div className= "welcome-text">
            <b>Welcome {userName}!</b>
          </div>
      </div>
      <div>
        <img className = "pfp" src={ProfilePicture} alt="Avatar"></img>
      </div>
      <div>
        <p className = "suggestion">Want to make something new?</p>
        <RecipeBar/>
      </div>
    </div>
    
  );
}

export default Nav;