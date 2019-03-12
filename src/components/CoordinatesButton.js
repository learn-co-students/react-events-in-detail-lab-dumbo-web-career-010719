// Code CoordinatesButton Component Here
import React, { Component } from 'react'

class CoordinatesButton extends Component{
  handleClick = (event) => {
    const coords = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coords)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click Me</button>
    )
  }
}

export default CoordinatesButton
