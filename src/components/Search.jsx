import { useState } from "react";

const data = ["Andrew", "Andy", "McCall", "David"]

const Search = () => {

    const [query, setQuery] = useState("")
    const [output, setOutput] = useState(data)

    const search = (e) => {
        e.preventDefault();
        setQuery(e.target.value)

        e.target.value = e.target.value.toLowerCase()

        setOutput(data.filter(n => (n.toLowerCase().startsWith(e.target.value))))
    }

    return(<div>
        <input type="text" value={query} onChange={search}></input>
        <br/>
        {output.map( (n,i) => (<p key={i}>{n}</p>) )}
    </div>)

}

export default Search;