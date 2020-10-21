import React, { Component } from 'react';

import RoomList from './parts/RoomList';
import { RenderInput, SimpleTextButton } from '../../components';
import {
  Wrapper,
  LeftSide,
  JoinInput,
  Image
} from './styles';

class PreviewPageView extends Component {
  render() {
    const {
      isOpenRoomList,
      setIsOpenRoomList,
    } = this.props;

    return (
      <Wrapper>
        <SimpleTextButton
          label="Create"
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
              customStylesButton={{
                width: 50,
                height: 10,
                marginLeft: 10,
              }}
            />
          </JoinInput>
        </LeftSide>
        <RoomList
          isOpenRoomList={isOpenRoomList}
          setIsOpenRoomList={setIsOpenRoomList}
        />
      </Wrapper>
    );
  }
}

export default PreviewPageView;
