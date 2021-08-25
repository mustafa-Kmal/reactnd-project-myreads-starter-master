import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
import noCover from "./icons/no-cover-image.png";

class SearchPage extends React.Component {
  state = {
    query: "",
    showenBooks: [],
  };

  updateShelvesForShowenBooks = (bookelement) => {
    const SHELF = Object.entries(this.props.Books).find(
      (e) => e[1].id === bookelement[1].id
    )
      ? Object.entries(this.props.Books).find(
          (e) => e[1].id === bookelement[1].id
        )[1].shelf
      : "none";

    return SHELF;
  };

  updateQuery = (q) => {
    this.setState(() => ({
      query: q,
    }));

    if (q) {
      // this.state.AllBooks = this.state.AllBooks;
      BooksAPI.search(q.trim(), 20).then((showenBooks) => {
        showenBooks.length > 0
          ? this.setState({ showenBooks: showenBooks }, function () {
            console.log(this.state.query);
          })
          : this.setState({ showenBooks: [], searchErr: true });
      });

      // if query is empty => reset state to default
    } else this.setState({ showenBooks: [] })
  };


  render() {
    // const { BooksInShelf, ShelfName } = this.props;
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='./' className='close-search'>
            {/* <button className='close-search' onClick={this.props.onClick}>
              Close
            </button> */}
          </Link>

          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={(e) => this.updateQuery(e.target.value)}
            />
            <div>
              {/* <BookList
                Books={this.state.showenBooks}
                reload={this.props.reload}
              /> */}

              <ol className='books-grid'>
                {Object.entries(this.state.showenBooks).map((book) => {
                  const coverImg =
                    book[1].imageLinks && book[1].imageLinks.thumbnail
                      ? book[1].imageLinks.thumbnail
                      : noCover;
                  const title = book[1].title
                    ? book[1].title
                    : "No title available";

                  const SHELF = this.updateShelvesForShowenBooks(book);

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
                        shelf={SHELF}
                        onChangeShelf={this.props.reload}
                      />
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
