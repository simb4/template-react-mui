import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row, Icon, Avatar } from 'antd'
import { withRouter, Link } from 'react-router-dom'
// import * as authActions from '../../actions/authActions'

const tabs = [
  { title: 'Посещения', iconType: 'check', path: '/visits' },
  { title: 'Расписания', iconType: 'calendar', path: '/classes' },
  { title: 'Статистика', iconType: 'bar-chart', path: '/stats' },
]

const NavLink = ({ tab }) => {
  console.log(window.location.pathname, tab.path, tab.path === window.location.pathname);
  let linkClass = tab.path === window.location.pathname
    ? 'active'
    : '';
  return (
      <Col span={8} className="nav-link">
        <Link to={tab.path} className={linkClass}>
          <Icon type={tab.iconType} />
          {tab.title}
        </Link>
      </Col>)
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
            <Row type="flex" justify="center" gutter={8}>
              {
                tabs.map(tab => <NavLink key={tab.path} tab={tab} />)
              }
            </Row>
          </Col>
          <Col span={6} type="flex">
            <Row type="flex" justify="end" align="middle">
              <div className="user-name">Golden Eagle</div>
              <Avatar size="large" icon="user" />
            </Row>
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

export default withRouter(Header);
