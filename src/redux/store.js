import contactsReducer from './contactsSlice';
import filtersReducer from './filtersSlice';
import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  whiteList: ['items'],
};

const pContactsReducer = persistReducer(contactsPersistConfig, contactsReducer);

const filtersPersistConfig = {
  key: 'filters',
  storage,
  whiteList: ['name'],
};

const pFiltersReducer = persistReducer(filtersPersistConfig, filtersReducer);

export const store = configureStore({
  reducer: {
    contacts: pContactsReducer,
    filters: pFiltersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
