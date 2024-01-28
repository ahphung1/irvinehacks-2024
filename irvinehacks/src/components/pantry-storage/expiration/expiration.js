import './expiration.css';
import Column from "../column-dividers.js";
import Pantry from '../pantry/pantry.js';
import { useState } from 'react';

function ExpirationColumn({items, setItems}) {
  return (
    <div>
      <Column value = {ExpirationContents({items, setItems})}/>
    </div>
  );
}

function ExpirationContents({items, setItems}){
  return (
    <div>
      hello! expiration column
      <Pantry items={items} setItems={setItems}/>
    </div>
  )
}

export default ExpirationColumn;
