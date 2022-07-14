import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBookFromAPI } from '../redux/API/api';
import { removeBook } from '../redux/books/books';

const ReduxBooks = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <div>
      {books ? (
        books.map((book) => (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <button
              type="button"
              onClick={() => {
                removeBookFromAPI(book.id);
                dispatch(removeBook(book.id));
              }}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ReduxBooks;
