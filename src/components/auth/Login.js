import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../../actions/authActions";

import './auth.css';
import '../../styles/styles.css';



const emailValidation = (email) => {
  return email.contains('@');
}


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="content-auth">
        auth page
      </div>
      )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
