import './App.css';
import Nav from './nav/nav';
import Home from './home/home'; 
import Middle from './middle/middle'

function App() {
  return (
    <div className="root">
      <Nav></Nav>
      <Middle></Middle>
      <Home></Home>
    </div>
  );
}

export default App;
