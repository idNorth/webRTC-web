import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginView from '../../components/Login';

class Login extends Component {

  onSubmit = (form) => {
    this.props.history.push('/home')
  }

  render() {
    return (
      <LoginView
        onSubmit={this.onSubmit}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  state
})

export default connect(mapStateToProps)(Login);