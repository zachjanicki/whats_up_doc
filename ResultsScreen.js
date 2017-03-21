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
  ListView,
  ScrollView
} from 'react-native';

import LandingPage from './LandingPage';
import Survey from './Survey';
import qList from './questions.json';

import AreaSpline from './js/charts/AreaSpline';
import Theme from './js/theme';
import data from './resources/data';

type State = {
  activeIndex: number,
  spendingsPerYear: any
}

export default class ResultsScreen extends Component {
  state: State;

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      activeIndex: 0,
      spendingsPerYear: data.spendingsPerYear,
      dataSource: ds.cloneWithRows(this._genRows({})),
    };
  }
  
  _genRows(){
    var dataBlob = [];
    for (var ii = 1; ii < 30; ii++) {
      dataBlob.push('March ' + ii);
    }
    return dataBlob;
  }

  _onPieItemSelected(newIndex){
    this.setState({...this.state,
	    activeIndex: newIndex,
	    spendingsPerYear: data.spendingsPerYear
	    }
	    );
  }
  
  _renderRow(rowData) {
    return (
      <TouchableHighlight>
        <View>
          <View style={styles.row}>
          <View style={styles.space}/>
            <View style={styles.textWrap}>
              <Text style={styles.text}>{rowData}</Text>
              <Text style={styles.textSmall}>8:56pm</Text>
            </View>
            <Text style={styles.text}>86%</Text>
            <Image style={styles.thumb} source={require('./images/up_arrow.png')} />
          </View>
        </View>
      </TouchableHighlight>
    );
  }
  
  _renderSeparator(){
    return (
      <View
        style={{
          height: 3,
          backgroundColor: 'transparent',
        }}
      />
    );
  }
  
  render() {
	const height = Dimensions.get('window').height/3;
    const width = 5*Dimensions.get('window').width/6;
    return (
      <Image source={require('./images/results_gradient.png')} style={styles.image_container}>
	      	<View style={styles.space} />
        	<View style={styles.titleView}>
        		<Text style={styles.title}>Daily Checkup</Text>
        	</View>
        	<View style={styles.chartView}>
        		<View style={[styles.chartWrapper, {bottom:50}]}>
	        		<AreaSpline
			            width={width}
			            height={height}
			            data={this.state.spendingsPerYear}
			            color={'#2678b2'} />
			        <Text style={styles.labels}>1           5           10           15           20           25           30</Text>
		         </View>
        	</View>
        	<View style={styles.dayList}>
        		<ListView
        			automaticallyAdjustContentInsets={false}
			        dataSource={this.state.dataSource}
			        renderRow={this._renderRow}
			        renderSeparator={this._renderSeparator}
					/>
        	</View>
        
        </Image>
    )
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
  
  titleView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 0.3*fontSizer(screen_width),
    fontFamily: 'Helvetica Neue',
    fontWeight: '400',
    letterSpacing: 0,
    textAlign: 'right',
    color: 'rgba(255,255,255,0.9)',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  
  chartView: {
    flex: 4,
    flexDirection: 'row',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
  },
  
  chartWrapper:{
	flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
   },
  
  dayList: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
  },
  
  row: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  thumb: {
    width: 21,
    height: 21,
    margin: 20,
  },
  textWrap:{
	  flex: 4,
	  flexDirection: 'column',
  },
  text: {
    fontSize: 0.4*fontSizer(screen_width),
  },
  textSmall: {
    fontSize: 0.2*fontSizer(screen_width),
    color: '#7c7c7c',
  },
  labels: {
    fontSize: 0.2*fontSizer(screen_width),
    color: 'rgba(255,255,255,0.6)',
    fontWeight: '800',
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
