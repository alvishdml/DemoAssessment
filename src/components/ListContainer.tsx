import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Navigation} from 'react-native-navigation';
import axios from 'axios';

import {colors} from '../theme/colors';
import List from './List';
import {useSelector, useDispatch} from 'react-redux';
import {fetchUsers} from '../redux/actions/user.actions';

const ListContainer = () => {
  const dispatch = useDispatch();
  const users: any = useSelector(state => state);
  useEffect(() => {
    if (!users?.user?.length) {
      axios.get('https://gorest.co.in/public/v2/users').then(res => {
        dispatch(fetchUsers(res?.data));
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    console.log(users, 'ussss');
  }, [users]);
  const toggleModal = () => {
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'AddEntry',
            },
          },
        ],
      },
    });
  };
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View />
        <Text style={styles.headerTitle}>My Modal</Text>
        <Text onPress={() => toggleModal()} style={styles.add}>
          Add
        </Text>
      </View>
      <List data={users.user} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 10,
  },
  add: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ListContainer;
