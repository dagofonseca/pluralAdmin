var React = require('react');
var Prompt = require('react-router-dom').Prompt;

class About extends React.Component {
    constructor() {
        super();
        this.state = { isBlocking: true };
    }

    render() {
        return (
            <div>
                <Prompt
                    when={this.state.isBlocking}
                    message={"Are you sure you want to go to" }
                />
                <h1>About</h1>
                <p>
                    This aplplication users the following technologies:
                </p>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Brwoserify</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        );
    }
}

module.exports = About;