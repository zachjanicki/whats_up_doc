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
  Image
} from 'react-native';

var Sun = React.createClass({
    render: function() {
        return (
            <View style={styles.sun} />
        )
    }
})

var Card = React.createClass({
    render: function() {
        return (
            <View style={cardStyles.card}>
            	<View style={cardStyles.questionBox}>
            		<Text style={cardStyles.questionText}>How are you feeling today?</Text>
            	</View>
            	<View style={cardStyles.optionsBox}>
            		<Text style={cardStyles.optionsText}>Option 1, option 2, option 3, option 4, option 5</Text>
            	</View>
            </View>
        )
    }
})

var time = new Date().now;
time = "5:11"

export default class whats_up_doc extends Component {
  render() {
    return (
      <Image source={require('./images/morning_breeze.png')} style={styles.image_container}>
{/*
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
*/}
        <View style={styles.margin}>
        	
        </View>
        <View style={styles.main}>
        	<View style={styles.status_bar}></View>
        	<View style={styles.sky}>
        		<Sun />
        		<View style={styles.welcome}>
        			<Text style={styles.time}>{time}</Text><Text style={styles.pm}>pm</Text>
		        </View>
        	</View>
        	<View style={styles.mountains}></View>
        	<View style={styles.foreground}>
        		<Card />
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
  welcome: {
    margin: 10,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
  },
  time: {
    fontSize: fontSizer(screen_width),
    fontFamily: 'Helvetica Neue',
    fontWeight: '600',
    letterSpacing: -3,
    textAlign: 'right',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#ffffff',
    alignSelf: 'flex-end',
  },
  pm: {
    fontSize: 0.7*fontSizer(screen_width),
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    letterSpacing: 0,
    textAlign: 'right',
    color: 'rgba(255,255,255,0.5)',
    backgroundColor: 'rgba(0,0,0,0)',
    alignSelf: 'flex-end',
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
	flex: 15,
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
	backgroundColor: 'rgba(255,255,255,0.5)',
  },
  sun: {
  	// Position
  	width: 1.2*fontSizer(screen_width),
    height: 1.2*fontSizer(screen_width),
    margin: 20,
    alignSelf: 'flex-end',
    // Circle
    borderRadius: 100/2,
    // Color
    backgroundColor: '#f9f190',
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
		backgroundColor: 'rgba(255,255,255,0.8)',
	},
	questionText: {
    	fontFamily: 'Helvetica Neue',
	    fontWeight: '400',
	    color: 'black',
	    margin: 10,
  	},
  	optionsBox:{
		flex: 6,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(255,255,255,0.2)',
	},
  	optionsText: {
    	fontFamily: 'Helvetica Neue',
	    fontWeight: '400',
	    color: 'black',
	    margin: 10,
  	},
});

AppRegistry.registerComponent('whats_up_doc', () => whats_up_doc);
