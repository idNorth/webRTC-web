import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: 200px;
  height: 100%;
  // background-color: #fff;
  border-left: 1px solid #000;
  
  right: ${(props) => props.isOpenRoomList ? 0 : '-200px'};
  transition: right .5s;
`;

export const ToggleButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  position: absolute;
  border: 1px solid #000;
  border-right: none;
  border-radius: 3px 0 0 3px;
  top: 20px;
  left: -32px;
  cursor: pointer;
`;
