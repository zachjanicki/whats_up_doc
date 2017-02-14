'use strict'

import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS,
  TouchableHighlight,
  Modal
} from 'react-native';

import LandingPage from './LandingPage'

export default class ModalScreen extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  handlePress(nextComp) {
    this.props.navigator.push(nextComp)
  }

  render() {
    return (
      <View style={styles.containerCol}>
        <Text>This is some text</Text>

        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={styles.containerCol}>
          <View style={styles.outerModal}>
            <Text>Hello World!</Text>

            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

      </View>
    )
  };
}

const styles = StyleSheet.create({
  test_text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  containerRow: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  },
  containerCol: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  innerModal: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#decafe'
  },
  outerModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#decafe'
  },
  modalBorder: {
    flex: 1,
    backgroundColor: '#feddef'
  }
})
