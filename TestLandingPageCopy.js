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
  TouchableHighlight,
  AsyncStorage,
  TextInput,
} from 'react-native';

let UID123_object = {
 name: 'Chris',
 age: 30,
 traits: {hair: 'brown', eyes: 'brown'},
};
// You only need to define what will be added or updated
let UID123_delta = {
 age: 31,
 traits: {eyes: 'blue', shoe_size: 10}
};
/*
AsyncStorage.setItem('UID123', JSON.stringify(UID123_object), () => {
  AsyncStorage.mergeItem('UID123', JSON.stringify(UID123_delta), () => {
    AsyncStorage.getItem('UID124', (err, result) => {
      if (err) {
        console.log(err);
        console.log("key does not exist");
      }
      console.log(result);
      if (!result) {
        console.log('no result');
      }
    });
  });
});

AsyncStorage.clear((err) => {
  console.log('data cleared');
})
*/

var Sun = React.createClass({
    render: function() {
        return (
            <View style={styles.sun} />
        )
    }
})

timeOfDay = "evening"
var now = new Date().getHours();
if (now >= 0 && now < 12){
	timeOfDay = "morning";
} else if (now > 12 && now < 5) {
	timeOfDay = "afternoon";
} else {
	timeOfDay = "evening"
}



import LandingPage from './LandingPage'
import SurveyScreen from './SurveyScreen'

export default class TestLandingPage extends Component {
  getInitialState() {
    return {
      is_loading: true,
      profile_exists: false
    }
  }
  handlePress(nextComp) {
    this.props.navigator.push(nextComp)
  }
  handleSubmit() {
    if (!this.refs._textInputAge.value) {
      console.log('no age provided!');
    }
    console.log(this.refs._textInputAge.value);
  }
  render() {
    this.state = {
      profile_loaded: false,
      is_loading: true
    };
    AsyncStorage.getItem('info_provided', (err, result) => {
      if (err) {
        console.log(err);
      } else if (!result) {
        console.log('no profile created yet');
        this.setState({
          profile_exists: false
        });
      }
    });

    const survey = {
      component: SurveyScreen,
      title: 'Survey Screen'
    };

    if (!this.state.is_loading) {
      return (
        <Text style={{marginTop: 100}}>Im loading...</Text>
      )
    } else if (this.state.is_loading && !this.state.profile_exists) {
      return (
        <Image source={require('./images/morning_breeze.png')} style={styles.image_container}>
        <StatusBar barStyle="light-content" />

          <View style={styles.margin}>

          </View>
          <View style={styles.main}>
          	<View style={styles.status_bar}></View>
          	<View style={styles.sky}>

          	</View>
          	<View style={styles.foreground}>
          		<View style={styles.welcome}>
          			<Text style={styles.welcomeText}>Good {timeOfDay}, john</Text>
          			<Text style={styles.subText}>Are you ready for your daily checkup?</Text>
          		</View>
          		<TouchableHighlight
  		          style={cardStyles.questionBox}
  		          underlayColor={'#fff'}
  		          onPress={() => this.handlePress(survey)}>
  		            <Text style={styles.beginText}>begin</Text>
  		        </TouchableHighlight>
          	</View>
          	<View style={styles.status_bar}></View>
          </View>
          <View style={styles.margin}>
          </View>

        </Image>

      );
    } else { // create user profile
      return (
        <Image source={require('./images/morning_breeze.png')}>
          <View style={{marginTop: 50}}>
            <Text>Welcome to whats up doc, the app to help you track your mental health</Text>
            <Text>Please fill out the following information to begin</Text>
            <Text>Name:</Text>
            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} ref='_textInputName'></TextInput>
            <Text>Age:</Text>
            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} ref='_textInputAge'></TextInput>
            <Text>Doctor's Name:</Text>
            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} ref='_textInputDoctorsName'></TextInput>
            <Text>Doctors's Email:</Text>
            <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} ref='_textInputDoctorsEmail'></TextInput>
            <TouchableHighlight onPress={() => {this.handleSubmit()}}>
              <Text>Submit</Text>
            </TouchableHighlight>
          </View>
        </Image>
      )
    }
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
	  color: 'rgba(92,154,167,0.9)',
	  fontWeight: '600',
	  marginBottom: 10,
	  lineHeight: 65,
  },
  subText:{
	  fontSize: 0.3*fontSizer(screen_width),
	  color: 'rgba(92,126,153,0.5)',
	  fontWeight: '600',
	  marginBottom: 25,
  },
  beginText:{
	  fontSize: 0.3*fontSizer(screen_width),
	  color: 'white',
	  fontWeight: '400',
	  letterSpacing: 2,
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
	flex: 2,
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
});

const cardStyles = StyleSheet.create({
	card:{
		flex: 1,
		flexDirection: 'column',
	},
	questionBox:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(106,208,139,0.9)',
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
