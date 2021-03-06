import React, { Component } from 'react'
import { Menu, Input } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {Link} from 'react-router';
import values from '../../values.js';
import ProfileMenu from './ProfileMenu';
import logOutAction from './logOutAction';
class TopMenu extends Component {
  state = {showProfileMenu:false,
            loginValue:0
            }

  handleItemClick = (e, { name }) =>{
    console.log(name);
    if(this.props.loginReducer.status == values.ALREADYLOGIN && name =='logOut' ){
      this.props.logOut();
    }

     this.setState({ activeItem: name
                  })

  }
  toggleProfileMenu = (e) => {
    this.setState({showProfileMenu:!this.state.showProfileMenu})
  }
  topMenuBar = (activeItem) => {
    return <Menu borderless="true" color="red" fixed="top">
      <Menu.Item
        name='Home'
        active={activeItem === 'editorials'}
        onClick={this.handleItemClick}
      >
      <Link to="/">  Home</Link>
      </Menu.Item>

      <Menu.Item
        name='aboutUs'
        active={activeItem === 'aboutUs'}
        onClick={this.handleItemClick}
      >
        About Us
      </Menu.Item>
      <Menu.Item
        name='placesAudioGuides'
        active={activeItem === 'placesAudioGuides'}
        onClick={this.handleItemClick}
      >
      <Link to="/cityGuide">  Places Guides </Link>
      </Menu.Item>
      <Menu.Item
        name='trendingPlaces'
        active={activeItem === 'trendingPlaces'}
        onClick={this.handleItemClick}
      >
        <Link to="/trendingPlaces">Trending Places  </Link>
      </Menu.Item>

      <Menu.Menu position='right'>
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
        <Menu.Item  name='logOut' active={activeItem === 'logout'} onClick={this.handleItemClick} >
        Logout
        </Menu.Item>:
        <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.toggleProfileMenu} />
      </Menu.Menu>

    </Menu>
  }
  render() {
    const { activeItem } = this.state

    return (
        <div className="topMenu">
        {this.topMenuBar(activeItem)}

        { this.state.showProfileMenu === true ?  <ProfileMenu /> : null}
                  </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    loginReducer : state.loginReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logOut : () => dispatch(logOutAction())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu);
