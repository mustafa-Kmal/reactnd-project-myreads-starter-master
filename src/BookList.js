import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import DropDown from "./DropDown";
import PropTypes from "prop-types";
import Book from "./Book";
import Shelf from "./Shelf";
import noCover from './icons/no-cover-image.png';


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
     
          const BookList  = this.props.Books;

    return (
      <div>
        <ol>
          {Object.entries(BookList).map((book) => {
              const coverImg =
              book[1].imageLinks && book[1].imageLinks.thumbnail
                ? book[1].imageLinks.thumbnail
                : noCover;
            const title = book[1].title ? book[1].title : 'No title available';
              
            return (
              <li key={book[1].id}>
                {" "}{console.log(book)}
                <Book
                  BookID={book[1].id}
                  BookCover={coverImg}
                  BookTitle={title}
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
