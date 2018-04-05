import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ProfileIcon from './ProfileIcon'
import TabIcon from './TabIcon'
import * as authActions from '../../actions/authActions'

import './header.css';

const tabs = [
  // { label: 'Тренировка', path: '/', icon: <i className="material-icons">&#xE85D;</i> },
  // { label: 'Классы', path: '/workouts', icon: <i className="material-icons">&#xE8DF;</i> },
  // { label: 'Атлеты', path: '/athletes', icon: <i className="material-icons">&#xE7FB;</i> },
  // { label: 'Абонементы', path: '/abonements', icon: <i className="material-icons">&#xE86C;</i> },
  // { label: 'Тренерская', path: '/coachboard', icon: <img src={require('../../img/ic_coach.png')} className="material-icons" alt="Fitbook"/> },
];
const logo = require('../../img/logo.png');

class _Header extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
    }
  }

  renderIconMenu(){
    let path = location.pathname;
    return (
      <div className="icon-menu">
        <Link to="/"> <img className="logo" src={logo} alt="Fitbook" /> </Link>
        {tabs.map(tab => <TabIcon key={tab.path} tab={tab} isActive={tab.path===path} />)}
      </div>
    )
  }

  render() {
    return (
      <div className="header">
        {this.renderIconMenu()}
        <ProfileIcon />
      </div>
      )
  }
}

const mapStateToProps=(state) => ({
  user: state.user.user,
  isLoggedIn: state.auth.isLoggedIn,
})

const mapDispatchToProps={
  logout: authActions.logout,
}

const Header=connect(
  mapStateToProps,
  mapDispatchToProps
)(_Header);

export default Header;
