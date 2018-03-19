import React from 'react';
import {connect} from 'react-redux';
import values from '../../values.js';
class CityProfile extends React.Component {

  render(){


    return (
      <div >
        City Profile
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
)(CityProfile);
