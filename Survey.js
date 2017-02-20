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
      <View style={styles.transparentBackground}>
        <View style={styles.qBackground}>
          <Text>Here is some {this.props.text}</Text>
        </View>
      </View>

    )
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
