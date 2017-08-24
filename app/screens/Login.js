import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import $ from '../assets/styles/style';
import {NavigationActions} from 'react-navigation';
import Touchable from 'react-native-platform-touchable';
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
        NavigationActions.navigate({routeName: 'Me'})
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }
  render() {
    return (
      <View>
        <Touchable
          style={{padding:20}}
          onPress={()=>this._Login()}
        >
          <Text>登录</Text>
        </Touchable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
