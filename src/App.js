import React from 'react';
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

  onChangeShelf = (bookId, shelf) => {
    BooksAPI.get(bookId).then(book => {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;
        this.setState(previousState => ({
          books: previousState.books.filter(b => b.id !== bookId).concat(book)
        }));
      });
    });
  };

  render() {
    return (
      <div className="app">
        <SearchBooks books={this.state.books} shelfChange={this.onChangeShelf} />
        <ListBooks books={this.state.books} shelfChange={this.onChangeShelf} />
      </div>
    );
  }
}

export default BooksApp;
