import React from 'react';
import {connect} from 'react-redux';
import Login from './Login';
import SignUp from './SignUp';
class LoginSignUp extends React.Component {
  constructor(){
    super();
    this.state={
      showLoginForm:true
    };
  }

  showSignUpForm = () => {
    this.setState({
      showLoginForm: !this.state.showLoginForm
    });
  }
  render(){


    return (
      <div className="LoginSignUpBox">
      {this.state.showLoginForm  === true ?  <Login toggle={this.showSignUpForm} /> : <SignUp toggle={this.showSignUpForm} /> }
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
    logOutUser : () => dispatch(logOutAction())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginSignUp);
