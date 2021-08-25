import React  from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import PropTypes from "prop-types";
import Book from "./Book";

import noCover from "./icons/no-cover-image.png";

class Shelf extends React.Component {
  static propTypes = {
    BooksInShelf: PropTypes.array.isRequired,
    ShelfName: PropTypes.string.isRequired,
  };

  state = {
    currntBooks: this.props.BooksInShelf,
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
