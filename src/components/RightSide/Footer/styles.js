import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  height: 50px;
  padding: 5px;
  background-color: #293B5F;
  justify-content: space-around;
  box-sizing: border-box;
`;

export const Input = styled.textarea`
  flex: .7;
  border: none;
  outline: none;
  resize: none;
`;

export const Button = styled.button`
  flex: .25;
  color: #fff;
  background-color: #000;
  border: none;
  cursor: crosshair;
`;