import styled from 'styled-components';

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 30px;
  height: 30px;
  background-color: green;
  cursor: pointer;
  user-select: none;
  border-radius: 50px;
  ${(props) => props.customStyles};
`;

export const Text = styled.div`
  font-size: 16px;
  color: #fff;
  ${(props) => props.customStyles};
`;
