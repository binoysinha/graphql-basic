import React, { Component, Fragment } from "react";
import { graphql } from "react-apollo";

import { getBookQuery } from "../queries";

class BookDetails extends Component {
  displayBookDetails() {
    const { book } = this.props.data;
    if (book) {
      return (
        <Fragment>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All Books by this author:</p>
          <ul className="other-books">
            {book.author.books.map(item => <li key={item.id}>{item.name}</li>)}
          </ul>
        </Fragment>
      );
    }
    return <p>Fetching Book Details</p>;
  }
  render() {
    console.log(this.props);
    return <div className="book-details">{this.displayBookDetails()}</div>;
  }
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
