import styled, { css } from 'styled-components';

const commonStyles = css`
  position: fixed;
  top: 20px;
  left: 50%;
  max-width: 300px;
  padding: 15px;
  z-index: 999;
  user-select: none;
  cursor: crosshair;
  opacity: 1;
  animation: smoothly .5s ease;
  
  @keyframes smoothly {
    0% { top: 10px; opacity: 0; }
    100% { top: 20px; opacity: 1; }
  }
`;

export const SuccessNotification = styled.div`
  border: 2px solid rgba(20, 245, 0, 1);
  background-color: rgb(159, 219, 169);
  ${commonStyles};
`;

export const ErrorNotification = styled.div`
  border: 2px solid rgba(245, 32, 39, 1);
  background-color: rgb(214, 161, 166);
  ${commonStyles}
`;

export const WarningNotification = styled.div`
  border: 2px solid rgba(245, 240, 51, 1);
  background-color: rgb(210, 218, 175);
  ${commonStyles}
`;