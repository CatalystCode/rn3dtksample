import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';
import { Content, Title, Button } from 'native-base';
import Login from './index.login';
import Logout from './index.logout';



export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
  }

  onLogin = () => {
    this.setState(() => ({ loggedIn: true }))
  };
                  
  onLogout = () => {
    this.setState(() => ({ loggedIn: false }))
  };

  render() {
    return (

      <Content style={{ backgroundColor: '#f7f7f7', padding: 10 }}>
        {
          this.state.status ? <Login onLogin={this.onLogin} /> : <Logout onLogout={this.onLogout} />
        }
      </Content>
    );
  }
}

module.exports = Sidebar;

AppRegistry.registerComponent('Sidebar', () => Sidebar);