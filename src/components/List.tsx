import {FlatList, ListRenderItem, StyleSheet} from 'react-native';
import React from 'react';

import SingleItem from './SingleItem';

export interface userProp {
  id: number;
  name: string | null;
  email: string | null;
  gender: string | null;
  status: string | null;
}

const renderItem: ListRenderItem<userProp> = ({item}: {item: userProp}) => {
  return <SingleItem item={item} />;
};

const List = ({data}: {data: []}) => {
  return (
    <FlatList
      contentContainerStyle={styles.listContainer}
      renderItem={renderItem}
      data={data}
      keyExtractor={(item: userProp) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 10,
  },
});

export default List;
