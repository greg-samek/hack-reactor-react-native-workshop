import React, { Component } from 'react';
import { Image, Text, TouchableHighlight, View, StyleSheet } from 'react-native';

export default class ListViewRow extends Component {

  _handleNextPress(title, imageUrl, id) {
    // Navigate to the DetailScreen using the navigator.
    // Pass all props.
    // Use the title param as the title for the next screen.
    // ... you probably have to import 2 things to make this work.
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