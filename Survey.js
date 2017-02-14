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
  static get defaultProps() {
    return {
      title: 'Survey'
    };
  }
  render() {
    return(
      <View>
        <Text>Current Scene: {this.props.title}</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next screen </Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go to the previous screen </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

Survey.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};
