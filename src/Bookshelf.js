import React, { Component } from 'react';
import Book from './Book';

class Bookshelf extends Component {
  render() {
    const { books, shelfName, shelfChange } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                <Book book={book} shelfName={shelfName} shelfChange={shelfChange} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
