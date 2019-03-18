import React, { Component } from 'react';

import {
  Form, Input, Button, Upload, Icon,
} from 'antd';


class User extends Component {
	state = {
    userName: '',
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

	normFile = (e) => {
	    console.log('Upload event:', e);
	    if (Array.isArray(e)) {
	      return e;
	    }
	    return e && e.fileList;
	  }
		componentDidMount() {
			this.setState({userName:window.sessionStorage.getItem("userId")});
		}

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form className="bgwh" labelCol={{ span: 6 }} wrapperCol={{ span: 8 }} onSubmit={this.handleSubmit}>
        <Form.Item
          label="用户名"
        >
          {getFieldDecorator('userName', {
						initialValue: this.state.userName,
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input />
          )}
        </Form.Item>
        <Form.Item
          label="联系邮箱"
        >
				{getFieldDecorator('userEmail', {
					rules: [{ required: true, message: '请输入联系邮箱!' }],
				})(
					<Input type="email" />
				)}
        </Form.Item>
				<Form.Item
          label="头像"
        >
          <div className="dropbox">
            {getFieldDecorator('dragger', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
            })(
              <Upload.Dragger name="files" action="/upload.do" listType="picture">
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">Click or drag picture file to this area to upload</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>
            )}
          </div>
        </Form.Item>
        <Form.Item
          wrapperCol={{ span: 8, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">
            保存
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const UserInfo = Form.create({ name: 'user-info' })(User);
export default UserInfo;
