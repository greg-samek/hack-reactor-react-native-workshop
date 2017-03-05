/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

import PopularListView from './PopularListView';

BASE_URL = 'https://s3.amazonaws.com/react-native-sample-app/';

export default class reactNativeHackreactor extends Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <PopularListView/>
      </View>
    );
  }
}

AppRegistry.registerComponent('reactNativeHackreactor', () => reactNativeHackreactor);
