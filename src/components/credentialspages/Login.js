import React, { Component } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import _ from 'lodash';


import withNavigateHook from '../../components/withNavigateHook';
//action imports
import {saveUser, fetchDataFromFirestore }from '../../actions/userLoginAction';

class Login extends Component {
  componentDidMount() {
    this.props.fetchDataFromFirestore();
  }

    //above render function
    constructor(props){
        super(props);
        // this.fetchDataFromFirestore = this.fetchDataFromFirestore.bind(this);

        this.state = {
            username: this.props.username,
            password: this.props.password,
            profiles: this.props.profiles,

            // existed: false,
        }
    }

    renderProfile(){
      const { profiles } = this.props;
      
          Object.keys(profiles).map((item, i) => (
              <li className="travelcompany-input" key={i}>
                  <span className="input-label">{ profiles[item].name }</span>
              </li>
          ))
      
  
      if (!_.isEmpty(profiles)) {
        return profiles;
      }
      return (
        <div className="col s10 offset-s1 center-align">
          <h4>You have no profile yet!</h4>
          <p>Please create profile</p>
        </div>
      );
  
    }

    

  render() {
    // const isLoggedIn = this.state.existed;
    const { username, password } = this.state.profiles;

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
                        <Input 
                          onChange={(e) => this.props.userLoginAction({"username": username })}
                          />
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
                        <Input 
                          type='password'
                          onChange={(e) => this.props.userLoginAction({"password": password })}
                          />
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

        <div>
          display username, password, name etc from redux stored from the firestore
          {this.renderProfile()}
        </div>
        </div>
    )
  }
}

Login.propTypes = {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
  };
  
  const mapStateToProps = (state) => {
    const { name, username, job, password, profiles } = state.users;
  
    return {
      name,
      username,
      job,
      password,
      profiles
    }
  } 

export default withNavigateHook(connect(mapStateToProps, { saveUser, fetchDataFromFirestore })(Login));
