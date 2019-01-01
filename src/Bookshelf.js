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
            {books.length === 0 ? (
              <div>
                <div className="img-no-books" />
                <h4>No books found.</h4>
              </div>
            ) : (
              books.map(book => (
                <li key={book.id}>
                  <Book book={book} books={books} shelfName={shelfName} shelfChange={shelfChange} />
                </li>
              ))
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
