import React, { Component } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

export class Login extends Component {
    //above render function
    constructor(props){
        super(props);

        this.state = {
            username: this.props.username,
            // existed: false,
        }
    }

    

  render() {
    // const isLoggedIn = this.state.existed;

    //function operate inside the render function
    const onFinish = (values) => {
        console.log('Success:', values);
      };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
        <div className='fcontainer'>
        <Form
            name="basic"
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 16,
            }}
            style={{
            maxWidth: 600,
            }}
            initialValues={{
            remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className='formContainer'
        >
            <h1>KiTAA LOGIN PAGE</h1>
                <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your username!',
                            },
                        ]}
                        >
                        <Input />
                </Form.Item>

                <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                            required: true,
                            message: 'Please input your password!',
                            },
                        ]}
                        >
                        <Input.Password />
                        </Form.Item>

                        <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        >
                        <Checkbox>Remember me</Checkbox>
                </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
        </Form >
        </div>
    )
  }
}

export default Login