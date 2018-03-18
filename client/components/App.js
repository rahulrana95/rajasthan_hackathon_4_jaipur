import React from 'react';
import TopMenu from './TopMenu/TopMenu';
import SideMenu from './TopMenu/SideMenu';
import './App.css';
class App extends React.Component {

  render(){


    return (
      <div >
      <TopMenu />
      <div className="bodyArea">
        <SideMenu />
        <div className="content">
        </div>
      </div>
      </div>
    );
  }
}
export default App;
