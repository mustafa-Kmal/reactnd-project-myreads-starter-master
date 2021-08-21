{this.state.showSearchPage ? (
    <div className='search-books'>
      <Link to='./search' className='search-books'>
        click me
      </Link>
      {/* <SearchPage
        updateQuery={this.updateQuery}
        Books={this.state.AllBooks}
        reload={this.reloadShelves}
        onClick = {() => this.setState({ showSearchPage: false })}
      /> */}
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

          <input
            type='text'
            placeholder='Search by title or author'
            value={this.state.query}
            onChange={(e) => this.updateQuery(e.target.value)}
          />

          {/* {console.log(b[1].title.toLowerCase())} */}

          <div>
            {/* {console.log(this.state.AllBooks)} */}
            <BookList
              Books={this.state.showenBooks}
              reload={this.reloadShelves}
            />
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