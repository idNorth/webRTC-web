import React, { Component } from 'react';
import StreamPage from '../StreamPage';
import PreviewPage from '../PreviewPage';
import { Background } from '../../components';
import { initSocket, createRoomSocket, joinRoomSocket } from '../../socket';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isConnected: false,
    };

    this.socket = initSocket();
    this.createRoomSocket = createRoomSocket.bind(this);
    this.joinRoomSocket = joinRoomSocket.bind(this);
  }

  handleCreateRoom = () => {
    this.createRoomSocket();
    this.setState({ isConnected: true });
  };

  handleJoinRoom = () => {
    this.joinRoomSocket();
    this.setState({ isConnected: true });
  };

  handleDisconnect = () => {
    this.socket.close();
    this.setState({ isConnected: false });
  }

  renderPage = () => {
    const { isConnected } = this.state;
    if (isConnected) {
      return (
        <StreamPage
          handleDisconnect={this.handleDisconnect}
        />
      )
    }

    return (
      <PreviewPage
        handleJoinRoom={this.handleJoinRoom}
        handleCreateRoom={this.handleCreateRoom}
      />
    )
  };

  render() {
    return (
      <>
        <Background />
        {this.renderPage()}
      </>
    )
  }
}

export default Layout;
