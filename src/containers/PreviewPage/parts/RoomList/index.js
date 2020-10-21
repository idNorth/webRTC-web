import React, { Component } from 'react';

import {
  Wrapper,
  ToggleButton,
} from './styles';

class RoomList extends Component {
  render() {
    const { isOpenRoomList, setIsOpenRoomList, rooms } = this.props;
    return (
      <Wrapper isOpenRoomList={isOpenRoomList}>
        <ToggleButton
          onClick={setIsOpenRoomList}
        >C</ToggleButton>
      </Wrapper>
    );
  }
}

RoomList.defaultProps = {
  isOpenRoomList: false,
  setIsOpenRoomList: () => {},
  rooms: [],
};

export default RoomList;
