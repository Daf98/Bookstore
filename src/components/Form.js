import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import ReduxBooks from './ReduxBooks';
import { fetchDataFromAPI, addBookToAPI } from '../redux/API/api';

const Form = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState([]);

  const changeTitle = (e) => {
    setState({ ...state, title: e.target.value });
  };

  const changeAuthor = (e) => {
    setState({ ...state, author: e.target.value });
  };
  const formValidation = () => {
    if (state.title && state.author) {
      addBookToAPI(state.title, state.author);
      dispatch(addBook(state));
      setState({ title: null, author: null, id: null });
    }
  };
  // send state to UI
  useEffect(() => {
    dispatch(fetchDataFromAPI());
    // dispatch(removeBookFromAPI());
  }, []);

  return (
    <div>
      <ReduxBooks />
      <form>
        <h2>ADD NEW BOOK</h2>
        <input
          placeholder="Book title"
          onChange={changeTitle}
          value={state.title || ''}
        />
        <input
          placeholder="Book author"
          onChange={changeAuthor}
          value={state.author || ''}
        />
        <button type="button" onClick={formValidation}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
