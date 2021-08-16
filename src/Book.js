import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'


class Book extends React.Component {
    
    render(){

        const{ BookCover, BookTitle, BookAuthors} = this.props;
        return(
            <div className="book">
            <div className="book-top">
              <div className="book-cover" style={BookCover}></div>
              <div className="book-shelf-changer">
                <select>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{BookTitle}</div>
            <div className="book-authors">{BookAuthors}</div>
          </div>

        );
    };

}


export default Book;
