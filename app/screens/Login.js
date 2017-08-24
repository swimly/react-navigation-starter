import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import $ from '../assets/styles/style';
import Touchable from 'react-native-platform-touchable';
export default class LoginScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '用户登录',
    tabBarVisible: false,
    header: null
  });
  constructor (props) {
    super(props)
  }
  back () {
    this.props.navigation.back()
    alert(0)
  }
  render() {
    return (
      <View>
        <Touchable
          style={{padding:20}}
          onPress={()=>this.props.navigation.navigate('Home',{userId:'5411.21212'})}
        >
          <Text>登录</Text>
        </Touchable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
