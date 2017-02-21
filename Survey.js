'use strict'

import React, {Component, PropTypes} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS,
  Dimensions,
  TouchableHighlight,
  TouchableWithoutFeedback
} from 'react-native';

import {RadioButtons} from 'react-native-radio-buttons'

export default class Survey extends Component {
  //const options = this.props.qOptions;

  render() {
  	
  	// Radio Question
    if (this.props.qType == 'radioSelection') {
      const options = this.props.qOptions;
      this.state = {selectedOption: 0}
      function setSelectedOption(selectedOption) {
        this.setState({
          selectedOption
        });
      }

      function renderOption(option, selected, onSelect, index){
        const style = selected ? { fontWeight: 'bold'} : {};

        return (
          <TouchableWithoutFeedback onPress={onSelect} key={index}>
            <View>
              <Text style={style}>{option}</Text>
            </View>
          </TouchableWithoutFeedback>
        );
       }
      
      function renderContainer(optionNodes){
        return <View>{optionNodes}</View>;
      }

      
      
   
    return(
	    <View style={cardStyles.cardWrapper}>
	    	<View style={cardStyles.margin} />
	        <View style={cardStyles.card}>
	        	<View style={cardStyles.questionBox}>
	        		<Text style={cardStyles.questionText}>{this.props.text.toUpperCase()}</Text>
	        	</View>
	        	<View style={cardStyles.optionsBox}>
	        		<RadioButtons
		              options={ options }
		              onSelection={ setSelectedOption.bind(this) }
		              selectedOption={this.state.selectedOption }
		              renderOption={ renderOption }
		              renderContainer={ renderContainer }
		            />
	        	</View>
	        </View>
	    </View>
      );


	   // Numeric Rating
    } else if (this.props.qType == 'numericRating') {
      return(
        <View style={cardStyles.cardWrapper}>
	    	<View style={cardStyles.margin} />
	        <View style={cardStyles.card}>
	        	<View style={cardStyles.questionBox}>
	        		<Text style={cardStyles.questionText}>{this.props.text.toUpperCase()}</Text>
	        	</View>
	        	<View style={cardStyles.optionsBox}>
	        		<Text style={cardStyles.optionsText}>Here is some numericRating</Text>
	        	</View>
	        </View>
	    </View>
      );
    
    // Other
    } else {
      return(
        <View style={cardStyles.cardWrapper}>
	    	<View style={cardStyles.margin} />
	        <View style={cardStyles.card}>
	        	<View style={cardStyles.questionBox}>
	        		<Text style={cardStyles.questionText}>{this.props.text.toUpperCase()}</Text>
	        	</View>
	        	<View style={cardStyles.optionsBox}>
	        		<Text style={cardStyles.optionsText}>Here is some other</Text>
	        	</View>
	        </View>
	    </View>
      );
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
};

const cardStyles = StyleSheet.create({
	cardWrapper:{
		flex: 1,
		flexDirection: 'row',
	    width: 0.93*Dimensions.get('window').width,
	},
	margin:{
		flex: 0.05,
		backgroundColor: 'transparent',
		flexShrink: 0,
	  },
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
	    color: '#393939',
	    letterSpacing: 0.3,
	    margin: 10,
  	},
  	optionsBox:{
		flex: 5,
		backgroundColor: 'rgba(255,255,255,0.3)',
	},
  	optionsText: {
    	fontFamily: 'Helvetica Neue',
    	fontSize: 0.7*fontSizer(screen_width),
	    fontWeight: '200',
	    color: 'rgba(92,96,100,0.5)',
	    margin: 20,
  	},
});
