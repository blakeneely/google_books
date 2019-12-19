import React from "react";
import "./style.css";
import { Row, Col } from "../Grid"

const SearchResult = props => {
    return (props.books.length === 0) ? (
        <div className="card resultsContainer text-center">
            <div className="card-body">
                <div className="article">
                    <h3>No results yet, search for a title first</h3>
                </div>
            </div>
        </div>
    ) : (
            <div className="card resultsContainer">
                <div className="card-body">
                    <div className="article">
                        <h3>Search Results</h3>
                        {props.books.map(book => {
                            return (
                                <li className="search-list list-group-item">
                                    <Row className="SearchResult row" id={book.title + "Card"} key={book._id}>
                                        <Col size="2" className="bookImage">
                                            <img src={book.image} alt={book.title} />
                                        </Col>
                                        <Col size="1" className="emptyCol" />
                                        <Col size="9" className="bookInfo">
                                            <Row>
                                                <Col size="9" className="bookTitle">
                                                    <h3>{book.title}</h3>
                                                </Col>
                                                <Col size="3">
                                                <div className="buttonDiv">
                                                    <button className="saveBook btn btn-outline-primary" id={book.id} onClick={(event) => props.handleSavedButton(event)}>
                                                        Save
                                                    </button>
                                                    <a href={book.link} target="_blank" rel="noopener noreferrer">
                                                        <button className="viewBook btn btn-outline-info">
                                                            View
                                                        </button>
                                                    </a>
                                                </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <h4 className="bookAuthor">{book.author}</h4>
                                            </Row>
                                            <Row>
                                                <p className="bookDescription">{book.description}</p>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br></br>
                                </li>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
}
export default SearchResult