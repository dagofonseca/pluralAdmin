"use strict";

var React = require('react');
var PropTypes = require('prop-types');

class AuthorList extends React.Component {

    render() {
        function createAuthorRow(author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.fistName} {author.lastName}</td>
                </tr>
            );
        }
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
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