import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import homeReducer from './home/home';
import bookReducer from './books/books';

const bookSlice = combineReducers({ home: homeReducer, books: bookReducer });

const store = configureStore({
  reducer: bookSlice,
});

export default store;
