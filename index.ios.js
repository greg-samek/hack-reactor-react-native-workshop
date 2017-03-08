/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  Text,
  View
} from 'react-native';

import PopularListView from './PopularListView';

BASE_URL = 'https://s3.amazonaws.com/react-native-sample-app/';

export default class reactNativeHackreactor extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: PopularListView,
          title: 'People',
        }}
        titleTextColor= '#3ab8ec'
        style={{flex: 1}}
      />
    );
  }
}

AppRegistry.registerComponent('reactNativeHackreactor', () => reactNativeHackreactor);
