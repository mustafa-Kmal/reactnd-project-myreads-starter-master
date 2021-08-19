import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import DropDown from "./DropDown";
import PropTypes from "prop-types";
import Book from "./Book";
import Shelf from "./Shelf";

class BookList extends React.Component {
 

 

  //   updateShelf2 = (book) => {

  //     const bookToChange = this.state.AllBooks.book;
  //     // const oldShlef = bookToChange.id;
  //     console.log( 'element id is:  ', bookToChange, 'and iteration id is:   ')

  //     this.setState((currState) => ({

  //       AllBooks: currState.AllBooks.filter((b) => {
  //         return b.id === book.id;
  //       })
  //     }));
  //   };

 

  render() {
    const  BookList  = this.props.Books;
    return (
      <div>
        <ol>
          {Object.entries(BookList).map((book) => {
              
            return (
              <li key={book[1].id}>
                {" "}
                <Book
                  BookID={book[0]}
                  BookCover={book[1].imageLinks.thumbnail}
                  BookTitle={book[1].title}
                  BookAuthors={book[1].authors}
                  shelf={book[1].shelf}
                  //   onUpdateShelf={this.updateShelf2(book)}
                />{" "}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default BookList;
