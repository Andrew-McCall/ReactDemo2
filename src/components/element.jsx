// const header = <h1>Andrew McCall</h1>
import React from "react";
import {Fragment} from 'react';

const details = {firstName: "Andrew", surname: "McCall"}
const boolean = true;

const Element = () => {

    const formatName = () => {
        return(details.firstName+" "+details.surname)
    }

    if (boolean){
        return(
            <React.Fragment> 
                <Fragment> 
                    <>
                        <h1>My name is: {formatName()} </h1>
                        <p>elemnt</p>
                    </>
                </Fragment>
            </React.Fragment>
        )
    }else{
        return(<h2>{formatName()}</h2>)
    }
    
}

export default Element;