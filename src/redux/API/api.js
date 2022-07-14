import { fetchBooks } from '../books/books';

const appURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/TZlhabzMuhgKOsXKoevL/books';
// fetch data from API and move it to store
const fetchDataFromAPI = () => async (dispatch) => {
  const books = [];
  const data = await fetch(appURL);
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

// make post request to add book
const addBookToAPI = (title, author, id) => {
  fetch(appURL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category: 'Fiction',
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
};

// make delete request to remove book
const removeBookFromAPI = (id) => {
  fetch(`${appURL}/${id}`, {
    method: 'DELETE',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json',
    },
  });
};

export { fetchDataFromAPI, addBookToAPI, removeBookFromAPI };
