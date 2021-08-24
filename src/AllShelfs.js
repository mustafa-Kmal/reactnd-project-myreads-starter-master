import React, { Component } from "react";
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
            if (this.state.AllShelfs.hasOwnProperty(shelfElement)) {
              var element = this.state.AllShelfs[shelfElement];
              var BObjcts = [];

              Object.entries(this.props.Books).map((book) => {
                if (book[1].shelf) {
                  if (
                    book[1].shelf
                      .toString()
                      .replaceAll(/\s/g, "")
                      .toLowerCase()
                      .localeCompare(
                        Object.getOwnPropertyNames(this.state.AllShelfs)
                          [i].toString()
                          .toLowerCase()
                      ) === 0
                  ) {
                    element.push(book[1]);
                    BObjcts.push(book);
                  }
                }
              });
            }

            return (
              <Shelf
                key={i}
                ShelfName={Object.getOwnPropertyNames(this.state.AllShelfs)[i]}
                BooksInShelf={element}
                Oobjects={BObjcts}
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
