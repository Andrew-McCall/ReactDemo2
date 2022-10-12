import { Component } from "react";

class Lifecycle extends Component {

    constructor(){
        console.log("Constructor")

        super();
        // Component Specific Calculations (No API yet)
        this.state = {x:0}
    }

    render(){
        console.log("Render")
        return(<>
            <p>Lifecycle</p>
            <button onClick={() => this.setState({x:this.state.x + 1})}> {this.state.x}</button>
        </>)
    }

    componentWillUnmount(){
        console.log("Will Mount")
    }

    componentDidMount(){
        console.log("Did Mount")
    }

    // MOUNTING /\/\/\
     ////////////////
    // UPDATING \/\/\/

    shouldComponentUpdate(props, state){
        console.log("Should")
        return (state.x%2 === 1);
    }

    componentDidUpdate(){
        console.log("Did Update")
    }


    // UNMOUNTING
    componentWillUnmount(){
        console.log("Will Unmount")
    }

}

export default Lifecycle;