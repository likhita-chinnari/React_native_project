/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 
import Login from './src/pages/login';
export default class App extends Component<{}>{
  render(){
  return (
     
    <View style ={styles.container}>
      <StatusBar
      backgoundColor="#1c313a"
      barStyle="light-content"/>
      <Login/>
    </View>
    );
  }
}


const styles = StyleSheet.create({
  container : {
    backgroundColor : '#455a64',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});




