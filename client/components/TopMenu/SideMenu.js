import React, { Component } from 'react'
import {Link} from 'react-router';
import { Menu } from 'semantic-ui-react'

class SideMenu extends Component {
  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu vertical fixed="top" className="sideMenu">
        <Menu.Item>
          <Menu.Header>Filters</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='Trending' active={activeItem === 'enterprise'} onClick={this.handleItemClick} />
            <Menu.Item name='Solo Travel' active={activeItem === 'consumer'} onClick={this.handleItemClick} />
            <Menu.Item name='2_5 Persons Travelling' active={activeItem === 'consumer'} onClick={this.handleItemClick} />
            <Menu.Item name='Cold Places' active={activeItem === 'consumer'} onClick={this.handleItemClick} />
            <Menu.Item name='Hot Places' active={activeItem === 'consumer'} onClick={this.handleItemClick} />
            <Menu.Item name='Sonowy Places' active={activeItem === 'consumer'} onClick={this.handleItemClick} />
            <Menu.Item name='Warm Places' active={activeItem === 'consumer'} onClick={this.handleItemClick} />

          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Support</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='email' active={activeItem === 'email'} onClick={this.handleItemClick}>
              E-mail Support
            </Menu.Item>

            <Menu.Item name='faq' active={activeItem === 'faq'} onClick={this.handleItemClick}>
              FAQs
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}


export default SideMenu;
