import './home.css';
import React, { useState } from 'react';
//import TextField from '@mui/material/TextField';
//import Button from '@mui/material/Button';
//import Card from '@mui/material/Card';
//import CardContent from '@mui/material/CardContent';
import Pantry from '../components/pantry-storage/pantry/pantry';

function Home({items, setItems}) {


  return (
    <div className="home">
      <div className="pantry">
        <Pantry items={items} setItems={setItems}/>
      </div>
    </div>
  );
}

export default Home;