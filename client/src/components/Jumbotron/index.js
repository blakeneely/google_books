import React from "react";
import "./style.css";

function Jumbotron({ children }) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="/">
                    <h3 className="text-white">Google Book Search</h3>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item" id="home">
                            <a className="nav-link" href="/">
                                <button type="button" className="btn btn-outline-secondary text-white">
                                    Search Books
                                </button>
                            </a>
                        </li>
                        <li className="nav-item" id="report">
                            <a className="nav-link" href="/saved">
                                <button type="button" className="btn btn-outline-secondary text-white">
                                    Saved Books
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="text-center jumbotron-text text-light">
                <h1>(REACT) Google Books Search</h1>
                <h3>Search for and save your favorite books</h3>
            </div>
            {children}
        </div>
    );
}

export default Jumbotron;