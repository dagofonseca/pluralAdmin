"use strict";

var React = require('react')
var AuthorFrom = require('./authorForm');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var withRouter = require('react-router-dom').withRouter;
var toastr = require('toastr');

class ManageAuthorPage extends React.Component {
    constructor(props) {
        super(props);        
        this.state = {
            author: {id:'', firstName:'', lastName: ''},
            errors: {}            
        };
        this.setAuthorState = this.setAuthorState.bind(this);
        this.saveAuthor = this.saveAuthor.bind(this);              
    }
    componentDidMount() {
        const authorId = this.props.match.params.id;        
        if(authorId) {
            this.setState({author: AuthorStore.getAuthorById(authorId)});            
        }
    }
    setAuthorState(event){
        let field = event.target.name;
        let value = event.target.value;
        let newAuthor = this.state.author;
        newAuthor[field] = value;
        return this.setState({author: newAuthor});
    }
    authorFormIsValid() {
        let formIsValid = true;
        this.state.errors = {};
        if(this.state.author.firstName.length < 3 ){
            this.state.errors.firstName = "First Name must be at least 3 characters."
            formIsValid = false;
        }
        if(this.state.author.lastName.length < 3 ){
            this.state.errors.lastName = "Last Name must be at least 3 characters."
            formIsValid = false;
        }
        this.setState({errors: this.state.errors});
        return formIsValid;
    }
    saveAuthor(event){
        event.preventDefault();
        if(!this.authorFormIsValid()){
            return ;
        }
        AuthorActions.createAuthor(this.state.author);
        toastr.success('Author saved.');
        this.props.history.push('/authors');
    }
    render() {
        return (
            <div>
                <h1>Manage Author</h1>
                <AuthorFrom author={this.state.author} 
                    onChange={this.setAuthorState}
                    onSave={this.saveAuthor}
                    errors={this.state.errors}
                />
            </div>            
        );
    }
}

module.exports = withRouter(ManageAuthorPage);