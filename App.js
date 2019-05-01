import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.redview}/>
        <View style={styles.yellowView}/>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  redview :{
    height:50, 
    width:50,
    // flex:1, 
    backgroundColor:'red'
  }
  , 
  yellowView:{

    height:50, 
    width:50,
    // flex:6, 
    backgroundColor:'yellow'
  }
});
