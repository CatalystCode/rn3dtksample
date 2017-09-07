import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Title, Left, Right, Icon, Button, Footer, FooterTab, Segment, Drawer } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import SideBar from './index.sidebar';

export default class rn3dtksample extends Component {
  onPress() {
    alert('Hello');
  }
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  render() {
    return (
      <Container>
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<SideBar navigator={this.navigator} />}
          onClose={() => this.closeDrawer()} >
          <Grid>
            <Header>
              <Body>
                <Title>3D Toolkit</Title>
              </Body>
              <Right />
            </Header>
            <Row size={75} style={{ backgroundColor: '#fff', padding: 10 }}>
              <Text>Render Stream</Text>
            </Row>
            <Row size={25} style={{ backgroundColor: '#ccc', padding: 10 }}>
              <Text>Connection Log</Text>
            </Row>
          </Grid>
        </Drawer>
      </Container>
    );
  }
}

AppRegistry.registerComponent('rn3dtksample', () => rn3dtksample);