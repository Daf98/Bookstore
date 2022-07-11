import React from 'react';
import Book from './Book';
import Form from './Form';

const books = [];
const Home = () => (
  <div>
    <h1>Books</h1>
    {books.map((book) => (
      <Book key={book.key} title={book.title} author={book.author} />
    ))}
    <Form />
  </div>
);

export default Home;
