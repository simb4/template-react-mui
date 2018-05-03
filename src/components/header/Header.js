import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row, Icon, Avatar, Popover } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import MediaQuery from 'react-responsive';

import * as authActions from '../../actions/authActions'

const tabs = [
  { title: 'Посещения', iconType: 'check', path: '/visits' },
  { title: 'Расписания', iconType: 'calendar', path: '/classes' },
  { title: 'Статистика', iconType: 'bar-chart', path: '/stats' },
]

const loginTab = { title: 'Войти', iconType: 'login', path: '/login' }

const NavLink = ({ tab }) => {
  console.log(window.location.pathname, tab.path, tab.path === window.location.pathname);
  let linkClass = tab.path === window.location.pathname
    ? 'active'
    : '';
  return (
      <Col span={8} className="nav-link">
        <MediaQuery minDeviceWidth={769}>
          <Link to={tab.path} className={linkClass}>
            <Icon type={tab.iconType} />
            {tab.title}
          </Link>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={768}>
          <Link to={tab.path} className={linkClass}>
            <Icon type={tab.iconType} style={{fontSize: 24}} />
          </Link>
        </MediaQuery>
      </Col>)
}

const UserMenu = ({ onLogout }) => {
  return (
    <div className="header-menu">
      <a onClick={onLogout}>Выйти</a>
    </div>
  )
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
            <Link to="/">
              <img className="logo" src="../../logo.png" alt="" />
            </Link>
          </Col>
          <Col span={12} offset={4}>
            <Row type="flex" justify="center" gutter={8}>
              {this.props.isLoggedIn &&
                tabs.map(tab => <NavLink key={tab.path} tab={tab} />)
              }
            </Row>
          </Col>
          <Col span={6}>
              {this.props.isLoggedIn &&
                <MediaQuery minWidth={768}>
                  <div className="ant-row-flex ant-row-flex-end ant-row-flex-middle">
                    <div className="user-name">Golden Eagle</div>
                    <Popover
                      placement="bottomRight"
                      title="Golden Eagle"
                      content={<UserMenu onLogout={this.props.onLogout} />}
                      trigger="click">
                        <Avatar size="large" icon="user" className="avatar-bordered" />
                    </Popover>
                  </div>
                </MediaQuery>
              } {this.props.isLoggedIn &&
                <MediaQuery maxWidth={768}>
                  <div className="header-height ant-row-flex ant-row-flex-end ant-row-flex-middle">
                    <Avatar icon="user" className="avatar-bordered" />
                  </div>
                </MediaQuery>
              } {!this.props.isLoggedIn &&
                <div className="ant-row-flex ant-row-flex-end ant-row-flex-middle">
                  <NavLink tab={loginTab} />
                </div>
              }
          </Col>
        </Row>
      </div>
      )
  }
}

const mapStateToProps=(state) => ({
  isLoggedIn: state.auth.isLoggedIn,
})

const mapDispatchToProps={
  onLogout: authActions.logout,
}

const Header=connect(
  mapStateToProps,
  mapDispatchToProps
)(_Header);

export default withRouter(Header);
