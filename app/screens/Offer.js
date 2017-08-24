import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity as Touch,
  Image,
  View
} from 'react-native';
export default class OfferScreen extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '车险报价',
    tabBarLabel: '车险报价',
    tabBarIcon: ({tintColor, focused}) => {
      return (
        focused ? 
        <Image style={{width:22,height:22}} source={require('../assets/images/nav3_active.png')}/> : 
        <Image style={{width:22,height:22}} source={require('../assets/images/nav3.png')}/>
      )
    }
  });
  render() {
    return (
      <View>
        <Touch
          onPress = {()=>console.log(this.props.navigation.navigate('Company',{userId:'155431.12.120'}))}
        >
        <Text>车险报价</Text>
        </Touch>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
