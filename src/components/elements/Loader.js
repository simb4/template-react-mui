import React, { Component } from 'react'
import CircularProgress from 'material-ui/CircularProgress';

class Loader extends Component {
  render() {
    return (
      <CircularProgress 
        size={this.props.size} 
        thickness={this.props.thickness} 
        min={100}
      />
    )
  }
}

export default Loader;
