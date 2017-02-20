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

import {RadioButtons} from 'react-native-radio-buttons'

export default class Survey extends Component {
  //const options = this.props.qOptions;

  render() {

    if (this.props.qType == 'radioSelection') {
      return(
        <View style={styles.transparentBackground}>
          <View style={styles.qBackground}>
            <Text>Here is some radioSelection {this.props.text}</Text>
          </View>
        </View>
      );
    } else if (this.props.qType == 'numericRating') {
      return(
        <View style={styles.transparentBackground}>
          <View style={styles.qBackground}>
            <Text>Here is some numericRating {this.props.text}</Text>
          </View>
        </View>
      );
    } else {
      return(
        <View style={styles.transparentBackground}>
          <View style={styles.qBackground}>
            <Text>Here is some {this.props.text}</Text>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  qBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    marginLeft: 10,
    marginRight: 10,
  },
  transparentBackground: {
    backgroundColor: 'transparent'
  }
})

/*
Survey.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired
};
*/
