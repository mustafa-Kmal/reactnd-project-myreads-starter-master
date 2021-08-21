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
            {Object.entries(BooksInShelf).map((book) => {
                
              return (
                <li key={book[1].id}>
                  {" "}
                  <Book
                    book={book}
                    onChangeShelf={this.props.reload}
                    books = {this.props.BooksInShelf}
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
