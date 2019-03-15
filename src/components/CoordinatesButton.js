import React from 'react'

class CoordinatesButton extends React.Component{
  handleClick = (event) =>{
    event.persist()
    this.props.onReceiveCoordinates([event.clientX,event.clientY])
  }
  render(){
    return(
    <button
      onClick={this.handleClick}>
      button
    </button>
    )
  }
}

export default CoordinatesButton
