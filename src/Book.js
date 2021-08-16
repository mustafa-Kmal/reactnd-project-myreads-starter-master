import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import DropDown from './DropDown'
import PropTypes from 'prop-types'


class Book extends React.Component {

    static propTypes = {
        BookCover: PropTypes.string.isRequired,
        BookTitle: PropTypes.string.isRequired,
        BookAuthors: PropTypes.string.isRequired,
        shelf: PropTypes.string.isRequired,

      }
      state = {
        shelf: ''
      }
    
    render(){

        const{ BookCover, BookTitle, BookAuthors, shelf} = this.props;
        return(
            <div className={shelf}> 
                <div className="book">
                <div className="book-top">
                <div className="book-cover" style={BookCover}></div>
                <DropDown/>
                </div>
                <div className="book-title">{BookTitle}</div>
                <div className="book-authors">{BookAuthors}</div>
            </div>
            </div>

        );
    };

}


export default Book;
