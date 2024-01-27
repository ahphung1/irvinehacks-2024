import './expiration.css';
import Column from "../column-dividers.js";

function ExpirationColumn() {
  return (
    <div>
      <Column value = {ExpirationContents()}/>
    </div>
  );
}

function ExpirationContents(){
  return (
    <div>
      hello! expiration column
    </div>
  )
}

export default ExpirationColumn;
