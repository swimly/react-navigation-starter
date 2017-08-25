import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  aspectRatio,
  Image,
  View
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: <Image style={{height:70,width:188}} source={require('../assets/images/logo.png')}/>,
    tabBarLabel: '首页',
    tabBarIcon: ({tintColor, focused}) => {
      return (
        focused ? 
        <Image style={{width:22,height:22}} source={require('../assets/images/nav1_active.png')}/> : 
        <Image style={{width:22,height:22}} source={require('../assets/images/nav1.png')}/>
      )
    },
    headerRight: 
    <Touchable
      style={{width:50,height:50,alignItems:'center',justifyContent:'center'}}
      onPress = {()=>navigation.navigate('Message',{userInfo: userInfo})}
      background={Touchable.Ripple('rgba(0,0,0,0.2)')}
    >
      <Image style={{width:24,height:24}} source={require('../assets/images/homeRight.png')}/>
    </Touchable>
  });
  constructor (props) {
    super(props)
  }
  render() {
    return (
      <View>
        <Text>首页</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
