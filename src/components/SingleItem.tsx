import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {userProp} from './List';
import {colors} from '../theme/colors';

const SingleItem = ({item}: {item: userProp}) => {
  return (
    <View style={styles.card}>
      {item?.name && <Text style={styles.name}>{item.name}</Text>}
      {item?.email && <Text>{item.email}</Text>}
      {item?.gender && <Text>{item.gender}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: colors.white,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 7,
    padding: 25,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
    color: colors.grey,
    marginTop: 5,
  },
});

export default SingleItem;
