import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${(props) => props.isShow ? 5 : -300}px;
  width: 300px;
  margin-top: 5px;
  height: calc(100% - 10px);
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

export const roundButtonCS = {
  button: {
    left: 305,
    top: 10,
    height: 40,
    width: 40,
  },
}

