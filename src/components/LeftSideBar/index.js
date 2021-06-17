import React, { memo } from 'react';

import Footer from './Footer';
import List from './List';
import {
  Wrapper,
  TabsWrapper,
  Tab,
} from './styles';

const TABS = [
  { label: 'Groups' },
  { label: 'People' }
]

const LeftSideView = memo(({
                             isShow,
                             currentTab,
                             setCurrentTab,
                           }) => {


  const onTabClick = (i) => {
    if (i === currentTab) return;
    setCurrentTab(i);
  }

  return (
    <Wrapper isShow={isShow}>
      <div style={{width: '100%'}}>
        <TabsWrapper>
          {
            TABS.map((tab, index) => (
              <Tab
                key={index}
                onClick={() => onTabClick(index)}
                isActive={currentTab === index}
              >
                <span>{tab.label}</span>
              </Tab>
            ))
          }
        </TabsWrapper>
        <List currentList={currentTab}/>
      </div>
      <Footer />
    </Wrapper>
  )
})

export default LeftSideView;
