import { ICONS } from './';

export const HEADER_HEIGHT = '40px';
export const ACTION_TYPE = {
  OPEN_CLOSE_LEFT_SIDE: 'OPEN_CLOSE_LEFT_SIDE',
  RIGHT: 'RIGHT',
};

export const HEADER_ITEMS = [
  {
    icon: ICONS.MENU,
    type: ACTION_TYPE.OPEN_CLOSE_LEFT_SIDE,
    onClick: (LeftSideContext) => LeftSideContext.showLeftSideBar(),
  },
];