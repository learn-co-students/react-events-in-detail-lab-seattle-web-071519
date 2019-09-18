// Code CoordinatesButton Component Here

import React, {Component} from 'react'

class CoordinatesButton extends Component{
    handleOnClick = (event) =>{
        console.log(event.clientX)
        return this.props.onReceiveCoordinates([event.clientX,event.clientY])

    }

    render(){
        return(<button onClick={this.handleOnClick}>CLICK ME!</button>)
    }
}

export default CoordinatesButton