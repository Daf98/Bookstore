import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBookFromAPI } from '../redux/API/api';
import { removeBook } from '../redux/books/books';
import Percentage from './Percentage';
import '../styles/ReduxBooks.css';

const ReduxBooks = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  return (
    <div className="books-container">
      {books ? (
        books.map((book) => (
          <div className="book-container" key={book.id}>
            <div className="info-container">
              <div className="book-info">
                <p className="category">Fiction</p>
                <h1>{book.title}</h1>
                <h4 className="author">{book.author}</h4>
              </div>
              <div className="button-container">
                <button type="button" className="book-buttons">Comments</button>
                <div><p className="button-divider">|</p></div>
                <button
                  className="book-buttons"
                  type="button"
                  onClick={() => {
                    removeBookFromAPI(book.id);
                    dispatch(removeBook(book.id));
                  }}
                >
                  Remove
                </button>
                <div><p className="button-divider">|</p></div>
                <button type="button" className="book-buttons">Edit</button>
              </div>
            </div>
            <div className="map-container">
              <Percentage />
              <span className="span">
                <p id="sixty4">64%</p>
                <p className="completed">Completed</p>
              </span>
              <div id="line" />
            </div>
            <div className="chapter-container">
              <p className="completed chapter">CURRENT CHAPTER</p>
              <h4 className="current-chapter">Chapter 17</h4>
              <button className="chapter-button" type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ReduxBooks;
