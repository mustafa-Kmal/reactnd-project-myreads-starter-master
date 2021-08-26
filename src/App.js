import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

import AllShelfs from "./AllShelfs";
import SearchPage from "./SearchPage";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";


class BooksApp extends React.Component {
  state = {
      AllBooks: [],

      };

  componentDidMount() {
    BooksAPI.getAll().then((AllBooks) => {
      this.setState({ AllBooks });
    });
  }

  reloadShelves = async (book, shelf) => {

    BooksAPI.update(book, shelf).then((response) => {
      book.shelf = shelf;
      

    console.log(this.state.AllBooks)

    this.setState(prevState => ({
      AllBooks: prevState.AllBooks
        // remove updated book from array
        .filter(bk => bk.id !== book.id)
        // add updated book to array
        .concat(book)
    }), ()=>(console.log(this.state.AllBooks))
    
    );

    });
  };

  render() {
    return (
      <div className='app'>
        <Route
          exact
          path='/search'
          render={() => (
            <SearchPage
              updateQuery={this.updateQuery}
              Books={this.state.AllBooks}
              reload={this.reloadShelves}
              // onClick={() => this.setState({ showSearchPage: false })}
            />
          )}
        />

        <Route
          exact
          path='/'
          render={() => (
            <div className='list-books'>
              <div className='list-books-title'>
                <h1>MyReads</h1>
              </div>

              <AllShelfs
                Books={this.state.AllBooks}
                reload={this.reloadShelves}
              />

              <div className='open-search button'>
                <Link
                  to='./search'
                  className='search-books button open-search'
                />
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
