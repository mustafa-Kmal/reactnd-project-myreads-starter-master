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
    console.log( this.props);
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{ShelfName}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {BooksInShelf.map((book) => {
                
              return (
                <li key={book[1].id}>
                  {" "}
                  <Book
                    BookID={book[1].id}
                    BookCover={book[1].imageLinks.thumbnail}
                    BookTitle={book[1].title}
                    BookAuthors={book[1].authors}
                    shelf={book[1].shelf}
                    onChangeShelf={this.props.reload}
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
