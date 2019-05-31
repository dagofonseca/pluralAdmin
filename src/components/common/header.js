var React = require('react');
var Link = require('react-router-dom').Link;
var withRouter = require('react-router-dom').withRouter;

class Header extends React.Component {
    
    render() {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        <img src="images/pluralsight-logo.png" style={ {width: '20%'}} />
                    </a>
                    <ul className="nav navbar-nav">
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to={{pathname: "/about", state:{ previous: this.props.location.pathname}}}>About</Link></li>
                        <li><Link to="/authors" >Authors</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

module.exports = withRouter(Header);