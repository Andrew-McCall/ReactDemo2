import Effect from "./effect";
import { useState } from "react";

const EffectParent = () => {

    const [message, setMessage] = useState("");

    const typing = (e) =>{ 
        setMessage(e.target.value)
    }

    return(<div>
        <input onChange={typing} value={message}></input>
        <Effect message={message} test="test"/>
    </div>)

}

export default EffectParent;