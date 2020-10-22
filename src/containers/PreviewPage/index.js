import React, { Component } from 'react';
import PreviewPageView from './view';

class PreviewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenSideBar: false
    }
  }

  handleSideBar = () => this.setState({ isOpenSideBar: !this.state.isOpenSideBar});

  render() {
    const { handleCreateRoom, handleJoinRoom } = this.props;
    const { isOpenSideBar } = this.state;

    return (
      <PreviewPageView
        handleCreateRoom={handleCreateRoom}
        handleJoinRoom={handleJoinRoom}
        isOpenSideBar={isOpenSideBar}
        handleSideBar={this.handleSideBar}
      />
    );
  }
}

export default PreviewPage;
