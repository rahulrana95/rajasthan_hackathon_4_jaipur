import React from 'react';
import {connect} from 'react-redux';
import values from '../values.js';
import TopMenu from './TopMenu/TopMenu';
import LoginSignUp from './LoginSignUp/LoginSignUp';
import SideMenu from './TopMenu/SideMenu';
import './App.css';
class App extends React.Component {

  render(){


    return (
      <div >
      {this.props.loginReducer.status == values.LOGOUT ?null :  <TopMenu />}
      <div className="bodyArea">
          {this.props.loginReducer.status == values.LOGOUT ?null :    <div className="content">
            </div>}
          {this.props.loginReducer.status == values.LOGOUT ? <LoginSignUp /> :  null}

      </div>
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
)(App);
