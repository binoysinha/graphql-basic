import React, { Component } from "react";
import { graphql } from "react-apollo";

import { getBooksQuery } from "../queries";
import BookDetails from "./BookDetails";

class BookList extends Component {
  state = {
    selectedBookId: null
  };
  displayBooks() {
    let data = this.props.data;
    if (data.loading) {
      return <div>Loading Books...</div>;
    }
    return data.books.map(book => {
      return (
        <li
          data-id={book.id}
          onClick={evt => this.setState({ selectedBookId: book.id })}
          key={book.id}
        >
          {book.name}
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="book-list">{this.displayBooks()}</ul>
        {this.state.selectedBookId ? (
          <BookDetails bookId={this.state.selectedBookId} />
        ) : null}
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
