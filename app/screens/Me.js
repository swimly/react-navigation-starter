import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity as Touch,
  Image,
  View
} from 'react-native';
import Touchable from 'react-native-platform-touchable';
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
  render() {
    return (
      <View>
        <Touchable
          style={{padding:20}}
          onPress={()=>this.props.navigation.navigate('Wallet',{userId:'5411.21212'})}
        >
          <Text>我的钱包</Text>
        </Touchable>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
