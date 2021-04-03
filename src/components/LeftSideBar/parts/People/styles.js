import styled from 'styled-components';

export const Wrapper = styled.div`
  width: inherit;
  border-bottom: 1px solid rgba(0,0,0,0.5);
`;

export const UserTab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: inherit;
  height: 60px;
  padding: 0 10px;
  cursor: pointer;
  
  &:hover {
    background-color: #cec;
  }
`;
