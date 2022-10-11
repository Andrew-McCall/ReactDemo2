import { useState } from "react";
import AddItem from "./Add.jsx"
import ListItem from "./ListItem.jsx";

const Basket = () => {

    const [basket, setBasket] = useState([]);

    return(<div>
        <AddItem AddItem={(i) => setBasket([...basket, {name:i, quanity:1}])}/>
        {basket.map( (b, i) => <ListItem basket={basket} setBasket={setBasket} index={i} name={b.name} quanity={b.quanity}/> )}
    </div>)
}

export default Basket;