import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Container from "../components/Container";
import Results from "../components/Results";

class SavedBooks extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
      }
    
      loadBooks = () => {
        API.getBooks()
          .then(res => this.setState({ books: res.data }))
          .catch(err => console.log(err));
      };
    
      render() {
        return (
            <div>
                <Nav />
                <Jumbotron />
                <Container>
                    <Results />
                </Container>
            </div>
        )
      }
}

export default SavedBooks;