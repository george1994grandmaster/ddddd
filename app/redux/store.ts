"use client";


import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer,  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import testReducer from './testSlice';


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  //blacklist: ['products'],
};

const rootReducer = combineReducers({
  datas: testReducer,
  
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootStore = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);