import React from "react";
import "./App.css";
import Book from "./Book";

class BookList extends React.Component {
  updateShelvesForShowenBooks = (bookelement) => {
    const SHELF = this.props.availableBooks.find((e) => e.id === bookelement.id)
      ? this.props.availableBooks.find((e) => e.id === bookelement.id).shelf
      : "none";

    return SHELF;
  };

  render() {
    const BookListt = this.props.showenBooks;
    console.log(BookListt);
    return (
      <div className='search-books-results'>
        <ol className='books-grid'>
          {BookListt.filter((b) => {
            return (
              typeof b !== "undefined" &&
              typeof b !== undefined &&
              b.imageLinks &&
              b.imageLinks.thumbnail &&
              b.title
            );
          }).map((bookElement) => {
            const newShelf = this.updateShelvesForShowenBooks(bookElement);
            return (
              <Book
                key={bookElement.id}
                BookObj={bookElement}
                BookID={bookElement.id}
                BookCover={bookElement.imageLinks.thumbnail}
                BookTitle={bookElement.title}
                BookAuthors={bookElement.authors}
                shelf={newShelf}
                onChangeShelf={this.props.reload}
              />
            );
          })}
        </ol>
      </div>
    );
  }
}

export default BookList;
