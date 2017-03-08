import React, { Component } from 'react';
import { Image, ScrollView, Text, TouchableHighlight, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class DetailScreen extends Component {

  constructor(props) {
     super(props);
     this.state = {
       text: "",
       avatarSource: null
     };
   }

   _handleImagePickerPress() {

     const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {
        console.warn('User cancelled photo picker');
      }
      else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      }
      else {
        let source = { uri: response.uri };

        this.setState({
          avatarSource: source
        });
      }
    });
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
    const { avatarSource, text, showImage } = this.state;
    const { imageUrl, title } = this.props;

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
            source={{uri: imageUrl}}
          />
        { avatarSource && <Image
              style={{
                width: 370,
                height: 289,
                marginTop: 10,
                alignSelf: 'center'
              }}
              source={ avatarSource }
            />
        }
        <TouchableHighlight onPress={() => this._handleImagePickerPress()} >
          <Text style={{backgroundColor: 'red', fontWeight: '600', textAlign: 'center', fontFamily: 'helvetica' , fontSize: 17, flex: 0.7, marginTop: 5  }}>
                Add your avatar!
          </Text>
        </TouchableHighlight>
        <Text style={{fontWeight: '600', textAlign: 'center', fontFamily: 'helvetica' , fontSize: 17, flex: 0.7, marginTop: 5  }}>
              {title}
        </Text>
        <Text style={{ fontWeight: '400',  fontFamily: 'helvetica' , fontSize: 15, marginTop: 10 }}>
                {text}
        </Text>
      </ScrollView>
      </View>
    );
  }

}