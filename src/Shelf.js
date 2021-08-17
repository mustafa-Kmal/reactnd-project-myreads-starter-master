import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import DropDown from "./DropDown";
import PropTypes from "prop-types";

class Shelf extends React.Component {
  static propTypes = {
    BooksInShelf: PropTypes.array.isRequired,
    ShelfName: PropTypes.string.isRequired,
  };

  render() {
    const { BooksInShelf, ShelfName } = this.props;
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{ShelfName}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {BooksInShelf.map((Book) => {
              return (
                <li>
                  {" "}
                  <Book
                    BookCover={Book.BookCover}
                    BookTitle={Book.BookTitle}
                    BookAuthors={Book.BookAuthors}
                    shelf={"Read"}
                  />{" "}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
