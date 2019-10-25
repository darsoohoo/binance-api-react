import React, { Component, Link } from 'react';


export default class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='mdl-layout__header'>
        <div className='mdl-layout__header-row'>
          <span className='mdl-layout-title'>React Binance API</span>
          <div className='mdl-layout-spacer' />
          <nav className='mdl-navigation mdl-layout--large-screen-only'>
            {this.props.isSignedIn ? (
              <Link
                href='#'
                className='mdl-navigation__link'
                onClick={this.props.signOut}
              >
                Sign Out
              </Link>
            ) : (
              <h6>You're not logged in</h6>
            )}
          </nav>
        </div>
      </header>
    );
  }
}
