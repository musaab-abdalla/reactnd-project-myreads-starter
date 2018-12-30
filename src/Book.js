import React, { Component } from 'react';

class Book extends Component {
  handleChange = (bookId, shelf) => {
    this.props.shelfChange(bookId, shelf);
  };
  render() {
    const { book } = this.props;
    const cover =
      !!book && book.imageLinks ? book.imageLinks.thumbnail : '<p>No cover available</p>';
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${cover}")`
            }}
          />
          <div className="book-shelf-changer">
            <select
              name={book.id}
              value={book.shelf}
              onChange={e => this.handleChange(e.target.name, e.target.value)}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    );
  }
}

export default Book;
