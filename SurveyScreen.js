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

    render() {
      return(
        <ScrollView horizontal={true}>
          <Survey text="question 1"/>
          <Survey text="question 2"/>
          <Survey text="question 3"/>
          <Survey text="question 4"/>
        </ScrollView>
    );
  }

      /*
      <Navigator
        initialRoute={{title: 'Survey', index: 0}}
        renderScene={(route, navigator) =>
          <Survey
            onForward={() => {

            }}

            onBack={() => {

            }}
          />
        }
      />*/
  //  )
  //};
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
