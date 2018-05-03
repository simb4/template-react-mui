import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Form, Icon, Input, Button } from 'antd';

import * as authActions from "../../actions/authActions";

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onLogin(values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
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
        <FormItem>
          <div className="ant-row-flex ant-row-flex-space-between ant-row-flex-middle">
            <a href="">Забыли пароль?</a>
            <Button type="primary" htmlType="submit">Войти</Button>
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
      <Col span={12} offset={6}>
          <WrappedNormalLoginForm onLogin={this.props.onLogin}/>
      </Col>
      )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
  onLogin: authActions.login,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
