import React from "react";
import "./style.css";

const Search = props => {
    return (
        <form>
            <div className="form-group">
                <label className="BookSearchLabel">
                    <h3>Search For a Book</h3>
                </label>
                <br></br>
                <input className="form-control rounded"
                    value={props.search}
                    type="text"
                    name="searchBook"
                    placeholder="enter book title"
                    onChange={props.handleInputChange}
                />
            </div>
            <button type="submit" className="submitBtn btn btn-primary" onClick={props.handleFormSubmit}>
                Submit
            </button>
        </form>
    )
}



export default Search