import React from 'react';
import {connect} from 'react-redux';
import {Loader, Button, Icon} from 'semantic-ui-react';
import getCityInfoAction from './getCityInfoAction';
import values from '../../values.js';
import CityTemplate from './CityTemplate';
import './index.css';

class TrendingPlaces extends React.Component {

  componentDidMount(){
    this.props.getCityInfo();
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
        <Button animated>
            <Button.Content visible>Trending</Button.Content>
            <Button.Content hidden>
              <Icon name='right arrow' />
            </Button.Content>
        </Button>
        <Button.Group>
         <Button>Snowy</Button>
         <Button>Rainy</Button>
         <Button>Cold</Button>
         <Button>Warm</Button>
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
    getCityInfo : () => dispatch(getCityInfoAction())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrendingPlaces);
