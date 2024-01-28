import './column-dividers.css'

function Column(column_content) {
    return (
      <div className="column">
            {column_content.value}
      </div>
    );
  }
  
  export default Column;