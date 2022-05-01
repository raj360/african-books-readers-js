import React from 'react';
import Text from 'components/Text';

const TabLabel = ({ focused, title, position }) => {
  return (
    <Text
      style={{
        marginLeft: position === 'beside-icon' ? 20 : 0,
        marginTop: position === 'beside-icon' ? 3 : 0,
      }}
    >
      {title}
    </Text>
  );
};

export default TabLabel;
