"use strict";

var React = require('react');
var Link = require('react-router-dom').Link;
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');

class Authors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: AuthorStore.getAllAuthors()
        }
        this._onChange = this._onChange.bind(this);        
    }
    componentDidMount(){
        AuthorStore.addChangeListener(this._onChange);
    }
    componentWillUnmount() {
        AuthorStore.removeChangeListener(this._onChange);
    }
    _onChange() {
        this.setState({ authors: AuthorStore.getAllAuthors() });
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