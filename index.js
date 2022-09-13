/**
 * @format
 */
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import App from './App';
import AddEntry from './src/components/AddEntry';
import ListContainer from './src/components/ListContainer';
// import {store, persistor} from './src/redux/store';
import Home from './src/screens/Home';
import More from './src/screens/More';
import {persistor, store} from './src/redux/store';

Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('More', () => More);
Navigation.registerComponent('ListContainer', () => props => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ListContainer {...props} />
    </PersistGate>
  </Provider>
));
Navigation.registerComponent('AddEntry', () => props => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AddEntry {...props} />
    </PersistGate>
  </Provider>
));

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                    options: {
                      bottomTab: {
                        text: 'Home',
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'More',
                    options: {
                      bottomTab: {
                        text: 'More',
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
});
