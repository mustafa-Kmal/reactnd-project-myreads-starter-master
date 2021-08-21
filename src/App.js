import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Book from "./Book";
import BookList from "./BookList";
import AllShelfs from "./AllShelfs";
import Shelf from "./Shelf";

class BooksApp extends React.Component {
  state = {
    AllShelfs: {
      currentlyReading: [],
      wantToRead: [],

      read: [],
    },

    AllBooks: [
      // "0": {
      //   id: "1",
      //   BookCover: {
      //     width: 128,
      //     height: 193,
      //     backgroundImage:
      //       'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
      //   },
      //   BookTitle: "To Kill a Mockingbird",
      //   BookAuthors: "Harper Lee",
      //   shelf: "Currently Reading",
      // },
      // "2": {
      //   id: "2",
      //   BookCover: {
      //     width: 128,
      //     height: 188,
      //     backgroundImage:
      //       'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
      //   },
      //   BookTitle: "Ender's Game",
      //   BookAuthors: "Orson Scott Card",
      //   shelf: "Currently Reading",
      // },
      // "3": {
      //   id: "3",
      //   BookCover: {
      //     width: 128,
      //     height: 193,
      //     backgroundImage:
      //       'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")',
      //   },
      //   BookTitle: "1776",
      //   BookAuthors: "David McCullough",
      //   shelf: "Want to Read",
      // },
      // "4": {
      //   id: "4",
      //   BookCover: {
      //     width: 128,
      //     height: 192,
      //     backgroundImage:
      //       'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")',
      //   },
      //   BookTitle: "Harry Potter and the Sorcerer's Stone",
      //   BookAuthors: "J.K. Rowling",
      //   shelf: "Want to Read",
      // },
      // "5": {
      //   id: "5",
      //   BookCover: {
      //     width: 128,
      //     height: 192,
      //     backgroundImage:
      //       'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
      //   },
      //   BookTitle: "Harry Potter and the Sorcerer's Stone",
      //   BookAuthors: "J.K. Rowling",
      //   shelf: "Read",
      // },
      // "6": {
      //   id: "6",
      //   BookCover: {
      //     width: 128,
      //     height: 174,
      //     backgroundImage:
      //       'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")',
      //   },
      //   BookTitle: "Oh, the Places You'll Go!",
      //   BookAuthors: "Seuss",
      //   shelf: "Read",
      // },
      // "7": {
      //   id: "7",
      //   BookCover: {
      //     width: 128,
      //     height: 192,
      //     backgroundImage:
      //       'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")',
      //   },
      //   BookTitle: "The Adventures of Tom Sawyer",
      //   BookAuthors: "Mark Twain",
      //   shelf: "Read",
      // },
    ],

    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,

    query: "",

    showenBooks: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((AllBooks) => {
      // const newAllBooks = Object.entries(AllBooks).map((b)=>{ b[1]});
      console.log(typeof Object.keys(AllBooks))

      this.setState({ AllBooks });
      
    });
  }

  reloadShelves = (book, shelf) => {
    const books = this.state.AllBooks;
    const BookToChange = Object.entries(books).find((e) => e[1] == book);

    // BookToChange.shelf = shelf;
    BooksAPI.update(BookToChange, shelf).then(response =>{
      BookToChange[1].shelf = shelf;
      // console.log(Object.entries(this.state.AllBooks))

      const fond = Object.entries(this.state.AllBooks)
      .filter((bk) => {
       

        return bk[1] !== book
      })
      // .concat(book);

      // .reduce((obj, key) => {
      //   obj[key] = this.state.AllBooks[key];
      //   return obj;
      // }, {}) ;


       console.log(fond)

      this.setState((prevState) => ({
        AllBooks: Object.entries(prevState.AllBooks)
          .filter((bk) => {
            return bk[1].id !== book
          })
          .concat(book),
      }));

    });


    
  };

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim(),
    }));
   
    if (this.state.query) {
      this.state.showenBooks = this.state.AllBooks;
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
    return (
      <div className='app'>
        {this.state.showSearchPage ? (
          <div className='search-books'>
            <div className='search-books-bar'>
              <button
                className='close-search'
                onClick={() => this.setState({ showSearchPage: false })}>
                Close
              </button>
              <div className='search-books-input-wrapper'>
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                {JSON.stringify(this.state.query)}
                <input
                  type='text'
                  placeholder='Search by title or author'
                  value={this.state.query}
                  onChange={(e) => this.updateQuery(e.target.value)}
                />

                {/* {console.log(b[1].title.toLowerCase())} */}

                <div>
                  <BookList Books={this.state.showenBooks} />
                </div>
              </div>
            </div>
            <div className='search-books-results'>
              <ol className='books-grid' />
            </div>
          </div>
        ) : (
          <div className='list-books'>
            <div className='list-books-title'>
              <h1>MyReads</h1>
            </div>
            {console.log(this.state.AllBooks)}
            <AllShelfs
              Books={this.state.AllBooks}
              reload={this.reloadShelves}
            />

            <div className='open-search'>
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
