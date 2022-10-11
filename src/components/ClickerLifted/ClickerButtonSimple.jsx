const ClickerButtonSimple = ({name, operation}) => {

    return( <button onClick={operation}> {name} </button> )

}

export default ClickerButtonSimple;