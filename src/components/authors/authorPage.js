"use strict";

var React = require('react');
var Link = require('react-router-dom').Link;
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: AuthorApi.getAllAuthors()
        }
    }
    render() {        
        return (
            <div>
                <h1>Authors</h1>
                <Link to="/author" className="btn btn-primary">Add author</Link>
                <AuthorList authors={this.state.authors} />                
            </div> 
        );
    }
}

module.exports = Authors;