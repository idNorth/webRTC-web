import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: inherit;
  height: 60px;
`

export const Icon = styled.img`
  height: 19px;
  cursor: pointer;
  margin-right: 6px;
  ${(props) => props.isOpen && `
    transform: rotate(180deg);
  `}
`