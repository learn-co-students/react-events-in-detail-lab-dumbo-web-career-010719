// Code DelayedButton Component Here
import React, {Component} from 'react'

 class DelayedButton extends Component {

   clickHandler = (event) => {
    event.persist() // removes synthetic event from pool and allows for references to the event to be retained by user code
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }

   render() {
     return <button onClick={this.clickHandler}>Delayed</button>}
   }

 export default DelayedButton;
