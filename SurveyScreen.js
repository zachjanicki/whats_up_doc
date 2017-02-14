'use strict'

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar, DefaultTabBar} from 'react-native-scrollable-tab-view';

import LandingPage from './LandingPage'
import Survey from './Survey'

export default class SurveyScreen extends Component {
  handlePress(nextComp) {
    this.props.navigator.push(nextComp)
  }

  render() {
    return <ScrollableTabView
      style={{marginTop: 50, }}
      renderTabBar={() => <DefaultTabBar />}
    >
      <Text tabLabel='Tab #1'>My</Text>
      <Text tabLabel='Tab #2'>favorite</Text>
      <Text tabLabel='Tab #3'>project</Text>
      <Text tabLabel='Tab #4'>Is</Text>
      <Text tabLabel='Tab #5'>project</Text>
      <Text tabLabel='Tab #6'>project</Text>
      <Text tabLabel='Tab #7'>project</Text>
      <Text tabLabel='Tab #8'>project</Text>
      <Text tabLabel='Tab #9'>project</Text>
      <Text tabLabel='Tab #10'>project</Text>
      <Text tabLabel='Tab #11'>project</Text>
    </ScrollableTabView>;
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
