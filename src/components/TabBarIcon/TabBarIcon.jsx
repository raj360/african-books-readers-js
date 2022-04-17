import React from 'react';
import PropTypes from 'prop-types';

import colors from 'themes/colors';

function TabBarIcon({ icon: Icon, focused, fill, stroke }) {
  return (
    <Icon
      fill={fill || (focused ? colors.tabBarActive : colors.tabBarInactive)}
      stroke={stroke || null}
      style={{
        color: focused ? colors.tabBarActive : colors.tabBarInactive,
      }}
    />
  );
}

TabBarIcon.propTypes = {
  focused: PropTypes.bool,
  icon: PropTypes.elementType.isRequired,
  fill: PropTypes.any,
  stroke: PropTypes.any,
};

TabBarIcon.defaultProps = {
  focused: false,
};

export default TabBarIcon;
