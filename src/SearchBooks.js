import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBooks extends Component {
  state = {
    query: '',
    results: []
  };

  handleQuery(e) {
    const query = e.target.value;
    this.setState({ query });

    this.searchResults(query);
  }

  searchResults(query) {
    if (query === '' || query === undefined) {
      this.setState(() => ({ results: [] }));
      return;
    }
    BooksAPI.search(query).then(books => {
      if (books.constructor === Array) {
        this.setState(() => ({ results: books }));
      } else {
        this.setState(() => ({ results: [] }));
      }
    });
  }

  render() {
    const { query, results } = this.state;
    const { books, shelfName, shelfChange } = this.props;
    let searchMessage;
    if (query !== '' && results.length === 0) {
      searchMessage = (
        <div style={{ textAlign: 'center' }}>
          <h2>We're Sorry!</h2>
          <p>We Can't seem to find any books that match your search</p>
        </div>
      );
    }
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.handleQuery(event)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {searchMessage}
          <ol className="books-grid">
            {results.map(book => (
              <li key={book.id}>
                <Book book={book} books={books} shelfName={shelfName} shelfChange={shelfChange} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
