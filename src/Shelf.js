import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import DropDown from "./DropDown";
import PropTypes from "prop-types";
import Book from "./Book";
import ResultBook from "./ResultBook";
import noCover from "./icons/no-cover-image.png";

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
              const coverImg =
                book[1].imageLinks && book[1].imageLinks.thumbnail
                  ? book[1].imageLinks.thumbnail
                  : noCover;
              const title = book[1].title
                ? book[1].title
                : "No title available";

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
                //     <li key={book[1].id}>
                //     {" "}
                //     <ResultBook
                //       BookObj={book}
                //       BookID={book[1].id}
                //       BookCover={coverImg}
                //       BookTitle={title}
                //       BookAuthors={book[1].authors}
                //       shelf={book[1].shelf}
                //       onChangeShelf={this.props.reload}
                //     />{" "}
                //   </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
