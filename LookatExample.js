import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  createIdentityMatrix
} from './matrixMath';

const SimpleCameraHandler = require('./SimpleCameraHandler');

class LookatExample extends Component {
  state = {
    lookat: createIdentityMatrix(),
  }

  _onLookatChanged = matrix => {
    this.setState({
      lookat: matrix,
    });

    // TODO: send lookat over data channel
  }

  _format(n) {
    return n.toFixed(3);
  }

  render() {
    let _cameraHandler;
    return (
      <SimpleCameraHandler
        ref={(cameraHandler) => { _cameraHandler = cameraHandler; }}
        onLookatChanged={this._onLookatChanged}>
        <View style={styles.container}>
          <Text style={styles.text}>
            <Text>|{this._format(this.state.lookat[0])}, {this._format(this.state.lookat[1])}, {this._format(this.state.lookat[2])}, {this._format(this.state.lookat[3])}|{'\n'}</Text>
            <Text>|{this._format(this.state.lookat[4])}, {this._format(this.state.lookat[5])}, {this._format(this.state.lookat[6])}, {this._format(this.state.lookat[7])}|{'\n'}</Text>
            <Text>|{this._format(this.state.lookat[8])}, {this._format(this.state.lookat[9])}, {this._format(this.state.lookat[10])}, {this._format(this.state.lookat[11])}|{'\n'}</Text>
            <Text>|{this._format(this.state.lookat[12])}, {this._format(this.state.lookat[13])}, {this._format(this.state.lookat[14])}, {this._format(this.state.lookat[15])}|{'\n'}</Text>
          </Text>
          <Button onPress={() => _cameraHandler.reset()} title={'Reset'} />
        </View>
      </SimpleCameraHandler>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 25,
  }
});

module.exports = LookatExample;