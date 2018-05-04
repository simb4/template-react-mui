import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Form, Icon, Input, Button, Alert } from 'antd';

import * as authActions from "../../actions/authActions";

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: false,
    }
  }
  componentWillReceiveProps(newProps) {
    console.log(this.props.errorMessage, newProps.errorMessage);
    if (this.props.errorMessage !== newProps.errorMessage) {
      this.setState({ alertVisible: true });
    }

  }
  handleClose() {
    this.setState({ alertVisible: false });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      // this.handleClose();
      if (!err) {
        this.setState({ alertVisible: false }, () => {
          this.props.onLogin(values);
        });
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        {this.state.alertVisible ? (
            <Alert
              message={this.props.errorMessage}
              type="error" closable
              afterClose={this.handleClose.bind(this)}
            />
          ) : null}
        <FormItem>
          {getFieldDecorator('email', {
            rules: [{ type: 'email', required: true, message: 'Пожалуйста, введите ваш email!' }],
          })(
            <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Электронная почта" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Пожалуйста, введите ваш пароль!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Пароль" />
          )}
        </FormItem>
        <div className="error-block"> </div>
        <FormItem>
          <div className="ant-row-flex ant-row-flex-space-between ant-row-flex-middle">
            <a href="">Забыли пароль?</a>
            <Button
              type="primary" htmlType="submit"
              loading={this.props.isLoggingIn}>
              Войти
            </Button>
          </div>
        </FormItem>
      </Form>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Col
        xs={{span: 24, offset: 0}}
        sm={{span: 16, offset: 4}}
        md={{span: 12, offset: 6}}
        lg={{span: 10, offset: 7}}
        xl={{span:  8, offset: 8}}>
          <WrappedNormalLoginForm
            onLogin={this.props.onLogin}
            isLoggingIn={this.props.isLoggingIn}
            errorMessage={this.props.errorMessage}/>
      </Col>
      )
  }
}

const mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage,
  isLoggingIn: state.auth.isLoggingIn,
})

const mapDispatchToProps = {
  onLogin: authActions.login,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
