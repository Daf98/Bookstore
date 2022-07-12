// Create action constants
const BOOK_ADDED = 'BOOK_ADDED';
const BOOK_REMOVED = 'BOOK_REMOVED';
// Write action creators to add and remove books
export const addBook = (book) => ({
  type: BOOK_ADDED,
  title: book.title,
  author: book.author,
  id: book.id,
});
export const removeBook = (book) => ({
  type: BOOK_REMOVED,
  id: book.id,
});

// Create reducer for booklist
const bookReducer = (state = [], action) => {
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
      return state.filter((id) => id !== action.id);
    default:
      return state;
  }
};
export default bookReducer;
