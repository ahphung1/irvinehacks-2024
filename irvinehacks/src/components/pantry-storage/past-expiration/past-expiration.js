import './past-expiration.css';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function PastExpiration({items, setItems}) {
  const handleDelete = (item) => {
      let newItems = items.filter(i => i.id !== item.id)
      setItems([...newItems,
      ]);
  }
  return (
      <div className="container">
        {items.map((item) => (
          <div>
            <IconButton type="delete" className = "test" onClick={event => handleDelete(item)}><DeleteIcon/></IconButton>
            <ExpiredItem name={item.name} expiration_date={item.expiration_date}/>
          </div>
        ))}
      </div>
  )
}

function ExpiredItem(props) {
  return (
    <div className="expired-item">
      <p>{props.name}</p>
      <div className="expired date">{props.expiration_date}</div>
    </div>
  )
}

export default PastExpiration;