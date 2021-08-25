import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

import AllShelfs from "./AllShelfs";
import SearchPage from "./SearchPage";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";


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

  mergerTwoObjects = (obj1, obj2) => {
    var newArr = [];
    var temp = Object.keys(obj1).map((key) => {
      // console.log(key[1])
      return newArr.push(obj1[Number(key)]);
    });

    // console.log(newArr);

    const omomom = obj2.id;

    
    var newArr2 = [];
    newArr.map((ob) => {
      if (omomom !== ob.id) {
        newArr2.push(ob);
      }
    });

   

    newArr2.push(obj2);

       // console.log(objNew);
    return newArr2;
  };

  reloadShelves = async (book, shelf) => {
    const books = this.state.AllBooks;

    const BookToChange = Object.entries(books).find(
      (e) => e[1].id === book[1].id
    )
      ? Object.entries(books).find((e) => e[1].id === book[1].id)
      : book;
    console.log(book);

    const NewBookWillBeNumber = Object.keys(this.state.AllBooks).length;
    const NumberOfTheCurrentBookToChange = BookToChange[0];

    // console.log(book[1]);

    console.log(this.state.AllBooks);

    //  this.mergerTwoObjects(this.state.AllBooks, book[1]);
    

    console.log(this.mergerTwoObjects(this.state.AllBooks, book[1]));

    // BookToChange[1].shelf = shelf;
    

    // console.log(Object.entries(books).fisnd((e) => e[1].id == book[1].id));

    // if (
    //   !Object.entries(books).find((e) => e[1].id == book[1].id) ||
    //   typeof Object.entries(books).find((e) => e[1].id == book[1].id) ==
    //     "undefined"
    // ) {
    //   BooksAPI.get(BookToChange[1].id).then((receivedBook) => {
    //     // this.setState((prevState) => ({
    //     //   // let state = {...prevState.AllBooks,BookToChange};
    //     //   AllBooks: (prevState.AllBooks[NewBookWillBeNumber] = BookToChange),
    //     //   // AllBooks: {...prevState.AllBooks, BookToChange},
    //     // }));
    //   });
    // }

    // BooksAPI.update(BookToChange[1], shelf).then(() => {
    BooksAPI.update(BookToChange[1], shelf).then((response) => {
      BookToChange[1].shelf = shelf;
      
    //   this.setState((curr)=>{
    //     AllBooks : curr.AllBooks = {}
    //   }, () => {
       
    //  });
    console.log(this.state.AllBooks)

    this.setState(prevState => ({
      AllBooks: prevState.AllBooks
        // remove updated book from array
        .filter(bk => bk.id !== BookToChange[1].id)
        // add updated book to array
        .concat(BookToChange[1])
    }), ()=>(console.log(this.state.AllBooks))
    
    );


      //  this.state.AllBooks = this.mergerTwoObjects(this.state.AllBooks, BookToChange[1]);
      // console.log(this.state.AllBooks)
     

      // this.setState((prevState) => ({
      //   // AllBooks: (prevState.AllBooks[NewBookWillBeNumber] = BookToChange),
      //   // AllBooks: this.mergerTwoObjects(prevState.AllBooks, BookToChange[1]),
      //   AllBooks : prevState.AllBooks
      // }));
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
