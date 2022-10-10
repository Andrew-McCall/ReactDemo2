import { Component } from "react";

const details = {firstName: "Andrew", surname: "McCall"}
const boolean = true;

class ElementClass extends Component{

    render(){
        const formatName = () => {
            return(details.firstName+" "+details.surname)
        }

        if (boolean){
            return(
                <>
                    <h1>My name is: {formatName()} </h1>
                    <p>elemnt</p>
                </>
            )
        }else{
            return(<h2>{formatName()}</h2>)
        }

    }
    
}

export default ElementClass;