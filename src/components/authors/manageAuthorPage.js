"use strict";

var React = require('react')
var AuthorFrom = require('./authorForm');

class ManageAuthorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            author: {id:'', firstName:'', lastName: ''}
        };
        this.setAuthorState = this.setAuthorState.bind(this);
    }
    setAuthorState(event){
        let field = event.target.name;
        let value = event.target.value;
        let newAuthor = this.state.author;
        newAuthor[field] = value;
        return this.setState({author: newAuthor});
    }
    render() {
        return (
            <div>
                <h1>Manage Author</h1>
                <AuthorFrom author={this.state.author} onChange={this.setAuthorState}/>
            </div>            
        );
    }
}

module.exports = ManageAuthorPage;