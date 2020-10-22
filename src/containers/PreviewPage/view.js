import React, { Component } from 'react';

import RoomList from './parts/RoomList';
import { RenderInput, SimpleTextButton } from '../../components';
import {
  Wrapper,
  LeftSide,
  JoinInput,
} from './styles';

class PreviewPageView extends Component {
  render() {
    const {
      isOpenSideBar,
      handleSideBar,
      handleCreateRoom,
      handleJoinRoom,
    } = this.props;

    return (
      <Wrapper>
        <SimpleTextButton
          label="Create"
          onClick={handleCreateRoom}
          customStylesButton={{
            position: 'fixed',
            top: 20,
            left: 20,
          }}
        />
        <LeftSide>
          <JoinInput>
            <RenderInput
              placeholder="URL"
              customStylesInput={{
                width: 400,
                // height: 35,
              }}
            />
            <SimpleTextButton
              label="Join"
              onClick={handleJoinRoom}
              customStylesButton={{
                width: 50,
                height: 10,
                marginLeft: 10,
              }}
            />
          </JoinInput>
        </LeftSide>
        {/*<RoomList*/}
        {/*  isOpenSideBar={isOpenSideBar}*/}
        {/*  handleSideBar={handleSideBar}*/}
        {/*/>*/}
      </Wrapper>
    );
  }
}

PreviewPageView.defaultProps = {
  createRoom: () => {},
  joinRoom: () => {}
}


export default PreviewPageView;
