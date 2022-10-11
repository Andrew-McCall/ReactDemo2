import { useState } from "react";
import ClickerButton from "./ClickerButton";
import ClickerButtonSimple from "./ClickerButtonSimple";

const Clicker = () => {

    const [count, setCount] = useState(0)

    return(<>
        <p> {count} </p>
        <ClickerButton name="Add One" state={count} setState={setCount} operation={(s => s+1)}/>
        <ClickerButtonSimple name="Double" operation={ () => {setCount(count*2)} }/>
        <ClickerButton name="Reset" state={count} setState={setCount} operation={(s => 0)}/>
    </>)

}

export default Clicker;