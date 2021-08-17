import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import DropDown from "./DropDown";
import PropTypes from "prop-types";

class AllShelfs extends React.Component {


  static propTypes = {
    BooksInShelf: PropTypes.array.isRequired,
    ShelfName:  PropTypes.string.isRequired
  };

  render() {

    AllShelfs = ["wantToRead", "currentlyReading", "read"];
    AllBooks= [
        {
           id: '1',
           BookCover: {
             width: 128,
             height: 193,
             backgroundImage:
               'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
           },
           BookTitle: 'To Kill a Mockingbird',
           BookAuthors: 'Harper Lee',
           shelf: 'Currently Reading',
         }, 
         
         
         
         
         {
           id: '2',
           BookCover: {
             width: 128,
             height: 188,
             backgroundImage:
               'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
           },
           BookTitle: 'Ender\'s Game',
           BookAuthors: 'Orson Scott Card',
           shelf: 'Currently Reading',
         }, 
         
         
         
         {
           id: '3',
           BookCover: {
             width: 128,
             height: 193,
             backgroundImage:
               'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")',
           },
           BookTitle: '1776',
           BookAuthors: 'David McCullough',
           shelf: 'Want to Read',
         }, 
         
         
         
         {
           id: '4',
           BookCover: {
             width: 128,
             height: 192,
             backgroundImage:
               'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")',
           },
           BookTitle: 'Harry Potter and the Sorcerer\'s Stone',
           BookAuthors: 'J.K. Rowling',
           shelf: 'Want to Read',
         }, 
         
         
         
         {
           id: '5',
           BookCover: {
             width: 128,
             height: 192,
             backgroundImage:
               'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
           },
           BookTitle: 'Harry Potter and the Sorcerer\'s Stone',
           BookAuthors: 'J.K. Rowling',
           shelf: 'Read',
         }, 
         
         
         
         {
           id: '6',
           BookCover: {
             width: 128,
             height: 174,
             backgroundImage:
               'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")',
           },
           BookTitle: 'Oh, the Places You\'ll Go!',
           BookAuthors: 'Seuss',
           shelf: 'Read',
         }, 
         
         
         {
           id: '7',
           BookCover: {
             width: 128,
             height: 192,
             backgroundImage:
               'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")',
           },
           BookTitle: 'The Adventures of Tom Sawyer',
           BookAuthors: 'Mark Twain',
           shelf: 'Read',
          }, 
     ]

    const { BooksInShelf, ShelfName } = this.props;
    return (
      <div className='bookshelf'>
          {AllShelfs.map((Shelf) => {

          })}

        <h2 className='bookshelf-title'>{ShelfName}</h2>
        
      </div>
    );
  }
}

export default AllShelfs;
