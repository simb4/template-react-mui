import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Col, Row, Icon, Avatar } from 'antd'
import { withRouter, Link } from 'react-router-dom'
import MediaQuery from 'react-responsive';


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
        <MediaQuery minDeviceWidth={768}>
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
          <Col span={6}>
              <MediaQuery minWidth={769}>
                <Row type="flex" justify="end" align="middle" className="header-height">
                  <div className="user-name">Golden Eagle</div>
                  <Avatar size="large" icon="user" />
                </Row>
              </MediaQuery>
              <MediaQuery maxWidth={768}>
                <div className="header-height ant-row-flex ant-row-flex-end ant-row-flex-middle">
                  <Avatar icon="user" />
                </div>
              </MediaQuery>
          </Col>
        </Row>
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
