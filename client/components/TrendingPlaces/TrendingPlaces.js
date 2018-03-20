import React from 'react';
import {connect} from 'react-redux';
import {Loader, Button, Icon} from 'semantic-ui-react';
import getCityInfoAction from './getCityInfoAction';
import values from '../../values.js';
import CityTemplate from './CityTemplate';
import './index.css';

class TrendingPlaces extends React.Component {

  componentDidMount(){
    { this.props.getCityInfoData.status.CITYINFO == values.CITYINFO ? null : this.props.getCityInfo();}
  }

  showCityData  = () => {
      return this.props.getCityInfoData.payload.map((data,index)=>{
        return <CityTemplate city={data} />
      })
  }

  render(){


    return (
      <div >
        <div className="filterBar">
        <Button onClick={()=>{this.props.getCityInfo()}}>Trending</Button>
        <Button.Group>
         <Button onClick={()=>{this.props.getCityInfo('snowy')}}>Snowy</Button>
         <Button onClick={()=>{this.props.getCityInfo('cold')}}>Cold</Button>
         <Button onClick={()=>{this.props.getCityInfo('soothing')}}>Soothing</Button>
         <Button onClick={()=>{this.props.getCityInfo('hot')}}>Hot</Button>
       </Button.Group>
        </div>
        <div className="cityPlaces">
        {this.props.getCityInfoData.status.NA == values.NA ? <Loader content='Loading' /> : this.showCityData()}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    getCityInfoData : state.getCityInfoReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCityInfo : (filter) => dispatch(getCityInfoAction(filter))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrendingPlaces);
