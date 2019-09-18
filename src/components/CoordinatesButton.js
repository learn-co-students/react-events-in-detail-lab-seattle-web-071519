// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
    constructor(props){
        super(props)
    }

    doThing = event => {

        this.props.onReceiveCoordinates([event.clientX,event.clientY])
    }

    render(){
        return(<button onClick={this.doThing}>Coordinate</button>)
    }
}