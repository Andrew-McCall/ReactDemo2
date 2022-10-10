// const header = <h1>Andrew McCall</h1>

const details = {firstName: "Andrew", surname: "McCall"}
const boolean = true;

const Element = () => {

    const formatName = () => {
        return(details.firstName+" "+details.surname)
    }

    if (boolean){
        return(
            <div className={details.firstName} surname={details.surname} test="test">
                <h1>My name is: {formatName()} </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod mollitia reiciendis nesciunt aliquid consectetur cumque laudantium obcaecati rem nam quisquam quis similique quam enim, laborum amet cum tempora a omnis!</p>
            </div>
        )
    }else{
        return(<h2>{formatName()}</h2>)
    }
    
}

export default Element;