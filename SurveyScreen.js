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
  PixelRatio,
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
	  <Image source={require('./images/morning_breeze.png')} style={styles.image_container}>
	  	<View style={styles.sky}>
    		<Image source={require('./images/sun.png')} style={styles.sun} />
    		<View style={styles.space} />
    		<View style={styles.welcome}>
    			<Text style={styles.primaryText}>1</Text>
    			<Text style={styles.secondaryText}>/10</Text>
	        </View>
    	</View>
    	<View style={styles.mountains}>
    		<Image source={require('./images/mountains.png')} style={styles.image_mountains} />
    	</View>
	    <View style={styles.container}>
	        <ScrollView
	        	horizontal={true}
	        	showsVerticalScrollIndicator={false}
	        	showsHorizontalScrollIndicator={false}
				style={styles.scrollView}
				automaticallyAdjustContentInsets={false}
				>
	          <Survey text="question 1" qType='radioSelection' />
	          <Survey text="question 2" qType='numericRating'/>
	          <Survey text="question 3" qtype='radioSelection'/>
	          <Survey text="question 4" qtype='numericRating'/>
	        </ScrollView>
	    </View>
      </Image>
    );
  }
}

var {screen_height, screen_width} = Dimensions.get('window');

function fontSizer (screenWidth) {
  // iPhone 6/7 plus
  if(screenWidth > 400){
    return 80;

  // iPhone 6/7
  }else if(screenWidth > 250){
    return 70;

  // iPhone 5
  }else {
    return 60;
  }
}

const styles = StyleSheet.create({
  image_container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    width: null,
    height: null,
  },
  container: {
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical: 20
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  welcome: {
	  flex: 2,
    margin: 10,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
  },
  primaryText: {
    fontSize: fontSizer(screen_width),
    fontFamily: 'Helvetica Neue',
    fontWeight: '600',
    letterSpacing: -3,
    textAlign: 'right',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#ffffff',
    alignSelf: 'flex-end',
  },
  secondaryText: {
    fontSize: 0.7*fontSizer(screen_width),
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    letterSpacing: 0,
    textAlign: 'right',
    color: 'rgba(255,255,255,0.5)',
    backgroundColor: 'rgba(0,0,0,0)',
    alignSelf: 'flex-end',
  },
  sky:{
	flex: 4,
	marginTop: 65,
	backgroundColor: 'rgba(0,0,0,0)',
	flexDirection: 'row',
	justifyContent: 'space-around',
  },
  mountains:{
	flex: 4,
	backgroundColor: 'rgba(255,255,0,0.0)',
  },
  foreground:{
	flex: 8,
	backgroundColor: 'rgba(255,255,255,0.5)',
  },
  space:{
	  flex: 1,
  },
  sun: {
	flex: 1,
  	// Position
  	height: 2*fontSizer(screen_width),
  	width: 2*fontSizer(screen_width),
  	overflow: 'visible',
    margin: 20,
    alignSelf: 'flex-end',
  },
})
