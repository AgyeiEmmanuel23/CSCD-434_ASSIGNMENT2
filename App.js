import React, { Component } from 'react';
import { StyleSheet,  View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import ProfileScreen from './Screens/ProfileScreen';
import Transaction from './Screens/Transaction';

export default class App extends Component {
  render () {

    return (
    // <View style={styles.container}>
     
    // </View>
        //  <HomeScreen/>
        // <ProfileScreen/>
        <Transaction/>
    
  );
}

  }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F2F8FD',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
