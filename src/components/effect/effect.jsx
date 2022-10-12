import { useEffect, useState } from "react";

const Effect = ({message, test}) => {

    useEffect(()=> {
        console.log("Prop Changed")
    }, [test, message])

    return(<div>
        <p> Message: {message}</p>
    </div>)

}

export default Effect;