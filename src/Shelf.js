import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import DropDown from "./DropDown";
import PropTypes from "prop-types";
import Book from "./Book";

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
            {BooksInShelf.map((book) => {
              return (
                <li key={parseInt(book.id)}>
                  {" "}
                  <Book
                    key={parseInt(book.id)}
                    BookCover={book.BookCover}
                    BookTitle={book.BookTitle.toString()}
                    BookAuthors={book.BookAuthors.toString()}
                    shelf={book.shelf.toString()}
                  />
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
