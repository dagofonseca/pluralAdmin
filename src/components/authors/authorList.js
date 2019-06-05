"use strict";

var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;
var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

class AuthorList extends React.Component {
    deleteAuthor(id, event){
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('Author Deleted.');
    }
    render() {
        function createAuthorRow(author) {
            return (
                <tr key={author.id}>
                    <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}> Delete </a></td>
                    <td><Link to={`author/${author.id}`}>{author.id}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        }
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

AuthorList.propTypes = {
    authors: PropTypes.array.isRequired,
};

module.exports = AuthorList;