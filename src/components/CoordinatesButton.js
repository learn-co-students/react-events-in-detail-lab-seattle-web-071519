import React from 'react'


class CoordinatesButton extends React.Component{


    handleArr = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    render(){
        return (
            <div>
                <button onClick = {this.handleArr}></button>
            </div>
        )
    }
}

export default CoordinatesButton