import React from "react";
import "./style.css"
import {Row, Col} from "../Grid"

const SavedResult = props => {
    return (props.savedBooks.length === 0) ? (
        <div className="card resultsContainer">
            <div className="card-body">
                <div className="article">
                    <h3>Saved books</h3>
                </div>
            </div>
        </div>
    ):(
        <div className="card resultsContainer">
            <div className="card-body">
                <div className="article">
                    <h3 className="resultsContainerTitle">Books that You Saved</h3>
                    {props.savedBooks.map(savedbook => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row className="SearchResult" id={savedbook.title + "Card"} key={savedbook._id}>
                                    {/* col-3 show image of the book */}
                                    <div className="col-md-2 bookImage">
                                        <img src={savedbook.image} alt={savedbook.title} />
                                    </div>
                                    <Col size="sm-1" className="emptyCol"/>
                                    {/* col-9 show information of the book */}
                                    <Col size="lg-8" className="bookInfo">
                                        <Row>
                                            <Col size="xs-9">
                                                <h3 className="bookTitle">{savedbook.title}</h3>
                                            </Col>
                                            <Col size="xs-3">
                                                <div className="buttonDiv">
                                                    <button className="deleteBook btn btn-outline-danger" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                                        Delete
                                                    </button>
                                                    <a href={savedbook.link} target="_blank">
                                                        <button className="viewBook btn btn-outline-success">
                                                            View
                                                        </button>
                                                    </a>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <h4 className="bookAuthor">{savedbook.authors}</h4>
                                        </Row>
                                        <Row>
                                            <p className="bookDescription">{savedbook.description}</p>
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
export default SavedResult