import React, { Component } from 'react';
import Bookshelf from './Bookshelf';

class ListBooks extends Component {
  state = {
    shelves: [
      { id: 'currentlyReading', value: 'Currently Reating' },
      { id: 'wantToRead', value: 'Want To Read' },
      { id: 'read', value: 'Read' }
    ]
  };
  bookList(books, shelf) {
    return books.filter(book => book.shelf === shelf);
  }
  render() {
    const { books, shelfChange } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.shelves.map(shelf => (
              <Bookshelf
                key={shelf.id}
                books={this.bookList(books, shelf.id)}
                shelfName={shelf.value}
                shelfChange={shelfChange}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <button>Add a book</button>
        </div>
      </div>
    );
  }
}

export default ListBooks;
