import propTypes from "prop-types"
// const PropsExercise =({Header, p1, p2, DoesntExist})=> {
//     return(<>
//         <h1>{Header}</h1>
//         <p>{p1}</p>
//         <p>This is p2: {p2}</p>
//         <p>{DoesntExist} This one is undefinded</p>
//     </>)
// }

const PropsExercise =(props)=> {
    return(<>
        <h1>{props.Header}</h1>
        <p>{props.p1}</p>
        <p>This is p2: {props.p2}</p>
        <p>{props.DoesntExist} This one is undefinded</p>
    </>)
}

PropsExercise.propTypes = {
    Header:propTypes.string.isRequired,
    p1:propTypes.string.isRequired,
    p2:propTypes.string.isRequired,
    DoesntExist:propTypes.string,
}

export default PropsExercise