import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import DropDown from "./DropDown";
import PropTypes from "prop-types";
import Book from "./Book";
import BookList from "./BookList";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class SearchPage extends React.Component {
  static propTypes = {
    BooksInShelf: PropTypes.array.isRequired,
    ShelfName: PropTypes.string.isRequired,
  };

  state = {
    query: "",
    showenBooks: [],
  };


  componentDidMount() {
    BooksAPI.getAll().then((showenBooks) => {
      // const newAllBooks = Object.entries(AllBooks).map((b)=>{ b[1]});

      this.setState({ showenBooks });
    });
  }

  updateQuery = (q) => {
    this.setState(() => ({
      query: q,
    }));

    if (this.state.query) {
      // this.state.AllBooks = this.state.AllBooks;
      BooksAPI.search(this.state.query.trim().toLowerCase(), 20).then(
        (showenBooks) => {
          showenBooks.length > 0
            ? this.setState({ showenBooks: showenBooks })
            : this.setState({ showenBooks: [], searchErr: true });
        }
      );

      // if query is empty => reset state to default
    } else this.setState({ showenBooks: [] });
  };

  render() {
    const { BooksInShelf, ShelfName } = this.props;
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='./' className='close-search'>
            <button className='close-search' onClick={this.props.onClick}>
              Close
            </button>
          </Link>

          <div className='search-books-input-wrapper'>
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}

            <input
              type='text'
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={(e) => this.updateQuery(e.target.value)}
            />

            {/* {console.log(b[1].title.toLowerCase())} */}

            <div>
              
              <BookList Books={this.state.showenBooks} reload={this.props.reload} />
            </div>
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid' />
        </div>
      </div>
    );
  }
}

export default SearchPage;
