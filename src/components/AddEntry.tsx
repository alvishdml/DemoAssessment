import {View, Text, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useState} from 'react';
import {colors} from '../theme/colors';
import Button from './Button';
import {addUser} from '../redux/actions/user.actions';

const AddEntry = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState<string>('');
  const users: any = useSelector(state => state);
  const addUserToList = () => {
    dispatch(
      addUser([
        ...users.user,
        {name: text, id: 1, gender: null, email: null, status: 'active'},
      ]),
    );
  };
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <View />
        <Text style={styles.headerTitle}>Adding Data</Text>
        <View />
      </View>
      <View style={styles.inputArea}>
        <TextInput
          onChangeText={val => setText(val)}
          value={text}
          placeholder="Add your text here"
          multiline={true}
        />
      </View>
      <Button title="Done" onPress={() => addUserToList()} />
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
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  inputArea: {
    backgroundColor: colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 20,
    marginHorizontal: 15,
    height: '50%',
    borderRadius: 7,
    padding: 10,
  },
});

export default AddEntry;
