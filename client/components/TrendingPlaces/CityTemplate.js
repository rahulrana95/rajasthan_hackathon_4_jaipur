import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import { Card, Icon, Image } from 'semantic-ui-react'
import values from '../../values.js';

class CityTemplate extends React.Component {

  showCard = () => {
    let data = this.props.city;
    let url = `/trendingPlaces/${data['_id']}`
    return <Card>
    <Image src={data.imgurl} />
    <Card.Content>
      <Card.Header>
        <Link to={url}>{data.city}</Link>
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Last Temprature {(new Date(data.updatedAt)).getSeconds()}
        </span>
      </Card.Meta>
      <Card.Description>
        {data.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {data.views} Views
      </a>
    </Card.Content>
  </Card>
  }

  render(){
    return (
      <div >
      {this.showCard()}
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
)(CityTemplate);
