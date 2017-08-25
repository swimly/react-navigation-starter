import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import { 
  Container, 
  Content, 
  Button, 
  Body, 
  Icon, 
  Text, 
  Item, 
  Input 
} from 'native-base';
import Touchable from 'react-native-platform-touchable';
import {NavigationActions} from 'react-navigation';
import {$} from '../assets/styles/style' ;
export default class MeScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '我的',
    tabBarLabel: '我的',
    tabBarIcon: ({tintColor, focused}) => {
      return (
        focused ? 
        <Image style={{width:22,height:22}} source={require('../assets/images/nav4_active.png')}/> : 
        <Image style={{width:22,height:22}} source={require('../assets/images/nav4.png')}/>
      )
    },
    headerRight: 
    <View style={{flexDirection:'row'}}>
      <Touchable
        style={{width:50,height:50,alignItems:'center',justifyContent:'center'}}
        background={Touchable.Ripple('rgba(0,0,0,0.2)')}
      >
        <Image style={{width:24,height:24}} source={require('../assets/images/setting.png')}/>
      </Touchable>
      <Touchable
        style={{width:50,height:50,alignItems:'center',justifyContent:'center'}}
        background={Touchable.Ripple('rgba(0,0,0,0.2)')}
        onPress = {()=>navigation.navigate('Message',{userId: '45641531354156'})}
      >
        <Image style={{width:24,height:24}} source={require('../assets/images/tips.png')}/>
      </Touchable>
    </View>,
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
    this.state = {
      userId: this.props.navigation.state.params.userId
    }
  }
  _logout () {
    storage.remove({
      key: 'userInfo'
    })
    const resetAction = NavigationActions.reset({
      index:0,
      actions: [
        NavigationActions.navigate({routeName: 'Login',params: {userId: userInfo.userId}})
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }
  render() {
    const {userId} = this.state
    return (
      <View>
        <Button full danger
          style={[$.button, $.button_default,{marginTop:20}]}
          onPress = {()=>this._logout()}
        >
          <Text>登录</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
