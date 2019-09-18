import React, {Component} from 'react'

class CoordinatesButton extends Component {

    constructor(props){
        super(props)
        this.state = {coordinates: [0, 0]}

    }

    handleClick = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render(){
        return (
            <button onClick={this.handleClick}>Coords</button>
        )
    }
}

export default CoordinatesButton