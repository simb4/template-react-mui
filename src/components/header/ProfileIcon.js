import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import FlatButton from 'material-ui/FlatButton'

import Avatar from 'material-ui/Avatar'
import Popover from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'

import * as authActions from '../../actions/authActions'

import './header.css';

class _ProfileIcon extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false,
      avatar: props.avatar || require('../../img/ava.png'),
      anchorEl: null,
    }
  }
  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };
  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };
  renderLogin() {
  	return (
      <div className="profile-menu">
        <Link to="/login"><FlatButton  className="auth-btn"  label="войти" /></Link>
      </div>)
  }
  render() {
  	if (!this.props.isLoggedIn) {
  	  return this.renderLogin()
  	}
    return (
        <div className="profile-menu">
          <Avatar
            className="profile-menu-ava" size={32}
            src={this.state.avatar}
            onClick={this.handleTouchTap}
          />
           <Popover
              open={this.state.open}
              anchorEl={this.state.anchorEl}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}
              targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
              onRequestClose={this.handleRequestClose}
            >
              <Menu>
                <Link to="/profile" className="profile-pop-link">
                  <MenuItem primaryText={this.props.user.full_name} />
                </Link>
                <Link to="/login" className="profile-pop-link">
                  <MenuItem primaryText="Выйти" onClick={this.props.logout}/>
                </Link>
              </Menu>
            </Popover>
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

const ProfileIcon = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ProfileIcon);

export default ProfileIcon;
