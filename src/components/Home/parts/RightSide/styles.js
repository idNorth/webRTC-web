import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: ${(props) => props.isShow ? 5 : -300}px;
  width: 300px;
  margin-top: 5px;
  height: calc(100% - 10px);
  border-radius: 10px;
  box-sizing: border-box;
  transition: right .7s ease;
  background-color: #fff;
`;

