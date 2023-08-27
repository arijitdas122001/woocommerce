import { configureStore } from "@reduxjs/toolkit";
import CartRedux from "./CartRedux";
import UserRedux from "./UserRedux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
const persistedReducer1 = persistReducer(persistConfig, UserRedux)
const persistedReducer2 = persistReducer(persistConfig, CartRedux)
export const store=configureStore({
    reducer:{
        cart:persistedReducer2,
        user:persistedReducer1,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export let persistor = persistStore(store)