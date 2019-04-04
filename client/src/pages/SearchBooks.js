import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import Container from "../components/Container";
import Results from "../components/Results";
import Search from "../components/Search";

class SearchBooks extends Component {
    state = {
        books: [],
        authors: "",
        description: "",
        image: "",
        link: "",
        title: ""
      };

    componentDidMount() {
        this.loadBooks();
      }
    
      loadBooks = () => {
        API.getBooks()
          .then(res =>
            this.setState({ books: res.data, title: "", author: "", synopsis: "" })
          )
          .catch(err => console.log(err));
      };

      deleteBook = id => {
        API.deleteBook(id)
          .then(res => this.loadBooks())
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
          API.saveBook({
            title: this.state.title,
            author: this.state.author,
            synopsis: this.state.synopsis
          })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
      };
    
      render() {
        return (
            <div>
                <Nav />
                <Jumbotron />
                <Container>
                    <Search />
                    <Results />
                </Container>
            </div>
        )
      }
}

export default SearchBooks;