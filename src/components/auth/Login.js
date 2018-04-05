import React, { Component } from 'react'
import { connect } from 'react-redux'

import _ from 'lodash'

import LinearProgress from 'material-ui/LinearProgress';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import './auth.css';
import '../../styles/styles.css';

import * as actions from "../../actions/authActions";

const emailValidation = (email) => {
  return email.contains('@');
}


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
    }
    this.handleLoginChange = this.handleLoginChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillReceiveProps(nextProps){
    this.setState({error: nextProps.errorMessage});
  }
  handleLoginChange(e){
    this.setState({username: e.target.value, error: ''});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value, error: ''});
  }
  handleEnter(target) {
    if(target.charCode === 13){
      this.handleSubmit();
    }
  }
  isOnlyDigits(val){
    return /^\d+$/.test(val) || val.charAt(0) === "+";
  }
  getFormat(username){
    if((username.charAt(0) !== '7' && username.charAt(0) !== '8') 
      || username.charAt(0) === "+")
      return username;
    return "+7"+username.substr(1, username.length);
  }
  handleSubmit(){
    let username = this.state.username;
    if (!username.includes("@") || !emailValidation(username)){
      this.setState({ error: "Неправильный email"});
      return;
    }
    username = this.getFormat(username);
    this.props.onLogin({
      username: username,
      password: this.state.password
    });
  }
  renderProgress(){
    if(this.props.isLoading)
      return <LinearProgress mode="indeterminate" className="linearProgress"/>
    return null;
}
  render(){
    var isDisabled = this.props.isLoading || this.state.username === "";
    return (
      <div className="content-auth">
        <div className="auth-cart">
          <div className="auth-title">
              Добро пожаловать
            </div>
            <div className="auth-subtitle">
              Введите ваш Email, пожалуйста
            </div>
          <TextField id="login"
            autoFocus
            fullWidth={true}
            name="username"
            floatingLabelText="Ваш номер телефона или email"
            value={this.state.username}
            onChange={this.handleLoginChange}
            onKeyPress={this.handleEnter}
          />
          <TextField id="password"
            fullWidth={true}
            name="username"
            floatingLabelText="Введите ваш пароль"
            value={this.state.password}
            onChange={this.handlePasswordChange.bind(this)}
            type="password"
            onKeyPress={this.handleEnter.bind(this)}
          />
          <div className="auth-submit">
            <div className="error-block">
              {this.state.error}
            </div>
            <FlatButton className="next-btn"
              label="Далее"
              primary={true}
              onClick={this.handleSubmit}
              disabled={isDisabled} />
          </div>
        </div>
        {this.renderProgress()}
      </div>
      )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoggingIn,
  errorMessage: state.auth.errorMessage,
})

const mapDispatchToProps = {
  onLogin: actions.login,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
