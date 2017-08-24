import React, { Component } from 'react';
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
import {
  Image,
  View,
  ToastAndroid
} from 'react-native';

import {NavigationActions} from 'react-navigation';
import Touchable from 'react-native-platform-touchable';
import {$} from '../assets/styles/style' ;
import Toast from 'react-native-root-toast';
import {phone} from '../config/regex';
import {login} from '../config/api';
export default class LoginScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '用户登录',
    tabBarVisible: false,
    header: null
  });
  constructor (props) {
    super(props)
    this.state = {
      tel: '',
      pwd: ''
    }
    this._Login = this._Login.bind(this);
  }
  back () {
    this.props.navigation.back()
  }
  componentWillMount() {
    storage.load({
      key: 'userInfo'
    })
    .then((res)=>{
      if (res) {
        this._Login();
      }
    })
  }
  
  _Login () {
    const resetAction = NavigationActions.reset({
      index:0,
      actions: [
        NavigationActions.navigate({routeName: 'Me',params: {userId: '54654165456'}})
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }
  handleValueChange(values) {
    for (item in values) {
      console.log(item, values[item])
      this.setState({
        [item]:values[item]
      })
    }
  }
  change(key, value){
    this.setState({
      [key]:value
    })
  }
  _submit(){
    const {tel, pwd} = this.state
    if (!tel || !pwd) {
      ToastAndroid.show('请输入手机号和密码！', ToastAndroid.SHORT)
    } else if (!phone(tel)) {
      ToastAndroid.show('手机号码有误', ToastAndroid.SHORT)
    } else if (pwd.length < 6) {
      ToastAndroid.show('密码长度必须大于6位', ToastAndroid.SHORT)
    } else {
      const url = login + '?tel=' + tel + '&pwd=' + pwd;
      fetch(url,{
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res=>{
        res.json()
        .then(res=>{
          console.log(res)
          if (res.status === 1) {
            ToastAndroid.show('登录成功', ToastAndroid.SHORT);
            storage.save({
              key:'userInfo',
              data: res.data.userInfo
            })
            this._Login();
          } else {
            ToastAndroid.show(res.msg, ToastAndroid.SHORT);
          }
        })
      })
    }
  }
  render() {
    const {tel, pwd} = this.state;
    return (
      <View
        style={[$.view, $.horizontalCenter, $.columnCenter,{padding:30,flexDirection:'column'}]}
      >
        <Image style={[$.logo]} source={require('../assets/images/logo.png')}/>
        <Item
          style={[$.row]}
        >
          <Image style={[$.icon]} source={require('../assets/images/phone.png')}/>
          <Input 
            placeholder="请输入手机"
            style={[$.input]}
            keyboardType="numeric"
            onChangeText={(value)=>this.change('tel', value)}
            maxLength={11}
          />
        </Item>
        <Item
          style={[$.row]}
        >
          <Image style={[$.icon]} source={require('../assets/images/pwd.png')}/>
          <Input 
            placeholder="请输入密码"
            style={[$.input]}
            secureTextEntry={true}
            onChangeText={(value)=>this.change('pwd', value)}
          />
        </Item>
        <Button full danger
          style={[$.button, $.button_default,{marginTop:20}]}
          onPress = {()=>this._submit()}
        >
          <Text>登录</Text>
        </Button>
      </View>
    )
  }
}
