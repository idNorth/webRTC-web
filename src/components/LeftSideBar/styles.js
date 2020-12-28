import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../constants/header';

export const Wrapper = styled.div`
  position: absolute;
  top: ${HEADER_HEIGHT};
  left: ${(props) => props.isShow ? 5 : -300}px;
  width: 300px;
  margin-top: 5px;
  height: calc(100% - 10px - ${HEADER_HEIGHT});
  border-radius: 10px;
  box-sizing: border-box;
  transition: left .7s ease;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
