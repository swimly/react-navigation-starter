import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import Touchable from 'react-native-platform-touchable';
import {$} from '../assets/styles/style' ;
import {GiftedForm, GiftedFormManager} from 'react-native-gifted-form';
export default class LoginScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '用户登录',
    tabBarVisible: false,
    header: null
  });
  constructor (props) {
    super(props)
    this._Login = this._Login.bind(this);
  }
  back () {
    this.props.navigation.back()
    alert(0)
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
  handleValueChange () {}
  render() {
    return (
      <GiftedForm
        style={{flexDirection:'column'}}
        formName='customerForm' // GiftedForm instances that use the same name will also share the same states
        clearOnClose={false} // delete the values of the form when unmounted
        defaults={{
        }}
        onValueChange={this.handleValueChange.bind(this)}
        validators={{
          name: {
            title: '姓名',
            validate: [{
              validator: 'isLength',
              arguments: [2, 6],
              message: '{TITLE}必须是{ARGS[0]}到{ARGS[1]}位'
            }]
          },
          phone: {
            title: '手机号',
            validate: [{
              validator: 'isLength',
              arguments: [11, 11],
              message: '{TITLE}格式不正确！'
            }]
          }
        }}
      >
        <View
          style={[$.w, $.columnCenter, $.h,{padding:40}]}
        >
          <Image
            style={{height:60,aspectRatio:2.66,alignSelf:'center'}}
            source={require('../assets/images/logo.png')}
          />
          <GiftedForm.TextInputWidget
            name='name'
            image={require('../assets/images/user.png')}
            underlineColorAndroid="transparent"
            style={{textAlign:'left',flex:1,paddingRight:10}}
            placeholder='请输入用户名'
            clearButtonMode='while-editing'
          />

          <GiftedForm.TextInputWidget
            name='phone' // mandatory
            image={require('../assets/images/pwd.png')}
            placeholder='请输入密码'
            underlineColorAndroid="transparent"
            style={{textAlign:'left',flex:1,paddingRight:10}}
            keyboardType="numeric"
          />
        </View>
      </GiftedForm>
    )
  }
}

const styles = StyleSheet.create({
});
