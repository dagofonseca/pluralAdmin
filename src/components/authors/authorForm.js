"use strict";

var React = require('react')

class AuthorForm extends React.Component {
    constructor(props){
        super(props);
        this.firstName = React.createRef();
        this.lastName = React.createRef();
    }
    render() {
        return (
            <form>
                <h3>Add author</h3>
                <label htmlFor="firstName">First Name</label>
                <input type="text"
                    name="firstName"
                    className="form-control"
                    placeholder="First Name"
                    ref={this.firstName}
                    onChange={this.props.onChange}
                    value={this.props.author.firstName}
                />
                <br />

                <label htmlFor="lastName">Last Name</label>
                <input type="text"
                    name="lastName"
                    className="form-control"
                    placeholder="Last Name"
                    ref={this.lastName}
                    onChange={this.props.onChange}
                    value={this.props.author.lastName}    
                />
                <br />

                <input type="submit" value="Save" className="btn btn-primary btn-sm" />
            </form>            
        );
    }
}

module.exports = AuthorForm;