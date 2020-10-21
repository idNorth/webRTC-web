import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  width: 200px;
  height: 30px;
  border-radius: 10px;
  box-shadow: 0 0 0 3px #cecece;
  
  ${(props) => props.customStyles};
  
  &:focus {
    outline: none;
  }
`;
