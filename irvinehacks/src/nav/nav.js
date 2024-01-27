import './nav.css';


function Nav() {
  const userName = "Steven";
  return (
    <div className="nav">
        <div className= "welcome-text">
          Welcome {userName}!
        </div>
    </div>
  );
}

export default Nav;