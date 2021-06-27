import styled from 'styled-components';

import { HEADER_HEIGHT } from '../../constants/header';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: #DBE6FD;
  width: 100%;
  height: ${HEADER_HEIGHT};
  background-color: #293B5F;
  box-sizing: border-box;
`;
