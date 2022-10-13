import { useNavigate } from "react-router-dom";
const History = () => {

    const navigator = useNavigate()

    return(<div>

        <button onClick={(e) => {navigator("/home")} }>Click Me!</button>

    </div>)

}
export default History;