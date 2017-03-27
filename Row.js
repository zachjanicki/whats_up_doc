import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableHighlight } from 'react-native';

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
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  photo: {
    height: 40,
    width: 40,
    borderRadius: 20,
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
    width: 15,
    height: 15,
    margin: 2,
  },
  thumbLarge: {
    width: 17,
    height: 17,
    margin: 4,
  },
  textWrap:{
	  flex: 4,
	  flexDirection: 'column',
	  marginLeft: 10,
  },
  text: {
    fontSize: 0.4*fontSizer(screen_width),
  },
  textScore: {
    fontSize: 0.4*fontSizer(screen_width),
    fontWeight: '300',
    marginLeft: 10,
  },
  percent: {
    fontSize: 0.2*fontSizer(screen_width),
    marginRight: 1,
    color: '#7c7c7c',
    bottom: 5,
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
  space: {
    flex: 1,
  }
});

function exercise(props) {
  var image = props.exercise ? require('./images/exercise_true.png') : require('./images/exercise_false.png');
  return image
}

function medication(props) {
  var image = props.medication ? require('./images/medication_true.png') : require('./images/medication_false.png');
  return image
}

function sleep(props) {
  var image = props.sleep ? require('./images/sleep_true.png') : require('./images/sleep_false.png');
  return image
}

function improvement(props) {
  var image = props.improvement ? require('./images/up_arrow.png') : require('./images/down_arrow.png');
  return image
}

const Row = (props) => (
	<TouchableHighlight>
        <View>
          <View style={styles.row}>
            <View style={styles.textWrap}>
              <Text style={styles.text}>{`${props.date}`}</Text>
              <Text style={styles.textSmall}>{`${props.time}`}</Text>
            </View>
            <Image style={styles.thumb} source={exercise(props)} />
            <Image style={styles.thumb} source={medication(props)} />
            <Image style={styles.thumb} source={sleep(props)} />
            <Text style={styles.textScore}>{`${props.score}`}</Text><Text style={styles.percent}>{"%"}</Text>
            
            <Image style={styles.thumbLarge} source={improvement(props)} />
          </View>
        </View>
      </TouchableHighlight>
);

export default Row;