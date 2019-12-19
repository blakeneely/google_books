import React from "react";
import "./style.css";

function Jumbotron({ children }) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">
                <h3 className="text-white">Google Book Search</h3>
            </a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/"><button type="button" className="btn btn-outline-secondary text-white">Search Books</button></a>
                    </li>
                    <li className="nav-item" id="report">
                        <a className="nav-link" href="/saved"><button type="button" className="btn btn-outline-secondary text-white">Saved Books</button></a>
                    </li>
                </ul>
            </div>
        </nav>
                {children}
        </div>
    );
}

export default Jumbotron;