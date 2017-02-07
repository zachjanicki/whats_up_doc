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

import ModalScreen from './ModalScreen'
import ArrowScreen from './ArrowScreen'

export default class LandingPage extends Component {
  handlePress(nextComp) {
    this.props.navigator.push(nextComp)
  }

  render() {
    const modal = {
      component: ModalScreen,
      title: 'Modal Screen',
    };
    const arrows = {
      component: ArrowScreen,
      title: 'Arrow Screen'
    }
    return (
      <View style={styles.container}>
        <Text style={styles.test_text}>Test text!!</Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.handlePress(modal)}>
            <Text>To modal survey view</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.handlePress(arrows)}>
            <Text>To arrow survey view</Text>
        </TouchableHighlight>
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
  },
  button: {
    backgroundColor: '#AAAAAA'
  }
})
