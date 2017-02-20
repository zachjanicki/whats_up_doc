'use strict'

import React, {Component, PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

export default class Survey extends Component {
  render() {
    return(
      <View>
        <Text>Here is some {this.props.text}</Text>
      </View>
    )
  }
}
/*
Survey.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};
*/
