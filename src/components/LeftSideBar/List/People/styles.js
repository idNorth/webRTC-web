import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export const UserTab = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60px;
  padding: 0 10px;
  cursor: pointer;
  
  &:hover {
    background-color: #cec;
  }
`;
