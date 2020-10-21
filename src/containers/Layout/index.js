import React, { Component } from 'react';
import StreamPage from '../StreamPage';
import PreviewPage from '../PreviewPage';
import { initSocket, createRoomSocket, joinTheRoomSocket } from '../../socket';
import {Image} from "../PreviewPage/styles";

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      label: '',
      password: null,
      isConnected: false,
    };

    this.socket = initSocket();
    this.createRoomSocket = createRoomSocket.bind(this);
    this.joinTheRoomSocket = joinTheRoomSocket.bind(this)
  }

  createRoom = () => {
    const { label, password } = this.state;
    if (!label) return;
    this.createRoomSocket(label, password);
    this.setState({ isConnected: true });
  };

  joinTheRoom = () => {
    const { label, password } = this.state;
    if (!label) return;
    this.joinTheRoomSocket(label, password);
    this.setState({ isConnected: true });
  };

  updateState = (data) => this.setState(data);

  renderPage = () => {
    const { isConnected } = this.state;
    if (isConnected) {
      return (
        <StreamPage
          setIsConnected={() => this.updateState({ isConnected: false })}
        />
      )
    }

    return (
      <PreviewPage
        updateState={this.updateState}
      />
    )
  };

  render() {
    return (
      <>
        <Image src={require('../../assets/img/nature.jpg')}/>
        {this.renderPage()}
      </>
    )
  }
}

export default Layout;
