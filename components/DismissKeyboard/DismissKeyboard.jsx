import React from 'react';
import PropTypes from 'prop-types';
import { Platform, ScrollView, KeyboardAvoidingView } from 'react-native';

function DismissKeyboard({
  children,
  keyboardVerticalOffset,
  behavior = 'padding',
  scrollViewContentContainerStyle = { flex: 1 },
}) {
  const withKeyboardDismiss = (
    <ScrollView
      contentContainerStyle={scrollViewContentContainerStyle}
      bounces={false}
      overScrollMode="never"
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  );

  return Platform.OS === 'ios' ? (
    <KeyboardAvoidingView
      behavior={behavior}
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      {withKeyboardDismiss}
    </KeyboardAvoidingView>
  ) : (
    withKeyboardDismiss
  );
}

DismissKeyboard.propTypes = {
  children: PropTypes.element.isRequired,
  keyboardVerticalOffset: PropTypes.number,
};

export default DismissKeyboard;
