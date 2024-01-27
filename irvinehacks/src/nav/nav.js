import './nav.css';


function Nav() {
  const userName = "User0";
  return (
    <div className="nav">
        <div className="logo-container">
            <img className="logo-pic" src="../logo.svg" alt="A perfectly generic logo"></img>
            <div className="zotzen">
                  zotzen
              </div>
        </div>
        <div className= "welcome-text">
          Welcome {userName}!
        </div>
    </div>
  );
}

export default Nav;