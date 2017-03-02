/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

import LandingPage from './LandingPage'
import TestLandingPage from './TestLandingPage'

export default class whats_up_doc extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        itemWrapperStyle={styles.navbar}
        initialRoute={{
          title: 'Home',
          component: TestLandingPage
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navbar:{
	  backgroundColor: 'transparent',
  },
});

AppRegistry.registerComponent('whats_up_doc', () => whats_up_doc);
