import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  width: 100px;
  height: 35px;
  font-size: 18px;
  background-color: inherit;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
  cursor: crosshair;
  box-sizing: border-box;
  overflow: hidden;
  transition: color .7s ease;

  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    height: 100%;
    width: 100%;
    background-color: black;
    bottom: -100%;
    left: 0;
    transition: bottom .5s ease;
  }

  &:hover {
    color: #fff;
    &:after {
      bottom: 0%;
    }
  }
`;
