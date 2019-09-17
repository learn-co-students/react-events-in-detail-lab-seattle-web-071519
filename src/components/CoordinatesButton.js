// Code CoordinatesButton Component Here
import React from 'react';
// import ReactDOM from 'react-dom';

class CoordinatesButton extends React.Component {
    handleClick = (event) => {
        // console.log(event)
        // debugger
        // let x = event
        let x = event.clientX
        let y = event.clientY
        this.props.onReceiveCoordinates([x, y])
    }
    render() {
        return (
            <button 
            onClick={this.handleClick}></button>
        )
    }
}

export default CoordinatesButton;