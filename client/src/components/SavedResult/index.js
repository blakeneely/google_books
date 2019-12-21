import React from "react";
import "./style.css"
import {Row, Col} from "../Grid"

const SavedResult = props => {
    return (props.savedBooks.length === 0) ? (
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Saved books</h3>
                </div>
            </div>
        </div>
    ):(
        <div className="card">
            <div className="card-body player">
                <div className="article">
                    <h3>Books that You Saved</h3>
                    {props.savedBooks.map(savedbook => {
                        return (
                            <li className="saved-list list-group-item">
                                <Row className="SearchResult" id={savedbook.title + "Card"} key={savedbook._id}>
                                    {/* col-3 show image of the book */}
                                    <Col size="2" className="bookImage">
                                        <img src={savedbook.image} alt={savedbook.title} />
                                    </Col>
                                    <Col size="1" className="emptyCol"/>
                                    {/* col-9 show information of the book */}
                                    <Col size="9" className="bookInfo">
                                        <Row>
                                            <Col size="9">
                                                <h2 className="bookTitle">{savedbook.title}</h2>
                                            </Col>
                                            <Col size="3">
                                            <button className="deleteBook btn btn-outline-danger" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)}>
                                                Delete
                                            </button>
                                            <a href={savedbook.link} target="_blank">
                                                <button className="viewBook btn btn-outline-success">
                                                    View
                                                </button>
                                            </a>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <h3 className="bookAuthor">{savedbook.authors}</h3>
                                        </Row>
                                        <Row>
                                            <p className="bookDescription">{savedbook.description}</p>
                                        </Row>
                                    </Col>
                                </Row>
                                <br></br>
                                <Row className="buttonDiv ">
                                </Row>
                            </li>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
export default SavedResult