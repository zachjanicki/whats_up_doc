'use strict'

import React, {Component, PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

import {RadioButtons} from 'react-native-radio-buttons'

export default class Survey extends Component {
  //const options = this.props.qOptions;

  render() {
    if (this.props.qType == 'radioSelection') {
      const options = this.props.qOptions;
      this.state = {selectedOption: 0}
      function setSelectedOption(selectedOption) {
        this.setState({
          selectedOption
        });
      }

      function renderOption(option, selected, onSelect, index){
        const style = selected ? { fontWeight: 'bold'} : {};

        return (
          <TouchableWithoutFeedback onPress={onSelect} key={index}>
            <View>
              <Text style={style}>{option}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
      }


      function renderContainer(optionNodes){
        return <View>{optionNodes}</View>;
        }

      return(
        <View style={styles.transparentBackground}>
          <View style={styles.qBackground}>
            <Text>{this.props.text}</Text>
            <RadioButtons
              options={ options }
              onSelection={ setSelectedOption.bind(this) }
              selectedOption={this.state.selectedOption }
              renderOption={ renderOption }
              renderContainer={ renderContainer }
            />
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
    backgroundColor: 'lightblue',
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
