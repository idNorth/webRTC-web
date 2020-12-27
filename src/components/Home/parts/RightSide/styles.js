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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  margin-top: 5px;
  width: 100%;
`;

export const roundButtonCS = {
  button: {
    right: 305,
    top: 10,
    height: 40,
    width: 40,
  },
}

export const styledButtonCS = {
  width: '50%',
}

