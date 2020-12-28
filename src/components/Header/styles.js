import styled from 'styled-components';

import { HEADER_HEIGHT } from '../../constants/header';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${HEADER_HEIGHT};
  background-color: #fff;
`;

export const roundButtonCS = {
  button: {
    position: 'static',
    height: 20,
  },
}