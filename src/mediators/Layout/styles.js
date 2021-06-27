import styled from 'styled-components';

import { HEADER_HEIGHT } from '../../constants/header';

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100% - ${HEADER_HEIGHT});
`;