import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';
import { tasksReducer } from './taskSlice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['searchStr'],
};
const persistConfigCounter = {
  key: 'counterPersistor',
  version: 1,
  storage,
};

export const store = configureStore({
  reducer: {
    counter: persistReducer(persistConfigCounter, counterReducer),
    tasks: persistReducer(persistConfig, tasksReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
