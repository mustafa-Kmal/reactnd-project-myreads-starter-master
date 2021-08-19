import React, {Component} from 'react'
import { useState } from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ReactDOM from 'react-dom';



class DropDown extends React.Component {
  
  
  // constructor(props) {
  //   super(props);
  //   this.

  //   this.onChangeHandler = this.onChangeHandler.bind(this);
  // }

  state = {value: 'none'};
  


  onChangeHandler =(event) => {
    console.log(this.state.value);
    this.setState({value: event.target.value});
    console.log(this.state.value);
  }


    
    render(){

        return(
            <div className="book-shelf-changer">
                <select  value={this.state.value} onChange={this.onChangeHandler}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>

        );
    };

}


export default DropDown;
