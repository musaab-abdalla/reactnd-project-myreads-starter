import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState(() => ({ books })));
  }

  onChangeShelf = (bookId, newShelf) => {
    BooksAPI.get(bookId).then(bookToMove => {
      BooksAPI.update(bookToMove, newShelf).then(() => {
        bookToMove.shelf = newShelf;
        this.setState(prevState => ({
          books: prevState.books.filter(book => book.id !== bookId).concat(bookToMove)
        }));
      });
    });
  };

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/search"
          render={() => <SearchBooks books={books} shelfChange={this.onChangeShelf} />}
        />
        <Route
          exact
          path="/"
          render={() => <ListBooks books={books} shelfChange={this.onChangeShelf} />}
        />
      </div>
    );
  }
}

export default BooksApp;
