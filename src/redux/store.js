import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './taskSlice';
import { searchFilterReducer } from './searchSlice';
import { filterReducer } from './filterSlice';
import { authSlice } from './auth/slice';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root-auth',
  version: 1,
  storage,
  whitelist: ['token'], // ✅
};

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    searchFilter: searchFilterReducer,
    filter: filterReducer,
    auth: persistReducer(persistConfig, authSlice),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
