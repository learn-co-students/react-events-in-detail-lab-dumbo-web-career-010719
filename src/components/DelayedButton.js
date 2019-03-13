// Code DelayedButton Component Here

import React, {Component} from 'react';

export default class DelayedButton extends Component {

  handleClick=(event)=>{
    setTimeout(()=>this.props.onDelayedClick(event), this.props.delay);
  }
//ask why arrow function instead of regular function
  render(){
    return (
      <button onClick={this.handleClick}>Delayed</button>
    )
  }
}
