import { ActivityIndicator, Fetch,Image, NavigatorIOS, Text, ListView, StyleSheet, View } from 'react-native';
import React, { Component } from 'react';
import ListViewRow from './ListViewRow';
BASE_URL = 'https://s3.amazonaws.com/react-native-sample-app/';


export default class PopularListView extends Component {
  constructor(props) {
     super(props);
     this.state = {
       dataSource: {},
       loading: true
     };
   }

   componentDidMount() {
     const { dataSource, loading } = this.state;
     const initialLoad_URL = BASE_URL + 'onload.json';
     fetch(initialLoad_URL)
     .then((response) => response.json())
     .then( (json) => {
       // Instantiate a new ListView dataSource.
       // const ds =
       // Set dataSource using cloneWithRows.
       //this.setState({dataSource: , loading: false});
     })
     .catch((error) => {
       console.warn(error);
     });

   }

 /*
Creating the ListViewRow.
<ListView style={{marginTop: 60}}
dataSource={this.state.dataSource}
renderRow={(rowData) => <ListViewRow {... rowData} /> }
renderSeparator={(sectionId, rowId) => <View key={rowId} style={{ flex: 1, height: 3, backgroundColor: '#F0F0F0'}} />}
/>
 */

  render() {
    const {loading} = this.state;
      return (
        <View style={{flex: 1}}>
          {loading &&
            <ActivityIndicator
            style={{alignItems: 'center',
              justifyContent: 'center',
              marginTop: 300
            }}
            size="large"
            />
          }
          {!loading &&
            <Text> ListView goes here! </Text>

          }

        </View>
      );
    }
}