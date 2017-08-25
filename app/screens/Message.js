import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import $ from '../assets/styles/style';
import Touchable from 'react-native-platform-touchable';
export default class MessageScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '消息',
    tabBarLabel: '消息',
    tabBarVisible: false,
    headerLeft: 
    <Touchable
      style={{width:50,height:50,alignItems:'center',justifyContent:'center'}}
      onPress = {()=>navigation.goBack()}
      background={Touchable.Ripple('rgba(0,0,0,0.2)')}
    >
      <Image style={{width:24,height:24}} source={require('../assets/images/back.png')}/>
    </Touchable>
  });
  constructor (props) {
    super(props)
    this.state = this.props.navigation.state.params.userInfo
    console.log(this.state,88888)
  }
  render() {
    const {userId} = this.state;
    return (
      <View>
        <Text>消息{userId}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
