import './home.css';
import React, { useState } from 'react';
//import TextField from '@mui/material/TextField';
//import Button from '@mui/material/Button';
//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import Pantry from '../components/pantry-storage/pantry/pantry';

function Home() {
  const [input, setInput] = useState('');
  const [stickies, setStickies] = useState([]);

  const handleInput = event => {
    const {name, value} = event.target;
    setInput(value);
    console.log(name, value, input);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hiaofajlsdkfjasd")
    console.log(stickies);
    setStickies([...stickies, input]);
    console.log(stickies);
  }

  return (
    <div className="home">
      {/* <div className="background-window"><GoogleCalendar></GoogleCalendar></div> */}
      <div className="background-window">
        {/*<form class="submission" onSubmit={handleSubmit}>
          <TextField class="textfield" placeholder="type a message" onChange={handleInput} fullWidth></TextField>
          <Button class="stickybutton" type="submit" variant="contained" color="success">submit</Button>
          </form>*/}
        <div class="stickies">
          {stickies.toReversed().map((sticky) => (
            {/*<Card class="sticky">
              <CardContent>
                {sticky}
              </CardContent>
            </Card>
          */}
          ))} 
        </div>
      </div>
      <div className="pantry">
        <Pantry/>
      </div>
    </div>
  );
}

export default Home;