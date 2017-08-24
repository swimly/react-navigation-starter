import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
export default class CustomerScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '客户管理',
    tabBarLabel: '客户管理',
    headerRight: 
    <Touchable
      style={{width:50,height:50,alignItems:'center',justifyContent:'center'}}
      background={Touchable.Ripple('rgba(0,0,0,0.2)')}
    >
      <Image style={{width:24,height:24}} source={require('../assets/images/add.png')}/>
    </Touchable>,
    tabBarIcon: ({tintColor, focused}) => {
      return (
        focused ? 
        <Image style={{width:22,height:22}} source={require('../assets/images/nav2_active.png')}/> : 
        <Image style={{width:22,height:22}} source={require('../assets/images/nav2.png')}/>
      )
    }
  });
  render() {
    return (
      <View>
        <Text>客户管理</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
