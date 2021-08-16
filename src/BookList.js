import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import DropDown from './DropDown'
import PropTypes from 'prop-types'


class BookList extends React.Component {

    static propTypes = {
            BookList: PropTypes.array.isRequired,
    }
     
    
    render(){

        const{ BookList} = this.props;
        return(
           <div>
               <ol>
               {BookList.map((Book) => {
                   return(
                    <li> <Book BookCover={Book.BookCover} BookTitle={Book.BookTitle} BookAuthors={Book.BookAuthors} shelf={Book.shelf}/> </li>

                   );
               } )}

               </ol>
           </div>

        );
    };

}


export default BookList;
