import React, { Component } from 'react';
import { Image, NavigatorIOS, Text, View } from 'react-native';
const colors = {
  'royals' : '#E7E9F7',
  'babies' : '#8E7ED7',
  'pets' : '#5DC050'
}

export default class ListViewRow extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
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
    );
  }

}