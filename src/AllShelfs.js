import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

import Shelf from "./Shelf";

class AllShelfs extends React.Component {
  state = {
    AllShelfs: {
      currentlyReading: [],
      wantToRead: [],

      read: [],
    },
  };

  render() {
    return (
      <div className='list-books-content'>
        {" "}
        <ol>
          {Object.keys(this.state.AllShelfs).map((shelfElement, i) => {
            var shelfBooks;
            if (this.state.AllShelfs.hasOwnProperty(shelfElement)) {
              shelfBooks = this.props.Books.filter((book) => {
                return (
                  book.shelf
                    .toString()
                    .replaceAll(/\s/g, "")
                    .toLowerCase() ===
                  Object.getOwnPropertyNames(this.state.AllShelfs)[i].toString().toLowerCase()
                );
              });
            }
            return (
              <Shelf
                key={i}
                ShelfName={Object.getOwnPropertyNames(this.state.AllShelfs)[i]}
                BooksInShelf={shelfBooks}
                reload={this.props.reload}
              />
            );
          })}
        </ol>
      </div>
    );
  }
}

export default AllShelfs;
