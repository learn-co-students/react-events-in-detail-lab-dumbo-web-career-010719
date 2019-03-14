// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export class CoordinatesButton extends Component {

  clickHandler = (e) => {
    this.props.onReceiveCoordinates([e.clientX,e.clientY])
  }
  render() {
    return <button type="button" onClick={this.clickHandler}></button>
  }
}

export default CoordinatesButton

