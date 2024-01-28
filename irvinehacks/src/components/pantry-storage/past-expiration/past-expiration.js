import './past-expiration.css';

function PastExpiration() {
  return (
      <div className="container">
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
    <div className="expired-item">
      <p>Item</p>
      <div className="expired date">{props.text}</div>
    </div>
  )
}

export default PastExpiration;