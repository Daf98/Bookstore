// Create action constants
const BOOK_ADDED = 'boookstore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';
const BOOKS_FETCHED = 'boookstore/books/BOOKS_FETCHED';
// Write action creators to add and remove books
export const addBook = (book) => ({
  type: BOOK_ADDED,
  title: book.title,
  author: book.author,
  id: book.id,
});
export const removeBook = (id) => ({
  type: BOOK_REMOVED,
  id,
});
export const fetchBooks = (getBooks) => ({
  type: BOOKS_FETCHED,
  books: getBooks,
});

const bookState = [];

// Create reducer for booklist
const bookReducer = (state = bookState, action) => {
  switch (action.type) {
    case BOOK_ADDED:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          id: action.id,
        },
      ];
    case BOOK_REMOVED:
      return state.filter((book) => book.id !== action.id);
    case BOOKS_FETCHED:
      return action.books;
    default:
      return state;
  }
};
export default bookReducer;
