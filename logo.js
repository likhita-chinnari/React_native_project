import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Button,
  Alert
} from 'react-native';

export  default class logo extends Component<{}>{
    render(){
        return(
            <View style={styles.container}>
            <Image
                style={{width:120,height:100}}
                source={require('../images/logo.jpg')}/>
                <Text style={styles.logoText}>Welcome to Tikkly</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent:'center',
        alignItems:'center'   
    },
    logoText: {
        marginVertical:13,
     fontSize:18,
     color:'rgba(255,255,255,0.7)'
    }
}

);