import './inc-expiration.css';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function Expiring({items, setItems}) {
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
            <ExpiringItem name={item.name} expiration_date={item.expiration_date}/>
          </div>
        ))}
      </div>
  )
}

function ExpiringItem(props) {
  return (
    <div className="expiring-item">
      <p>{props.name}</p>
      <div className="expiration-date">{props.expiration_date}</div>
    </div>
  )
}

export default Expiring;