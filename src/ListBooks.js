import React, { Component } from 'react';
import Bookshelf from './Bookshelf';

class ListBooks extends Component {
  state = {
    shelves: [
      { name: 'currentlyReading', value: 'Currently Reating' },
      { name: 'wantToRead', value: 'Want To Read' },
      { name: 'read', value: 'Read' }
    ]
  };
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.state.shelves.map(shelf => (
              <Bookshelf key={shelf.name} shelfName={shelf.value} />
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
