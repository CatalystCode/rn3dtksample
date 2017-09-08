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
      status: true
    }
  }

  ShowHideLogin = () => {
    if (this.state.status == true) {
      this.setState({ status: false })
    }
    else {
      this.setState({ status: true })
    }
  }

  render() {
    return (

      <Content style={{ backgroundColor: '#f7f7f7', padding: 10 }}>
        {
          this.state.status ? <Login navigator={this.navigator} /> : <Logout navigator={this.navigator} />
        }

      <Button title="Hide Text Component" onPress={this.ShowHideLogin} />
      </Content>

    );
  }
}

module.exports = Sidebar;