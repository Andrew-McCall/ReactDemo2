import { useContext } from "react";
import theme from "./Contexts/context";
import { useNavigate } from "react-router-dom";


const History = () => {

    const sharedTheme = useContext(theme)
    const navigator = useNavigate()

    return(<div>

        <button onClick={ () => sharedTheme.setSharedTheme(sharedTheme.themeState+"Light")}> toggle </button>
        {sharedTheme.themeState}
        <button onClick={(e) => {navigator("/home")} }>Click Me!</button>

    </div>)

}
export default History;