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

  state = {
    currntBooks: this.props.BooksInShelf,
  };

  deleteBookFromOldShelf = (book, shlef) => {
    if (
      Object.entries(this.state.currntBooks).find((e) => {
        if (typeof e[1] !== 'undefined') {
           
        return  e[1].id == book[1].id;
        }
      })
    ) {
      console.log("i came here to delete");
      const BookNumber = book[0];
     

      this.setState((currState) => {
        currntBooks: currState.currntBooks[BookNumber] = undefined;
      });
    }
  };

  addABookToTheNewShelf = (book, shlef) => {
    // console.log("i came here to add");
    // const numberOfBooks = this.state.currntBooks.Length;
    // console.log(this.state.currntBooks);

    // // await this.setState((currState) => {
    // //   currntBooks: currState.currntBooks[numberOfBooks] = book
    // // });
    // this.setState({ ...this.state.currntBooks, numberOfBooks: book });

    // console.log(this.state.currntBooks);
    // console.log("the new book was added here");
  };

  render() {
    const ShelfName = this.props.ShelfName;
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{ShelfName}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {Object.entries(this.state.currntBooks).map((book) => {
              if (typeof book[1] !== "undefined" && typeof book[1] !== undefined) {
                
                const coverImg =
                  book[1].imageLinks && book[1].imageLinks.thumbnail
                    ? book[1].imageLinks.thumbnail
                    : noCover;
                const title = book[1].title
                  ? book[1].title
                  : "No title available";

                return (
                  <Book
                    key={book[1].id}
                    books={this.state.currntBooks}
                    BookObj={book}
                    BookID={book[1].id}
                    BookCover={coverImg}
                    BookTitle={title}
                    BookAuthors={book[1].authors}
                    shelf={book[1].shelf}
                    onChangeShelf={this.props.reload}
                    filterOldShelf={this.deleteBookFromOldShelf}
                    makeNewShlef={this.addABookToTheNewShelf}
                  />
                );
              }
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
