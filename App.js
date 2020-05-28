/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation';  
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Button,
} from 'react-native'
class App extends Component {
 render() {
    return (
      <View>
        <Button  
          title="Sign In"
          onPress={() => this.props.navigation.navigate('SignIn')}    
          /> 
          <Button  
          title="Sign Up"  
          /> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

export default App;
