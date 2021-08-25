import React from "react";
import "./App.css"; 

import Book from "./Book";
import noCover from "./icons/no-cover-image.png";

class BookList extends React.Component {
  render() {
    const BookListt = this.props.Books;
    return (
      <div className='search-books-results list-books-content'>
        <ol className='books-grid'>
          {Object.entries(BookListt).map((book) => {
            const coverImg =
              book[1].imageLinks && book[1].imageLinks.thumbnail
                ? book[1].imageLinks.thumbnail
                : noCover;
            const title = book[1].title ? book[1].title : "No title available";
          
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
