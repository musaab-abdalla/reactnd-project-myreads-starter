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

  handelShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(
      BooksAPI.getAll().then(books => {
        this.setState(() => ({ books }));
      })
    );
  };

  render() {
    return (
      <div className="app">
        <SearchBooks books={this.state.books} shelfChange={this.handelShelfChange} />
        <ListBooks books={this.state.books} shelfChange={this.handelShelfChange} />
      </div>
    );
  }
}

export default BooksApp;
