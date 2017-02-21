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

import LandingPage from './LandingPage';
import Survey from './Survey';
import qList from './questions.json';

export default class SurveyScreen extends Component {
  handlePress(nextComp) {
    this.props.navigator.push(nextComp)
  }

  selectQuestions() {
    // TODO
  }
  render() {
    let qRadioSelectionText = "Please select the sentence which most applies to you";
    return(
      <View style={styles.container}>
        <View style={styles.qBackground}>
          <Text style={styles.test_text}>Today's Survey</Text>
        </View>
        <ScrollView horizontal={true} style={styles.scrollView}>
          <Survey text={qRadioSelectionText} qType='radioSelection' qOptions={qList.questions.depression.sadness}/>
          <Survey text={qRadioSelectionText} qType='radioSelection' qOptions={qList.questions.depression.future}/>
          <Survey text={qRadioSelectionText} qType='radioSelection' qOptions={qList.questions.depression.failure}/>
          <Survey text={qRadioSelectionText} qType='radioSelection' qOptions={qList.questions.depression.satisfaction}/>
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
    marginTop: 35
  }
})
