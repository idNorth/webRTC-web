import React, { Component } from 'react';
import PreviewPageView from './view';
import { getRoomsSocket } from '../../socket';

class PreviewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenRoomList: false,
      modalStatus: null,
      keyword: ''
    }
  }

  setKeyword = (keyword) => this.setState({ keyword });
  setIsOpenRoomList = () => this.setState({ isOpenRoomList: !this.state.isOpenRoomList});

  handleModalStatus = (status) => {
    const { modalStatus } = this.state;
    this.setState({ modalStatus: status === modalStatus ? null : status});
  };

  render() {
    const { setIsConnected, updateState } = this.props;
    const { keyword, modalStatus, isOpenRoomList } = this.state;

    return (
      <PreviewPageView
        setIsConnected={setIsConnected}
        updateState={updateState}
        modalStatus={modalStatus}

        isOpenRoomList={isOpenRoomList}
        setIsOpenRoomList={this.setIsOpenRoomList}

        getRoomsSocket={() => getRoomsSocket(keyword)}
        setKeyword={this.setKeyword}
        handleModalStatus={this.handleModalStatus}
      />
    );
  }
}

export default PreviewPage;
