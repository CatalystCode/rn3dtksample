import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  View
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Title, Left, Right, Icon, Button, Footer, FooterTab, Segment, Form, Item, Input, Label, ListItem, CheckBox } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';


export default class Login extends Component {
  render() {
    return (
      <Content style={{ backgroundColor: '#f7f7f7', padding: 10 }}>
        <Title style={{ color: 'black', padding: 10, borderBottomColor: '#c0c0c0', borderBottomWidth: 1, paddingBottom: 5, marginBottom: 5 }}>Signal Server Login</Title>

        
        <Button bordered dark small style={{ marginTop: 5}}>
          <Text>Connect</Text>
        </Button>
        <Form>
          <Item inlineLabel>
            <Label>Server</Label>
            <Input />
          </Item>
          <Item inlineLabel last>
            <Label>Your Name</Label>
            <Input />
          </Item>
        </Form>
        <ListItem>
          <CheckBox checked={false} />
          <Body>
            <Text>Use temp password</Text>
          </Body>
        </ListItem>

      </Content>
    );
  }
}

module.exports = Login;

AppRegistry.registerComponent('Login', () => Login);