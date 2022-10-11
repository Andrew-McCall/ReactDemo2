import { useState } from "react"

const AddItem = ({AddItem}) => {

    const [item, setItem] = useState("")

    return(<>
    
        <input value={item} onChange={(e) => setItem(e.target.value)}/>
        <button onClick={() => {AddItem(item)}}>Add Item </button>
        
    </>)

}

export default AddItem