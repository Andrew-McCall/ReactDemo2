import { useEffect, useState } from "react";
import axios from "axios"
import data from "./../data.json"

const Request = () => {

    const [fact, setFact] = useState([])

    useEffect(() => {
        // fetch("https://catfact.ninja/fact", {}).then(res=> {
        //     res.json().then(data=>{
        //         setFact(data.fact)
        //     })
        // })
        addFact()
    }, [])

    const addFact = () => {
        axios.get("https://catfact.ninja/fact").then(res => {
            setFact([...fact, res.data.fact])
        })
    }

    return(<div>
        <button onClick={addFact}> Add Fact </button>
        <ul>
            {fact.map((f, i) => <li key={i}> {f} </li>)}
        </ul>
        <p>{data.secret}</p>
    </div>)
}

export default Request;