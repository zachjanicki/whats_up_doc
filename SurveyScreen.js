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
      style={{marginTop: 80, }}
      renderTabBar={() => <DefaultTabBar />}
    >
      <View tabLabel='Tab #1' style={styles.container}><Text>My</Text></View>
      <View tabLabel='Tab #2' style={styles.container}><Text>favorite</Text></View>
      <View tabLabel='Tab #3' style={styles.container}><Text>project</Text></View>
      <View tabLabel='Tab #4' style={styles.container}><Text>Is</Text></View>
      <View tabLabel='Tab #5' style={styles.container}><Text>project</Text></View>
      <View tabLabel='Tab #6' style={styles.container}><Text>project</Text></View>
      <View tabLabel='Tab #7' style={styles.container}><Text>project</Text></View>
      <View tabLabel='Tab #8' style={styles.container}><Text>project</Text></View>
      <View tabLabel='Tab #9' style={styles.container}><Image tabLabel='Tab #9.5' source={require('./images/mountains.png')} style={styles.image_mountains} /></View>
      <View tabLabel='Tab #10' style={styles.container}><Text>project</Text></View>
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
