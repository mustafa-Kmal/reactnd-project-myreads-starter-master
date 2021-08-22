import React, { Component } from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import DropDown from "./DropDown";
import PropTypes from "prop-types";
import Shelf from "./Shelf";

class Book extends React.Component {
  static propTypes = {
    BookCover: PropTypes.string.isRequired,
    BookTitle: PropTypes.string.isRequired,
    BookAuthors: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
  };
 

  render() {

    
    return (
      
      <div className={this.props.shelf}>
                      


        <div className='book'>
          <div className='book-top'>
            <div className='book-cover' style={{width: 128, height: 193 ,  backgroundImage:  'url(' + this.props.BookCover+ ')'}} />
            <div className='book-shelf-changer'> 
          
              
            
            <select defaultValue={this.props.shelf}  onChange={e => this.props.onChangeShelf(this.props.BookObj, e.target.value)}>
                <option value='move' disabled>
                  Move to...
                </option>
                <option value='currentlyReading'>Currently Reading</option>
                <option value='wantToRead'>Want to Read</option>
                <option value='read'>Read</option>
                <option value='none'>None</option>
              </select>
            </div>
          </div>
          <div className='book-title'>{this.props.BookTitle}</div>
          <div className='book-authors'>{this.props.BookAuthors}</div>
          
        </div>
      </div>
    );
  }
}

export default Book;
