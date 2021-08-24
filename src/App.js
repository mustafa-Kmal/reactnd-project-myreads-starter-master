import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Book from "./Book";
import BookList from "./BookList";
import AllShelfs from "./AllShelfs";
import Shelf from "./Shelf";
import SearchPage from "./SearchPage";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import _ from 'lodash';

class BooksApp extends React.Component {
  state = {
    AllShelfs: {
      currentlyReading: [],
      wantToRead: [],

      read: [],
    },
    showenBooks: [],

    AllBooks: [],


    query: "",
  };

  componentDidMount() {
    BooksAPI.getAll().then((AllBooks) => {
      this.setState({ AllBooks });
    });
  }

  reloadShelves = async (book, shelf) => {
    const books = this.state.AllBooks;

    const BookToChange = Object.entries(books).find(
      (e) => e[1].id == book[1].id
    )
      ? Object.entries(books).find((e) => e[1].id == book[1].id)
      : book;
    // console.log(book);

    const NewBookWillBeNumber = Object.keys(this.state.AllBooks).length;
    const NumberOfTheCurrentBookToChange = BookToChange[0];
 

    BookToChange[1].shelf = shelf;

    BooksAPI.update(BookToChange[1], shelf).then(() => {
      // console.log(this.state.AllBooks);

      
      // this.setState((currstate)=>{ 
      //   return { AllBooks: {...currstate.AllBooks, BookToChange}}
      //  });

      // console.log(this.state.AllBooks);
      // this.setState((curr)=>{ 
      
      // // console.log('it will be number ', BookToChange[0]);
      // // console.log('and the element is: ', BookToChange[1]);

      // //   Object.entries(curr.AllBooks).filter((bk)=> {
      // //     console.log(bk[1].id , BookToChange[1].id , bk[1].id !== BookToChange[1].id );
      // //     return bk[1].id !== BookToChange[1].id
      // //   })
      // //   console.log(curr.AllBooks);

      //   let state = {...curr.AllBooks,  NumberOfTheCurrentBookToChange: BookToChange[1]}
      //   return {AllBooks : {state}}

      // //   curr.AllBooks[BookToChange[0]]=BookToChange[1]
      // //   console.log(curr.AllBooks);


      //   // let AllBooks = _.merge(curr.AllBooks,BookToChange[1] )
      //   // let AllBooks= Object.assign({},JSON.parse(JSON.stringify(BookToChange)), JSON.parse(JSON.stringify(curr.AllBooks)))

      //   // AllBooks : curr.AllBooks[BookToChange[0]].shelf = shelf
        
      //  });
   
// console.log(this.state.AllBooks);

      
      this.setState((prevState) => ({
        // let state = {...prevState.AllBooks,BookToChange};
        AllBooks: (prevState.AllBooks[NewBookWillBeNumber] = BookToChange),
        // AllBooks: {...prevState.AllBooks, BookToChange},

      }));
      // console.log(this.state.AllBooks);
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

              <div className='open-search'>
                <Link to='./search' className='search-books'>
                  <button>Add a book</button>
                </Link>
              </div>
            </div>
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
