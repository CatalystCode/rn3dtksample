import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Title, Left, Right, Icon, Button, Footer, FooterTab, Segment } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';



export default class Sidebar extends Component {
  render() {
    return (
      <Content style={{ backgroundColor: '#f7f7f7', padding: 10 }}>
        <Title style={{color: 'black', padding: 10 }}>Signal Server Login</Title>
        <Text>Drawer</Text>
      </Content>
    );
  }
}

module.exports = Sidebar;

AppRegistry.registerComponent('Sidebar', () => Sidebar);