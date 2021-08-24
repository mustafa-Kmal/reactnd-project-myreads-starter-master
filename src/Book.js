import React, { Component } from "react";
import "./App.css";

class Book extends React.Component {
  updateAll = (book, shelf) => {
    this.props.onChangeShelf(book, shelf);
    if (
      book != "undefined" &&
      typeof shelf != "undefined" &&
      this.props.books
    ) {
      if (
        Object.entries(this.props.books).find((e) => {
          if (typeof e[1] !== "undefined") {
            return e[1].id == book[1].id;
          }
        })
      ) {
        this.props.makeNewShlef(book, shelf);

        this.props.filterOldShelf(book, shelf);
      }
    }
  };

  render() {
    return (
      <div className={this.props.shelf}>
        <div className='book'>
          <div className='book-top'>
            <div
              className='book-cover'
              style={{
                width: 128,
                height: 193,
                backgroundImage: "url(" + this.props.BookCover + ")",
              }}
            />
            <div className='book-shelf-changer'>
              <select
                defaultValue={this.props.shelf}
                onChange={(e) =>
                  this.updateAll(this.props.BookObj, e.target.value)
                }>
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
