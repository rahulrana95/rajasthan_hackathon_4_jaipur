import React from 'react';
import {connect} from 'react-redux';
import { Loader } from 'semantic-ui-react';
import getSingleCityInfoAction from './getSingleCityInfoAction';
import CityTemplate from './CityTemplate';
import values from '../../values.js';
class CityProfile extends React.Component {

  showProfile = () => {
    return <div className="cityProfile">
      <div className="leftDiv">

      {this.props.getSingleCityInfo.payload.map((data,index)=>{
        return <CityTemplate  city={data} key={index} />
      })}
      </div>
      <div className="rightDiv">
      </div>
    </div>
  }

  componentDidMount = () => {

    this.props.getSingleCityInfoDispatch(this.props.params.id);
  }

  render(){


    return (
      <div >
        {this.props.getSingleCityInfo.status.NA == values.NA ? <Loader content='Loading' /> : this.showProfile()}
      </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    getSingleCityInfo : state.getSingleCityInfoReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSingleCityInfoDispatch : (id) => dispatch(getSingleCityInfoAction(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityProfile);
