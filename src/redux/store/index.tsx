import {createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import rootReducer from '../reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// export default () => {
//   let store = createStore(persistedReducer);
//   let persistor = persistStore(store);
//   return {store, persistor};
// };
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
