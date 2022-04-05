import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import config from 'resources/config';

function AuthApp({ navigation }) {
  const dispatch = useDispatch();

  useEffect(() => {
    async function bootstrap() {
      // checker for was email be verified when app was closed
      console.log({navigation dispatch})
    }
    bootstrap();
  }, [navigation dispatch]);

  return <View />;
}

AuthApp.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func.isRequired,
  }).isRequired,
};

export default AuthApp;
