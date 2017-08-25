import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import $ from '../assets/styles/style';
import Touchable from 'react-native-platform-touchable';
export default class SettingScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '设置',
    tabBarVisible: false,
    headerLeft: 
    <Touchable
      style={{width:50,height:50,alignItems:'center',justifyContent:'center'}}
      onPress = {()=>navigation.goBack()}
      background={Touchable.Ripple('rgba(0,0,0,0.2)')}
    >
      <Image style={{width:24,height:24}} source={require('../assets/images/back_white.png')}/>
    </Touchable>,
    headerTitleStyle: {
      alignSelf: 'center',
      color: 'rgba(255,255,255,0.9)',
      fontWeight: 'normal',
    },
    headerStyle: {
      backgroundColor:'#EB3D00',
      borderBottomWidth:.5,
      borderColor:'#DFDFDF',
      elevation:0,
      shadowOpacity:0,
      height: 50
    }
  });
  constructor (props) {
    super(props)
    this.state = this.props.navigation.state.params.userInfo
  }
  render() {
    const {userId} = this.state
    return (
      <View>
        <Text>设置{userId}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
