'use strict'

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

import LandingPage from './LandingPage'

export default class ModalScreen extends Component {
  handlePress(nextComp) {
    this.props.navigator.push(nextComp)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.test_text}>Arrow Screen</Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  test_text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})
