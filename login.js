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

import Logo from '../components/logo';
import Form from '../components/form';
export default class login extends Component<{}>{
    render(){
      return(
          <View style={StyleSheet.container}>
            <Logo/>
            <Form/>
          </View>
      )
    }
}

const style = StyleSheet.create({
    container :{
        backgroundColor:'#455a64',
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
}

);