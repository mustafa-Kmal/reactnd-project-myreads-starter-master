import React from "react";
import "./App.css";

import PropTypes from "prop-types";
import Book from "./Book";
class Shelf extends React.Component {
  static propTypes = {
    BooksInShelf: PropTypes.array.isRequired,
    ShelfName: PropTypes.string.isRequired,
  };

  render() {
    const ShelfName = this.props.ShelfName;
    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{ShelfName}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {this.props.BooksInShelf.filter((b) => {
              return (
                typeof b !== "undefined" &&
                typeof b !== undefined &&
                b.imageLinks &&
                b.imageLinks.thumbnail &&
                b.title
              );
            }).map((bookElement) => {
              return (
                <Book
                  key={bookElement.id}
                  BookObj={bookElement}
                  BookID={bookElement.id}
                  BookCover={bookElement.imageLinks.thumbnail}
                  BookTitle={bookElement.title}
                  BookAuthors={bookElement.authors}
                  shelf={bookElement.shelf}
                  onChangeShelf={this.props.reload}
                />
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
