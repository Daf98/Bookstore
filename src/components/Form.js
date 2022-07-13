import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState([]);

  const changeTitle = (e) => {
    setState({ ...state, title: e.target.value, id: uuidv4() });
  };

  const changeAuthor = (e) => {
    setState({ ...state, author: e.target.value });
  };
  const formValidation = () => {
    if (state.title && state.author) {
      dispatch(addBook(state));
      setState({ title: null, author: null, id: null });
    }
  };

  return (
    <form>
      <h2>ADD NEW BOOK</h2>
      <input placeholder="Book title" onChange={changeTitle} value={state.title || ''} />
      <input placeholder="Book author" onChange={changeAuthor} value={state.author || ''} />
      <button type="button" onClick={formValidation}>ADD BOOK</button>
    </form>
  );
};

export default Form;
