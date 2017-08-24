import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';
import $ from '../assets/styles/style';
import Touchable from 'react-native-platform-touchable';
export default class CompanyScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '保险公司',
    tabBarLabel: '保险公司',
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
  }
  back () {
    this.props.navigation.back()
    alert(0)
  }
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
