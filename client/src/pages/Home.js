import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid/Grid";
import Nav from "../components/Nav/Nav";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import { Input, SubmitBtn } from "../components/Search/Search";
import API from "../utils/API";
import ResultList from "../components/ResultList/ResultList";
class Home extends Component {
    state = {
        books: [],
        search: ""
    };

    searchBooks = () => {
        API.googleBooks(this.state.search)
            .then(res => {
                console.log("This is res.data", res.data.items)
                this.setState({
                    books: res.data.items,
                    search: ""
                })
            })
            .catch(err => console.log(err));

        console.log("this is the state", this.state);

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBooks();
    };
    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                    <Jumbotron />
                    <form>
                        <h5>Search for books</h5>
                        <Input
                            value={this.state.search}
                            onChange={this.handleInputChange}
                            name="search"
                            placeholder="Search for a book"
                        />
                        <SubmitBtn onClick={this.handleFormSubmit} />
                    </form>

                    {this.state.books.length ? (
                        <ResultList
                            bookState={this.state.books}
                            saveGoogleBook={this.saveGoogleBook}>
                        </ResultList>
                    ) : (
                        <h5>No results to display</h5>
                    )}

                </Container>
            </div>
        )
    }
}
export default Home