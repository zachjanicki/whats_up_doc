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
        <View style={styles.container}>
          <View style={styles.qBackground}>
            <Text style={styles.test_text}>Today's Survey is</Text>
          </View>
          <ScrollView horizontal={true} style={styles.scrollView}>
            <Survey text="question 1"/>
            <Survey text="question 2"/>
            <Survey text="question 3"/>
            <Survey text="question 4"/>
          </ScrollView>
        </View>
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
