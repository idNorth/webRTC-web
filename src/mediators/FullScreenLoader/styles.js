import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: #000;
  ${(props) => props.isOverlay && 'opacity: 0.6'};
  z-index: 10;
`;