import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
// import * as authActions from '../../actions/authActions'

import './header.css';

class _Header extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="header">
        header
      </div>
      )
  }
}

const mapStateToProps=(state) => ({
})

const mapDispatchToProps={
}

const Header=connect(
  mapStateToProps,
  mapDispatchToProps
)(_Header);

export default Header;
