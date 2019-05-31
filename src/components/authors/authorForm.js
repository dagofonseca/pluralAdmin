"use strict";

var React = require('react')
var Input = require('../common/textInput');

class AuthorForm extends React.Component {

    render() {
        return (
            <form>
                <h3>Add author</h3>                
                <Input name="firstName"
                    label="First Name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}
                />
                <Input name="lastName"
                    label="Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}
                />
                <input type="submit" 
                    value="Save"
                    className="btn btn-primary btn-sm"
                    onClick={this.props.onSave}
                />
            </form>            
        );
    }
}

module.exports = AuthorForm;