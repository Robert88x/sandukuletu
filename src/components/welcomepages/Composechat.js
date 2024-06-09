import React, { Component } from 'react'
import { Button, Form, Input, Text } from 'antd';
import withNavigateHook from '../withNavigateHook';


export class Composechat extends Component {
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
                <div>
                    {/* userid, username, message */}
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
                    <h1>COMPOSE MESSAGE INSTANT</h1>
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
                                label="Message"
                                name="message"
                                style={{
                                    maxWidth: 600,
                                    maxHeight: 600                                    
                                    }}
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please input your message',
                                    },
                                ]}
                                >
                                <Input />
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

export default withNavigateHook(Composechat);