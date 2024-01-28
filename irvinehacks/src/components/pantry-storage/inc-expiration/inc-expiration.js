import './inc-expiration.css';

function Expiring() {
  return (
      <div className="contain">
          <ExpiredItem text = "XX/XX/XXXX"/>
          <ExpiredItem text = "XX/XX/XXXX"/>
          <ExpiredItem text = "XX/XX/XXXX"/>
          <ExpiredItem text = "XX/XX/XXXX"/>
          <ExpiredItem text = "XX/XX/XXXX"/>
          <ExpiredItem text = "XX/XX/XXXX"/>
          <ExpiredItem text = "XX/XX/XXXX"/>
      </div>
  )
}

function ExpiredItem(props) {
  return (
    <div className="expiring-item">
      <p>Item</p>
      <div className="expired date">{props.text}</div>
    </div>
  )
}

export default Expiring;