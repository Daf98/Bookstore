import { configureStore, createSlice } from '@reduxjs/toolkit';
import homeReducer from './home/home';
import bookReducer from './books/books';

// Create root reducer
const counterSlice = createSlice({
  name: 'counter',
  initialState: [],
  reducers: {
    homeReducer,
    bookReducer,
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

store.dispatch(homeReducer());
store.dispatch(bookReducer());
