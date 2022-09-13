import React from 'react';
import {Navigation} from 'react-native-navigation';

import Button from '../../components/Button';

const More = () => {
  const toggleModal = () => {
    // setIsVisible(prev => !prev);
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'ListContainer',
            },
          },
        ],
      },
    });
  };
  return (
    <>
      <Button onPress={() => toggleModal()} title={'Open Modal'} />
    </>
  );
};

export default More;
