import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import DropDown from "./DropDown";
import PropTypes from "prop-types";
import Book from "./Book";
import Shelf from "./Shelf";
import noCover from "./icons/no-cover-image.png";
import ResultBook from "./ResultBook";

class BookList extends React.Component {
  render() {
    const BookList = this.props.Books;
    return (
      <div className='search-books-results'>
        <ol className='books-grid'>
          {Object.entries(BookList).map((book) => {
            const coverImg =
              book[1].imageLinks && book[1].imageLinks.thumbnail
                ? book[1].imageLinks.thumbnail
                : noCover;
            const title = book[1].title ? book[1].title : "No title available";
            {
              console.log(BookList);
            }
            return (
              <li key={book[1].id}>
                {" "}
                <Book
                  books={this.props.BooksInShelf}
                  BookObj={book}
                  BookID={book[1].id}
                  BookCover={coverImg}
                  BookTitle={title}
                  BookAuthors={book[1].authors}
                  shelf={book[1].shelf}
                  onChangeShelf={this.props.reload}
                />
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default BookList;
