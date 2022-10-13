import { useReducer, useContext } from "react";
import theme from "./Contexts/context";

const Reducer = ()=> {

    const {themeState} = useContext(theme);

    const reducer = (state, action) => {
        if (action){
            state+=action
        }else{
            state+=1
        }

        if (state > 20){
            return 0;
        } else {
            return state
        }
    }

    const [count, counter] = useReducer(reducer, 0)

    const click = (e) => {
        counter(-10)
    }

    return(<div>

        <p>{themeState}</p>
        <button onClick={click}> Add 1 </button>
        <p>{count}</p>

    </div>)

}

export default Reducer;