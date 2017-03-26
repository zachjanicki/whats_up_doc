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
  ScrollView,
  AsyncStorage
} from 'react-native';

import LandingPage from './LandingPage';
import Survey from './Survey';
import qList from './questions.json';

const buttonNotClicked = require('./images/radio.png');
const buttonClicked = require('./images/radio_selected.png');

export default class SurveyScreen extends Component {
  constructor() {
    super();
    this.state = {
      scrollViewXPos: 0,
      score: 0,
      cardNumber: 1,
      sendImgUrl1: buttonNotClicked,
      sendImgUrl2: buttonNotClicked,
      sendImgUrl3: buttonNotClicked,
      sendImgUrl4: buttonNotClicked,
    }
  }

  selectQuestion(cardID) { //cardID is an int
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    day = 59; // setting this constant for debugging
    var wordedModValue = 4;
    var numericSymptomModValue = 3;
    var numericDescriptionModValue = 3;
    var counter = 0;

    if (cardID < 5) {
      // get a worded qType
      var j = qList.questions.worded;
      var questionNumber = (cardID * 4) + (day % wordedModValue);
      if (questionNumber > 19) {
        questionNumber = 19;
      }
      for (var q in j) {
        if (j.hasOwnProperty(q)) {
          counter++;
          if (counter == questionNumber) {
            var obj = {};
            obj[q] = j[q];
            return obj
            //return qList.questions.worded.q;
          }
        }
      }
    } else if (cardID >= 5 && cardID < 7) {
      // get a numericSymptom qType
      cardID -= 5;
      var j = qList.questions.numericSymptom;
      var questionNumber = (cardID * 3) + (day % numericSymptomModValue);
      if (questionNumber > 8) {
        questionNumber = 8;
      }
      for (var i = 0; i < 9; i++) {
        if (i == questionNumber) {
          return j.symptoms[i];
        }
      }
    } else {
      // get a numericDescription qType
      cardID -= 7;
      var j = qList.questions.numericDescription;
      var questionNumber = (cardID * 2) + (day % numericSymptomModValue);
      if (questionNumber > 5) {
        questionNumber = 5;
      }
      for (var q in j) {
        if (j.hasOwnProperty(q)) {
          counter++;
          if (counter == questionNumber) {
            var obj = {};
            obj[q] = j[q];
            return obj
          }
        }
      }
    }
  }

  testFunction(refs, callingLocation) {
    console.log(callingLocation);
    console.log(refs);
    refs._scrollView.scrollTo({x: 1000, y: 0});
  }

  async handlePress(answerValue, cardLocation, cardID) {
    if (cardID == 9) {
      // move on to next view
      var currentScore = this.state.score;
      currentScore += answerValue;
      var currentX = 347 * (cardID + 1); // this will be adjusted later with a function that gets us the screen width
      var currentCardNumber = this.state.cardNumber;
      currentCardNumber = cardLocation + 1;
      this.setState({
        score: currentScore,
        scrollViewXPos: currentX,
        cardNumber: currentCardNumber
      });
      console.log(this.state);
      // Finished
      var now = new Date();
      var start = new Date(now.getFullYear(), 0, 0);
      var diff = now - start;
      var oneDay = 1000 * 60 * 60 * 24;
      var day = Math.floor(diff / oneDay);
      var date_key = day * now.getFullYear();
      try {
        await AsyncStorage.setItem(Number.toString(date_key) + "_surveyCompleted", "true");
        console.log("data saved!!");
      } catch (error) {
        console.log(error);
      }
      this.props.navigator.pop();

    } else {
      // update state, slide over
      var currentScore = this.state.score;
      currentScore += answerValue;
      var currentX = 347 * (cardID + 1); // this will be adjusted later with a function that gets us the screen width
      var currentCardNumber = this.state.cardNumber;
      currentCardNumber = cardLocation + 1;
      switch (answerValue) {
		    case 1:
		        this.setState({sendImgUrl1: buttonClicked,
			        sendImgUrl2: buttonNotClicked,
			        sendImgUrl3: buttonNotClicked,
			        sendImgUrl4: buttonNotClicked,
		        });
		        break;
		    case 2:
		        this.setState({sendImgUrl2: buttonClicked,
			        sendImgUrl1: buttonNotClicked,
			        sendImgUrl3: buttonNotClicked,
			        sendImgUrl4: buttonNotClicked,});
		        break;
		    case 3:
		        this.setState({sendImgUrl3: buttonClicked,
			        sendImgUrl2: buttonNotClicked,
			        sendImgUrl1: buttonNotClicked,
			        sendImgUrl4: buttonNotClicked,});
		        break;
		    case 4:
		        this.setState({sendImgUrl4: buttonClicked,
			        sendImgUrl2: buttonNotClicked,
			        sendImgUrl3: buttonNotClicked,
			        sendImgUrl1: buttonNotClicked,});
		        break;
		}
      this.setState({
        score: currentScore,
        scrollViewXPos: currentX,
        cardNumber: currentCardNumber,
      });
      this.refs._scrollView.scrollTo({x: currentX});
    }
/*
      this.setState({sendImgUrl1: buttonNotClicked});
      this.setState({sendImgUrl2: buttonNotClicked});
      this.setState({sendImgUrl3: buttonNotClicked});
      this.setState({sendImgUrl4: buttonNotClicked});
*/
  }

//ref={(scrollView) => { _scrollView = scrollView; }}
// onPress={() => { this.testFunction(this.refs, "from new function!") }}
// ^ that is how to use refs to play with the scrollView... will be used later
  render() {
    let qRadioSelectionText = "Please select the sentence which most applies to you";
    var _scrollView: ScrollView;
    const singleCard = (cardID, qType, cardLocation) => {
      // qtype is either "worded", "numericSymptom", or "numericDescription"
      // question is a JSON object
      var i = 0;
      var cardQuestion = this.selectQuestion(cardID);
      if (cardID < 5) {
        // worded question type
        return (
          <View style={styles.cardWrapper}>
            <View style={styles.margin} />
              <View style={styles.card}>
                <View style={styles.questionBox}>
                  <Text style={styles.questionText}>{Object.keys(cardQuestion)[0].toUpperCase()}</Text>
                </View>
                <View style={styles.optionsBox}>
                  <TouchableHighlight onPress={() => {this.handlePress(1, cardLocation, cardLocation)}} underlayColor={'#fff'}>
	                  <View style={styles.line}>
	                  	<Image source={this.state.sendImgUrl1} style={styles.radio} />
	                  	<View style={styles.textWrapper}>
	                    	<Text style={styles.optionsText}>{cardQuestion[Object.keys(cardQuestion)[0]][0]}</Text>
	                    </View>
	                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => {this.handlePress(2, cardLocation, cardLocation)}} underlayColor={'#fff'}>
	                  <View style={styles.line}>
	                  	<Image source={this.state.sendImgUrl2} style={styles.radio} />
	                  	<View style={styles.textWrapper}>
	                    	<Text style={styles.optionsText}>{cardQuestion[Object.keys(cardQuestion)[0]][1]}</Text>
	                    </View>
	                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => {this.handlePress(3, cardLocation, cardLocation)}} underlayColor={'#fff'}>
	                  <View style={styles.line}>
	                  	<Image source={this.state.sendImgUrl3} style={styles.radio} />
	                  	<View style={styles.textWrapper}>
	                    	<Text style={styles.optionsText}>{cardQuestion[Object.keys(cardQuestion)[0]][2]}</Text>
	                    </View>
	                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => {this.handlePress(4, cardLocation, cardLocation)}} underlayColor={'#fff'}>
	                  <View style={styles.line}>
	                  	<Image source={this.state.sendImgUrl4} style={styles.radio} />
	                  	<View style={styles.textWrapper}>
	                    	<Text style={styles.optionsText}>{cardQuestion[Object.keys(cardQuestion)[0]][3]}</Text>
	                    </View>
	                  </View>
                  </TouchableHighlight>
                </View>
              </View>
          </View>
        );
      } else if (cardID >= 5 && cardID < 7) {
        // numericSymptom
        var numericSymptomText = "Please rate how much this feeling has affected you in the past on a scale of 1 (not at all) to 4 (very often)?";
        return (
          <View style={styles.cardWrapper}>
            <View style={styles.margin} />
              <View style={styles.card}>
                <View style={styles.questionBox}>
                    <Text style={styles.questionText}>{cardQuestion.toUpperCase()}</Text>
                </View>
                <View style={styles.optionsBox}>
                  <Text style={styles.optionsText}>{numericSymptomText}</Text>
                  <TouchableHighlight onPress={() => {this.handlePress(1, cardLocation, cardLocation)}} underlayColor={'#fff'}>
                    <View style={styles.line}>
	                  	<Image source={this.state.sendImgUrl1} style={styles.radio} />
	                  	<View style={styles.textWrapper}>
	                    	<Text style={styles.optionsText}>1</Text>
	                    </View>
	                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => {this.handlePress(2, cardLocation, cardLocation)}} underlayColor={'#fff'}>
                    <View style={styles.line}>
	                  	<Image source={this.state.sendImgUrl2} style={styles.radio} />
	                  	<View style={styles.textWrapper}>
	                    	<Text style={styles.optionsText}>2</Text>
	                    </View>
	                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => {this.handlePress(3, cardLocation, cardLocation)}} underlayColor={'#fff'}>
                    <View style={styles.line}>
	                  	<Image source={this.state.sendImgUrl3} style={styles.radio} />
	                  	<View style={styles.textWrapper}>
	                    	<Text style={styles.optionsText}>3</Text>
	                    </View>
	                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => {this.handlePress(4, cardLocation, cardLocation)}} underlayColor={'#fff'}>
                    <View style={styles.line}>
	                  	<Image source={this.state.sendImgUrl4} style={styles.radio} />
	                  	<View style={styles.textWrapper}>
	                    	<Text style={styles.optionsText}>4</Text>
	                    </View>
	                  </View>
                  </TouchableHighlight>
                </View>
              </View>
          </View>
        );
      } else {
        // numericDescription
        var numericDescriptionText = "How often have you had " + cardQuestion[Object.keys(cardQuestion)[0]] + " in the past week on a scale of 1 (not at all) to 4 (very often)?";
        return (
          <View style={styles.cardWrapper}>
            <View style={styles.margin} />
              <View style={styles.card}>
                <View style={styles.questionBox}>
                  <Text style={styles.questionText}>{Object.keys(cardQuestion)[0].toUpperCase()}</Text>
                </View>
                <View style={styles.optionsBox}>
                  <Text style={styles.optionsText}>{numericDescriptionText}</Text>
                  <TouchableHighlight onPress={() => {this.handlePress(1, cardLocation, cardLocation)}} underlayColor={'#fff'}>
                    <View style={styles.line}>
	                  	<Image source={this.state.sendImgUrl1} style={styles.radio} />
	                  	<View style={styles.textWrapper}>
	                    	<Text style={styles.optionsText}>1</Text>
	                    </View>
	                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => {this.handlePress(2, cardLocation, cardLocation)}} underlayColor={'#fff'}>
                    <View style={styles.line}>
	                  	<Image source={this.state.sendImgUrl2} style={styles.radio} />
	                  	<View style={styles.textWrapper}>
	                    	<Text style={styles.optionsText}>2</Text>
	                    </View>
	                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => {this.handlePress(3, cardLocation, cardLocation)}} underlayColor={'#fff'}>
                    <View style={styles.line}>
	                  	<Image source={this.state.sendImgUrl3} style={styles.radio} />
	                  	<View style={styles.textWrapper}>
	                    	<Text style={styles.optionsText}>3</Text>
	                    </View>
	                  </View>
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => {this.handlePress(4, cardLocation, cardLocation)}} underlayColor={'#fff'}>
                    <View style={styles.line}>
	                  	<Image source={this.state.sendImgUrl4} style={styles.radio} />
	                  	<View style={styles.textWrapper}>
	                    	<Text style={styles.optionsText}>4</Text>
	                    </View>
	                  </View>
                  </TouchableHighlight>
                </View>
              </View>
          </View>
        );
      }

    }
    return (
      <Image source={require('./images/morning_breeze.png')} style={styles.image_container}>
      	<View style={styles.sky}>
      		<View style={styles.sun} />
      		<View style={styles.space} />
      		<View style={styles.counter}>
      			<Text style={styles.primaryText} ref='_cardNumberText'>{this.state.cardNumber}</Text>
      			<Text style={styles.secondaryText}>/10</Text>
            </View>
      	</View>
      	{/*
      	<View style={styles.mountains}>
      		<Image source={require('./images/mountains.png')} style={styles.image_mountains} />
      	</View>
      	*/}
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
              {/* Note: comments in JSX part go in brackets like this.*/}

              <View>
                {new singleCard(0, 'worded', 0)}
              </View>
              <View>
                {new singleCard(4, 'worded', 1)}
              </View>
              <View>
                {new singleCard(1, 'worded', 2)}
              </View>
              <View>
                {new singleCard(5, 'numericSymptom', 3)}
              </View>
              <View>
                {new singleCard(2, 'worded', 4)}
              </View>
              <View>
                {new singleCard(6, 'numericSymptom', 5)}
              </View>
              <View>
                {new singleCard(3, 'worded', 6)}
              </View>
              <View>
                {new singleCard(7, 'numericDescription', 7)}
              </View>
              <View>
                {new singleCard(8, 'numericDescription', 8)}
              </View>
              <View>
                {new singleCard(9, 'numericDescription', 9)}
              </View>

            </ScrollView>
        </View>
        <View style={[{marginBottom: 20}]} />
        </Image>
    )
  }
}

/*
<Survey text={qRadioSelectionText} qType='radioSelection' qOptions={qList.questions.depression.sadness} onFCall={this.testFunction} scrollRef={this.refs}/>
<Survey text={qRadioSelectionText} qType='radioSelection' qOptions={qList.questions.depression.future} onFCall={this.testFunction} scrollRef={this.refs}/>
<Survey text={qRadioSelectionText} qType='radioSelection' qOptions={qList.questions.depression.failure} onFCall={this.testFunction} scrollRef={this.refs}/>
<Survey text={qRadioSelectionText} qType='radioSelection' qOptions={qList.questions.depression.satisfaction} onFCall={this.testFunction} scrollRef={this.refs}/>
*/

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
  },
  counter: {
    flex: 2,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
    marginTop: 15,
  },
  primaryText: {
    fontSize: fontSizer(screen_width),
    fontFamily: 'Helvetica Neue',
    fontWeight: '600',
    letterSpacing: -3,
    textAlign: 'right',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#ffffff',
  },
  secondaryText: {
    fontSize: 0.7*fontSizer(screen_width),
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    letterSpacing: 0,
    textAlign: 'right',
    color: 'rgba(255,255,255,0.5)',
    backgroundColor: 'rgba(0,0,0,0)',
    marginTop: 20,
  },
  sky: {
    flex: 4,
    marginTop: 65,
    backgroundColor: 'rgba(0,0,0,0)',
    flexDirection: 'row',
  },
  mountains: {
    flex: 2,
    backgroundColor: 'rgba(255,255,0,0.0)',
  },
  foreground: {
    flex: 6,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  space: {
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
  optionsBox: {
		flex: 6,
		backgroundColor: 'rgba(255,255,255,0.3)',
	},
	line:{
		flex: -1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'wrap',
        alignItems: 'flex-start',
	},
	textWrapper:{
		flex: 4,
		flexDirection: 'column',
		justifyContent: 'center',
		marginTop: 15,
	},
	optionsText: {
		fontFamily: 'Helvetica Neue',
		fontSize: 0.3*fontSizer(screen_width),
		fontWeight: '300',
		color: 'rgba(30,30,30,.6)',
		marginLeft: 0.3*fontSizer(screen_width),
		marginRight: 0.3*fontSizer(screen_width),
	},
	radio: {
		flex: 0.5,
		marginLeft: 20,
		width: 10,
		resizeMode: 'contain',
	},
})
