/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';

var SearchPage = require('./HouseAppIOS/SearchPage');

class HouseApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
            title: 'HouseApp',
            component: SearchPage,
          }}
      />
    );
  }
}

class HelloWorld extends Component {
  render() {
    return (
      <Text style={styles.text}>
        Hello World!(Again)
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

AppRegistry.registerComponent('HouseApp', () => HouseApp);
