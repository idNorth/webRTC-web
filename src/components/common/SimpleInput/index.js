import React, { Component } from 'react';

class SimpleInput extends Component {
  render() {
    const { input, ...res } = this.props;
    return (
      <input {...input} {...res}/>
    )
  }
}

export default SimpleInput;
