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

BASE_URL = 'https://s3.amazonaws.com/react-native-sample-app/';

export default class reactNativeHackreactor extends Component {

  constructor() {
    super()
    this.state = {
       dataSource: "I will be updated!"
     };
  }

  componentDidMount() {
    const { dataSource } = this.state;
    const initialLoad_URL = BASE_URL + 'onload.json';

  }

  render() {
    const { dataSource } = this.state;

    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Text>
          {dataSource}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('reactNativeHackreactor', () => reactNativeHackreactor);
