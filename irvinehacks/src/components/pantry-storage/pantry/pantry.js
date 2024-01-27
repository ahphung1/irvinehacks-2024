import './pantry.css';
import Checkbox from '@mui/material/Checkbox';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React, {useState} from 'react';
import { v1 as uuidv1 } from 'uuid';


const Pantry = () => {
    
    const [items, setItems] = useState([
        {
            name: "item1",
            id: "wjavande",
            description: "apple or something",
            expiration_date: "2024-02-03"
        },
        {
            name: "item2",
            id: "azerty",
            description: "beans?",
            expiration_date: "2024-12-24"
        },
        {
            name: "item3",
            id: "dvorak",
            description: "spaghetti",
            expiration_date: "2025-02-03"
        }

    ]);

    const [description, setDescription] = useState('');
    const [id, setId] = useState('');

    const[input, setInput] = useState({
        description: "",
        name: "",
        expiration_date: ""
    });

    const scription = (description) => {
        setInput({
            ...input,
            description: description,
        })
        console.log(input);
    }
    const d = (name) => {
        setInput({
            ...input,
            name: name,
        }); //this is probably wrong
        console.log(input);
    }
    const expdate = (date) => {
        setInput({
            ...input,
            expiration_date: date,
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        // this.reminders.push({
        //     description: event.target.description,
        //     author: event.target.author,
        // });
        console.log("Yo, is this even getting through");
        console.log(items);
        input.id = uuidv1();
        if (items.length == 0)
        {
            setItems([input])
            return;
        }
        let i = 0;
        while (i < items.length && compareDates(items[i].expiration_date, input.expiration_date) < 0)
        {
            i++;
        }
        items.splice(i, 0, input);
        console.log(items);
        setItems([...items]);
        /*
        setItems([...items, 
            input
        ]);
        */
        //console.log(reminders);
        
        console.log("keys: " + Object.keys(items));
        console.log("Values:" + Object.values(items));
    }

    const handleDelete = (item) => {
        let newItems = items.filter(i => i.id !== item.id)
        setItems([...newItems,
        ]);
    }



    
    return (
        <div className="chore-list">
            <div className="pantry-title">
                <h2>pantry</h2>
            </div>
            {items.map((item) => (
                <div className="itembox">
                    <IconButton type="delete" color="primary" onClick={event => handleDelete(item)}><DeleteIcon/></IconButton>
                    <Item id={item.id} name={item.name} description={item.description} expiration_date={item.expiration_date}/>
                </div>
            ))}
            <Popup trigger={<IconButton color="primary"><AddCircleIcon/></IconButton>} modal nested>
                <form onSubmit={handleSubmit}>
                    <label for="name">
                        <p>Name:</p>
                        <input type="text" name="description" onChange={event => d(event.target.value)}></input>
                    </label>
                    <label for="description">
                        <p>Description:</p>
                        <input type="text" name="name" onChange={event => scription(event.target.value)}></input>
                    </label>
                    <label for="expiration_date">
                        <p>Expiration Date:</p>
                        <input type="date" name="expiration_date" onChange={event => expdate(event.target.value)}></input>
                    </label>
                    <IconButton type="submit" color="primary"><AddCircleIcon /></IconButton>
                </form>
            </Popup>
        </div>
    )
}

const compareDates = (x, y) => {
    // if one date is null, 
    if (x == null)
    {
        return -1;
    }
    if (y == null)
    {
        return 1;
    }
    const dx = new Date(x);
    const dy = new Date(y);
    return dx.getTime() - dy.getTime();
}

const timeTilExpired = (date) => {
    const d = new Date(date);
    const diff = d.getTime() - Date.now();
    let days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30);
    const daystring = days % 30 > 0 ? days % 30 + " day" + (days % 30 > 1 ? "s" : "") : "";
    const monthstring = months > 0 ? months + " month" + (months > 1 ? "s" : "") : "";

    if (days < 0)
    {
        return "Expired"
    }
    else if (days === 0)
    {
        return "Expires today"
    }
    return "Expires in " + (monthstring !== "" && daystring !== "" ? monthstring + ", " + daystring : monthstring + daystring);
}

const daysTilExpired = (date) => {
    const d = new Date(date);
    const diff = d.getTime() - Date.now();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

const Item = (props) => {
    const [StrikeThroughCSS, setStrikeThroughCSS] = useState(false)
    const days_til_expired = daysTilExpired(props.expiration_date)
    let expireStyle;
    if (days_til_expired < 0)
    {
        expireStyle = "item item-expired"
    }
    else if (days_til_expired === 0)
    {
        expireStyle = "item item-expiring"
    }
    else if (days_til_expired < 8)
    {
        expireStyle = "item item-caution"
    }
    else
    {
        expireStyle = "item item-good"
    }
    
    return (<div className="item">
        <Checkbox color="success" onClick={() => 
            setStrikeThroughCSS((prev) => !prev)}
        /> {/* https://mui.com/material-ui/react-checkbox/ */}
        <div className={expireStyle}>
            <p className="item-title" style={
                {
                    textDecoration: StrikeThroughCSS ? "line-through" : "none"
                }}>{props.name}</p>
            <br/>
            <p className="item-description" style={
                {
                textDecoration: StrikeThroughCSS ? "line-through" : "none"
            }}>{props.description}</p> 
            <br/>
            <p className="item-description" style={
                {
                    textDecoration: StrikeThroughCSS ? "line-through" : "none"
                }
            }>
                {timeTilExpired(props.expiration_date)}
            </p>
        </div>
    </div> 
    );
}

export default Pantry;