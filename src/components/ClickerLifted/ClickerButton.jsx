const ClickerButton = ({name, state, setState, operation}) => {

    const click = () => {
        setState(operation(state))
    }

    return(<button onClick={click}> {name} </button>)
}
export default ClickerButton;