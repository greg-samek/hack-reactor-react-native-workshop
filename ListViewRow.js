import React, { Component } from 'react';
import { Image, NavigatorIOS, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import DetailScreen from './DetailScreen';

export default class ListViewRow extends Component {

  _handleNextPress(title, imageUrl, id) {
    this.props.navigator.push({
      component: DetailScreen,
      title: title,
      passProps: { title: title, imageUrl: imageUrl, id:id },
    });
  }

  render() {
    return (
      <TouchableHighlight onPress={() => this._handleNextPress(this.props.title, this.props.imageUrl, this.props.id)} >
        <View style={{flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: 5,
          marginBottom: 15
        }}>
          <Image
            style={{
              width: 370,
              height: 289,
              marginTop: 10,
              alignSelf: 'center'
            }}
            source={{uri: this.props.imageUrl}}
          />
        <Text style={{fontWeight: '600', textAlign: 'center', fontFamily: 'helvetica' , fontSize: 17, flex: 0.7, marginTop: 5  }}>
              {this.props.title}
        </Text>
        </View>
      </TouchableHighlight>
    );
  }

}