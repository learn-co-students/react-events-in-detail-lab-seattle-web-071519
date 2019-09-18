// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {
    
    handleOnClick = (event) => {
        setTimeout( () => {this.props.onDelayedClick(event)}, this.props.delay)
    }

    render(){
        return (
            <button onClick={this.handleOnClick}>
                CLICK DELAYED!
            </button>
        )
    }
}

export default DelayedButton