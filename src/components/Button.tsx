import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {colors} from '../theme/colors';

interface buttonProps {
  title: string;
  onPress: Function;
}

const Button = (props: buttonProps) => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={styles.openModalButton}>
      <Text style={styles.buttonTitle}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  openModalButton: {
    backgroundColor: colors.primary,
    width: '60%',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 10,
  },
  buttonTitle: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default Button;
