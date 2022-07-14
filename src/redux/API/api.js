import { fetchBooks } from '../books/books';

// fetch data from API
// move data to store
const logiccc = () => async (dispatch) => {
  const books = [];
  const data = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TZlhabzMuhgKOsXKoevL/books');
  const response = await data.json();
  Object.keys(response).map((key) => {
    const book = response[key][0];
    book.id = key;
    book.key = key;
    books.push(book);
    return null;
  });
  dispatch(fetchBooks(books));
};
export default logiccc;
