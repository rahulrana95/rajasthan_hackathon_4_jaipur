import React from 'react';
import { Button, Checkbox, Form, Input } from 'semantic-ui-react';
import {connect} from 'react-redux';
import loginAction from './loginAction';
import './index.css';

class Login extends React.Component {
      constructor(){
        super();
        this.state = {
          username:'',
          password:'',
        }
      }

      reset = () => {
        this.props.toggle();
      }
      signUpUser = (value) => {
        console.log(this.state);
      }

      setUsername = (e) => {
        this.setState({
          username:e.target.value
        });
      }

      setPassword = (e) => {
        console.log(e.target.value);
        this.setState({
          password:e.target.value
        });
      }

      loginUser = () => {
        let obj = {
        username:this.state.username,
        password:this.state.password
      };
          if(obj.username.length > 6 && obj.password.length > 6 ){
            this.props.loginUser(obj);
        }
      }

      loginUserDispatch = (dispatch) => {

      }

  render(){

    return (
      <div className="FormSize backgroundColorForm">
      <Form onSubmit={this.signUpUser}>
      <center><h1>Login</h1></center>
    <Form.Field>
      <label>Username</label>
      <input onChange={this.setUsername} placeholder='Enter Username here ' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <Input onChange={this.setPassword} type='password' placeholder="Password here" />
    </Form.Field>
    <Button type='submit' onClick={this.loginUser}>Login</Button>
    <span>Already have a account? <span onClick={this.props.toggle}><a>SignUp Here</a></span></span><br/> <span onClick={this.reset}> Reset</span>
  </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginReducer : state.loginReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginUser : (data) => dispatch(loginAction(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
