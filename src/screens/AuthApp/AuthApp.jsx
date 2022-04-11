import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import config from 'resources/config';

function AuthApp({ navigation }) {
  useEffect(() => {
    async function bootstrap() {
      // checker for was email be verified when app was closed
      console.log({ navigation });
    }
    bootstrap();
  }, [navigation]);

  return <View />;
}

AuthApp.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func.isRequired,
  }).isRequired,
};

export default AuthApp;
