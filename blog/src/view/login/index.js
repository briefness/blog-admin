import React, { Component } from 'react';
import { withRouter }from 'react-router-dom';
import "./index.scss";
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';

class LoginForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        window.sessionStorage.setItem("userId", values.userName);
        this.props.history.push('/dashboard');
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <span className="color-a fr">Forgot password</span>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <span className="color-a">register now!</span>
        </Form.Item>
      </Form>
      </div>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(LoginForm);

export default withRouter(Login);
