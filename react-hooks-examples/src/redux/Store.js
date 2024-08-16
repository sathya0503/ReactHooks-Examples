// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root.reducer';

let Store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
  });

export {Store};