import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { removeBook } from './redux/books/books';

const ReduxBooks = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <div>
      {books.map((book) => (
        <div key={uuidv4()}>
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <button
            type="button"
            onClick={() => {
              dispatch(removeBook(book.id));
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ReduxBooks;
