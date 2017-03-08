import React, { Component } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

export default class DetailScreen extends Component {

  constructor(props) {
     super(props);
     this.state = {
       text: ""
     };
   }

  componentDidMount() {
    const { id } = this.props;
    const ARTICLE_URL = BASE_URL + 'article-' + id + '.json';
    fetch(ARTICLE_URL)
    .then((response) => response.json())
    .then( (json) => {
      this.setState({text: json})
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  render() {
    return (
      <View style={{flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 0,
        marginBottom: 15
      }}>
      <ScrollView>
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
        <Text style={{ fontWeight: '400',  fontFamily: 'helvetica' , fontSize: 15, marginTop: 10 }}>
                {this.state.text}
        </Text>
      </ScrollView>
      </View>
    );
  }

}