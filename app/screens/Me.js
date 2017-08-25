import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Modal,
  ToastAndroid,
  View
} from 'react-native';
import { 
  Container, 
  Content, 
  Button, 
  Body, 
  Icon, 
  Text, 
  Thumbnail,
  Item, 
  Input 
} from 'native-base';
import Touchable from 'react-native-platform-touchable';
import {NavigationActions} from 'react-navigation';
import {$, color, bg} from '../assets/styles/style' ;
import {logout, logoutSuccess} from '../config/text';
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
      borderBottomWidth:0,
      elevation:0,
      shadowOpacity:0,
      height: 50
    }
  });
  constructor (props) {
    super(props)
    this.state = {
      userId: this.props.navigation.state.params.userId,
      modalLogout: false
    }
  }
  componentWillMount() {
    storage.load({
      key: 'userInfo'
    })
    .then((res)=>{
      if (res) {
        for (const i in res) {
          this.setState({
            [i]: res[i]
          })
        }
        console.log(this.state, 999999)
      }
    })
    .catch(err => {
    })
  }
  _logout () {
    this.setState({
      modalLogout: false
    });
    ToastAndroid.show(logoutSuccess, ToastAndroid.SHORT);
    storage.remove({
      key: 'userInfo'
    });
    const resetAction = NavigationActions.reset({
      index:0,
      actions: [
        NavigationActions.navigate({routeName: 'Login'})
      ]
    });
    this.props.navigation.dispatch(resetAction);
  }
  render() {
    const {userId, modalLogout, headPic, userName, userSex} = this.state
    return (
      <View
        style={[$.view]}
      >
        <View
          style={[bg.red,$.th]}
        >
          <View
            style={[$.td,$.columnCenter,{flexDirection:'row'}]}
          >
            <Thumbnail large source={{uri: headPic}} />
            <Text>{userName}</Text>
          </View>
        </View>
        <Button full danger
          style={[$.button_light,{marginTop:20}]}
          onPress = {()=>this.setState({modalLogout: true})}
        >
          <Text style={[color.default]}>退出/登录</Text>
        </Button>
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={modalLogout}
          onRequestClose={() => {}}
        >
          <View style={[$.mask]}>
            <View
              style={[$.modal]}
            >
              <Text style={[$.tip,{margin:15}]}>{logout}</Text>
              <View
                style={[$.th]}
              >
                <View
                  style={[$.td,$.f_1,{paddingRight:10}]}
                >
                  <Button full danger
                    style={[$.button,$.button_border,$.button_small,{marginTop:20}]}
                    onPress = {()=>this.setState({modalLogout: false})}
                  >
                    <Text style={{color:'#505050'}}>取消</Text>
                  </Button>
                </View>
                <View
                  style={[$.td,$.f_1,{paddingLeft:10}]}
                >
                  <Button full danger
                    style={[$.button,$.button_default,$.button_small,{marginTop:20}]}
                    onPress = {()=>this._logout()}
                  >
                    <Text>确认</Text>
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
