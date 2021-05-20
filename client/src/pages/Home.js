import React, { Component } from "react";
// eslint-disable-next-line
import { Col, Row, Container } from "../components/Grid/Grid";
import Nav from "../components/Nav/Nav";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import {Input, SubmitBtn} from "../components/Search/Search";

class Home extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Container fluid>
                <Jumbotron />
                <form>
                    <h5>Search for books</h5>
                    <Input />
                    <SubmitBtn />
                </form>
                </Container>
            </div>
        )
    }
}
export default Home;