import {useState} from "react"

const Clicker = () => {

    const [count, setCount] = useState(0);
    const [search, setSearch] = useState("")

    const buttonPress = (e) => {
        e.preventDefault();

        setCount(count+1);
        setSearch(count+1)
        console.log(count)
    }

    return(<div>

        <button onClick={buttonPress}> Click Me! </button>
        <p>Count: {count} </p>
        <br/>

        <input type="text" value={search} onChange={(e) => {e.preventDefault(); setSearch(e.target.value)}}></input>
        <p> Serach: {search} </p>

    </div>)


}

export default Clicker;