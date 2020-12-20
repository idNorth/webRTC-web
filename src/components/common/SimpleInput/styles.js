import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) => props.customStyles}
`;

export const Input = styled.input`
  height: 30px;
  width: 200px;
  background-color: inherit;
  border: none;
  font-size: 20px;
  border-bottom: 2px solid black;
  outline: none;
  ${(props) => props.customStyles}
`;

export const Error = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  ${(props) => props.customStyles}
`

export const Warning = styled.div`
  ${(props) => props.customStyles}
`
