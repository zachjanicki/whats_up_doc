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

import LandingPage from './LandingPage';
import Survey from './Survey';
import qList from './questions.json';

export default class SurveyScreen extends Component {
  constructor() {
    super();
    this.state = {
      scrollViewXPos: 0,
      score: 0,
    }
  }

  handlePress(nextComp) {
    this.props.navigator.push(nextComp)
  }

  selectQuestions() {
    // TODO
  }

  testFunction(refs, callingLocation) {
    console.log(callingLocation);
    console.log(refs);
    refs._scrollView.scrollTo({x: 1000, y: 0});
  }
//ref={(scrollView) => { _scrollView = scrollView; }}
  render() {
    let qRadioSelectionText = "Please select the sentence which most applies to you";
    var _scrollView: ScrollView;
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
            scrollEnabled={true}
            ref='_scrollView'
          >
            <TouchableHighlight onPress={() => { /*_scrollView.scrollTo({x: 1000, y: 0});*/ this.testFunction(this.refs, "from scrollview") }}>
              <Text>Touch me</Text>
            </TouchableHighlight>
	          <Survey text={qRadioSelectionText} qType='radioSelection' qOptions={qList.questions.depression.sadness} onFCall={this.testFunction} scrollRef={this.refs}/>
	          <Survey text={qRadioSelectionText} qType='radioSelection' qOptions={qList.questions.depression.future} onFCall={this.testFunction} scrollRef={this.refs}/>
	          <Survey text={qRadioSelectionText} qType='radioSelection' qOptions={qList.questions.depression.failure} onFCall={this.testFunction} scrollRef={this.refs}/>
	          <Survey text={qRadioSelectionText} qType='radioSelection' qOptions={qList.questions.depression.satisfaction} onFCall={this.testFunction} scrollRef={this.refs}/>
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
