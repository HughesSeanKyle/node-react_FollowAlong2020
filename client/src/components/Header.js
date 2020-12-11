import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'Still deciding';
            case false:
                return 'I am Logged out';
            default:
        }       return 'I am Logged in';
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">
                        Emaily
                    </a>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) { // 1
    return { auth };
};

export default connect(mapStateToProps)(Header);

/*
This comes from fetch user ajax request to server. 

// not refactored would look this way

function mapStateToProps(state) { // 1
    return { auth: state.auth };
};

console.log will output below
    1st: indicates still making request - do not have user yet
    2nd: indicates got user and isLoggedIn.

{auth: null, dispatch: ƒ}
{auth: {…}, dispatch: ƒ} => If isNotLoggedIn auth === false.
*/