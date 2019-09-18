// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component {
    constructor(props){
        super(props)
    }

    doThing = event => {
        event.persist()
        setTimeout(() => {this.props.onDelayedClick(event)},this.props.delay)
        // this.props.onDelayedClick(event)
    }

    render(){
        return(<button onClick={this.doThing}>Delay</button>)
    }
}