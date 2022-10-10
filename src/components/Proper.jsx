import propType from "prop-types"

const Proper = ({keyName, number, boolean}) => {

    if (keyName){
        return(<>
            <h1>Props</h1>
            <p>{boolean + ""}</p>
            <p>{number}</p>
            <p>{keyName}</p>
        </>)
    }else{
        return(<h3> Proper has no props </h3>)
    }

}

Proper.defaultProps = {
    keyName: "Test"
}

Proper.propTypes = {
    keyName: propType.string.isRequired,
    boolean: propType.bool.isRequired,
    number: propType.number
}

export default Proper;