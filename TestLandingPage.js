/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  View,
  StatusBar,
  NavigatorIOS,
  Animated,
  Image,
  TouchableHighlight
} from 'react-native';

var Sun = React.createClass({
    render: function() {
        return (
            <View style={styles.sun} />
        )
    }
})

var time = new Date().now;
time = "5:11"

import LandingPage from './LandingPage'
import SurveyScreen from './SurveyScreen'

export default class TestLandingPage extends Component {
  handlePress(nextComp) {
    this.props.navigator.push(nextComp)
  }

  render() {

    const survey = {
      component: SurveyScreen,
      title: 'Survey Screen'
    };
    return (
      <Image source={require('./images/morning_breeze.png')} style={styles.image_container}>
      <StatusBar barStyle="light-content" />

        <View style={styles.margin}>

        </View>
        <View style={styles.main}>
        	<View style={styles.status_bar}></View>
        	<View style={styles.sky}>
        		<Sun />
        		<View style={styles.timing}>
        			<Text style={styles.primaryText}>{time}</Text>
        			<Text style={styles.secondaryText}>pm</Text>
		        </View>
        	</View>
        	<View style={styles.foreground}>
        		<View style={styles.welcome}>
        			<Text style={styles.welcomeText}>good evening, john</Text>
        			<Text style={styles.subText}>are you ready for your weekly checkup?</Text>
        		</View>
        		<TouchableHighlight
		          style={cardStyles.questionBox}
		          underlayColor={'#fff'}
		          onPress={() => this.handlePress(survey)}>
		            <Text style={styles.beginText}>BEGIN</Text>
		        </TouchableHighlight>
        	</View>
        	<View style={styles.status_bar}></View>
        </View>
        <View style={styles.margin}>
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    width: null,
    height: null,
  },
  image_mountains: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    resizeMode: 'cover',
    overflow: 'visible',
    width: null,
    height: null,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  timing: {
	margin: 10,
	marginTop: 30,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
  },
  welcome: {
    marginBottom: 30,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'column',
  },
  welcomeText:{
	  fontSize: 1.1*fontSizer(screen_width),
	  color: 'rgba(92,126,153,0.9)',
	  fontWeight: '600',
	  marginBottom: 10,
	  lineHeight: 60,
  },
  subText:{
	  fontSize: 0.3*fontSizer(screen_width),
	  color: 'rgba(92,126,153,0.5)',
	  fontWeight: '600',
	  marginBottom: 10,
  },
  beginText:{
	  fontSize: 0.3*fontSizer(screen_width),
	  color: 'rgba(92,126,153,0.4)',
	  fontWeight: '200',
	  letterSpacing: 5,
  },
  primaryText: {
    fontSize: fontSizer(screen_width),
    fontFamily: 'Helvetica Neue',
    fontWeight: '600',
    letterSpacing: -3,
    textAlign: 'right',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#ffffff',
    alignSelf: 'flex-start',
  },
  secondaryText: {
    fontSize: 0.7*fontSizer(screen_width),
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    letterSpacing: 0,
    textAlign: 'right',
    color: 'rgba(255,255,255,0.5)',
    backgroundColor: 'rgba(0,0,0,0)',
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  margin:{
	flex: 1,
	backgroundColor: 'red',
	flexShrink: 0,
  },
  main:{
	flex: 10,
	flexDirection: 'column',
	backgroundColor: 'rgba(0,0,0,0)',
  },
  status_bar:{
	flex: 1,
	backgroundColor: 'rgba(0,0,0,0)',
  },
  sky:{
	flex: 4,
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
	backgroundColor: 'transparent',
  },
  sun: {
  	// Position
  	width: 1.2*fontSizer(screen_width),
    height: 1.2*fontSizer(screen_width),
    margin: 20,
    alignSelf: 'flex-start',
    // Circle
    borderRadius: 100/2,
    // Color
    //backgroundColor: '#f9f190',
    backgroundColor: 'transparent',
    // Outer glow
    shadowOffset:{
		width: 0,
	    height: 0,
    },
    shadowColor: 'white',
    shadowOpacity: 1.0,
    shadowRadius: 10,
  },
});

const cardStyles = StyleSheet.create({
	card:{
		flex: 1,
		flexDirection: 'column',
		// Outer glow
	    shadowOffset:{
			width: 0,
		    height: 0,
	    },
	    shadowColor: 'white',
	    shadowOpacity: 0.3,
	    shadowRadius: 3,
	},
	questionBox:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(255,255,255,0.4)',
	},
	questionText: {
    	fontFamily: 'Helvetica Neue',
	    fontWeight: '400',
	    color: '#393939',
	    letterSpacing: 0.3,
	    margin: 10,
  	},
  	optionsBox:{
		flex: 5,
		backgroundColor: 'rgba(255,255,255,0.2)',
	},
  	optionsText: {
    	fontFamily: 'Helvetica Neue',
    	fontSize: 0.7*fontSizer(screen_width),
	    fontWeight: '200',
	    color: 'rgba(92,96,100,0.5)',
	    margin: 20,
  	},
});

AppRegistry.registerComponent('whats_up_doc', () => whats_up_doc);
