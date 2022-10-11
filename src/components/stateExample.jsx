import {useState} from "react"

const Clicker = () => {

    const [count, setCount] = useState(0);

    const buttonPress = (e) => {
        e.preventDefault();

        setCount(count+1);
        console.log(count)
    }

    return(<div>

        <button onClick={buttonPress}> Click Me! </button>
        <p>Count: {count} </p>

    </div>)


}

export default Clicker;