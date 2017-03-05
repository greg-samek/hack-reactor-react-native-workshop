/**
 * Sample React Native App for HackReactor
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Fetch,
  Text,
  View
} from 'react-native';

export default class reactNativeHackreactor extends Component {
  render() {
    return (
      <View>
        <Text>
          Information dump here!
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('reactNativeHackreactor', () => reactNativeHackreactor);
