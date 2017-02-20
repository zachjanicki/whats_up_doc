'use strict'

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS,
  Image,
  TouchableHighlight,
  Animated,
  Dimensions,
  ScrollView
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';

import LandingPage from './LandingPage'
import Survey from './Survey'

export default class SurveyScreen extends Component {
  handlePress(nextComp) {
    this.props.navigator.push(nextComp)
  }

  selectQuestions() {
    // TODO
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.qBackground}>
          <Text style={styles.test_text}>Today's Survey is</Text>
        </View>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <Survey text="question 1" qType='radioSelection'/>
          <Survey text="question 2" qType='numericRating'/>
          <Survey text="question 3" qtype='radioSelection'/>
          <Survey text="question 4" qtype='numericRating'/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  test_text: {
    fontSize: 50,
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkblue',
    paddingVertical: 20
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'transparent',
    marginLeft: 10,
    marginRight: 10
  },
  qBackground: {
    flex: 1,
    backgroundColor: 'skyblue',
  }
})
