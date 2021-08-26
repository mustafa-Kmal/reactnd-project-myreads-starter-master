import React from "react";
import "./App.css";

import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

import BookList from "./BookList";

class SearchPage extends React.Component {
  state = {
    query: "",
    showenBooks: [],
  };



  updateQuery = (q) => {
    this.setState(() => ({
      query: q,
    }));

    if (q) {
      BooksAPI.search(q.trim(), 20).then((showenBooks) => {
        showenBooks.length > 0
          ? this.setState({ showenBooks: showenBooks }, function() {
              console.log(this.state.query);
            })
          : this.setState({ showenBooks: []});
      });

      // if query is empty => reset state to default
    } else this.setState({ showenBooks: [] });
  };

  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='./' className='close-search' />

          {/* <div className='search-books-input-wrapper'> */}
          <div >

            <input className='search-books-input-wrapper'
              type='text'
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={(e) => this.updateQuery(e.target.value)}
            />
            <div>
              <BookList
                availableBooks = {this.props.Books}
                showenBooks={this.state.showenBooks}
                reload={this.props.reload}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
