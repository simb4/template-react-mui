import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Col, Row, Icon } from 'antd'
import { Link } from 'react-router-dom'
// import * as authActions from '../../actions/authActions'

import './header.css';

const NavLink = (props) => {
  return (
    <Link to="/">
    <Button
      style={{borderColor: 'transparent'}}
      icon="check"
      ghost={true}>
        Click
    </Button>
    </Link>)
}

class _Header extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <Row type="flex" justify="space-between">
          <Col span={2}>
            <img className="logo" src="../../logo.png" alt="" />
          </Col>
          <Col span={12} offset={4}>
            <NavLink />
            <NavLink />
            <NavLink />
          </Col>
          <Col span={4} offset={2}>
            navs
          </Col>
        </Row>

        {/*
          <div className="logo">
            <img src="../../logo.png" alt="" />
          </div>
          <div className="nav-bar">
            navs
          </div>
          <div className="nav-bar">
            profile
          </div>

        */}
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
