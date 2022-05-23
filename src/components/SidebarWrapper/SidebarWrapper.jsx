import React from 'react';
import { SideMenuView } from 'react-native-navigation-drawer-extension';

const SidbarWrapper = ({ children, componentId }) => (
  <SideMenuView
    style={{ flex: 1 }}
    drawerName="CustomDrawer"
    direction="left"
    passProps={{
      animationOpenTime: 300,
      animationCloseTime: 300,
      dismissWhenTouchOutside: true,
      fadeOpacity: 0.6,
      drawerScreenWidth: '75%' || 445,
      drawerScreenHeight: '100%' || 700,
      parentComponentId: componentId,
      style: {
        backgroundColor: 'white',
      },
    }}
    options={{
      layout: {
        componentBackgroundColor: 'transparent',
      },
    }}
  >
    {children}
  </SideMenuView>
);

export default SidbarWrapper;
