import React from 'react';
import {
  Image
} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';
import HomeScreen from '../screens/Home';
import MeScreen from '../screens/Me';
import CustomerScreen from '../screens/Customer';
import OfferScreen from '../screens/Offer';
import CompanyScreen from '../screens/Company';
import WalletScreen from '../screens/Wallet';
import MessageScreen from '../screens/Message';
import LoginScreen from '../screens/Login';
const tabOptions = {
  tabBarPosition:'bottom', //tabBar的位置
  swipeEnabled: false,
  lazy: true,
  initialRouteName: 'Home',
  animationEnabled: false,
  backBehavior: !false,
  tabBarOptions: {
    showIcon: true,
    activeTintColor: '#EB3D00',
    pressColor: 'rgba(235,61,0,0.05)',
    inactiveTintColor: '#666',
    indicatorStyle: {
      height:0
    },
    style: {
      backgroundColor: '#FBFBFB',
      borderColor: '#E0E0E0',
      borderTopWidth:.5,
      height: 60
    },
    iconStyle: {
      height:20
    },
    labelStyle: {
      fontSize:12
    }
  }
};
const navBarOption = {
  transitionConfig:()=>({
    screenInterpolator:CardStackStyleInterpolator.forHorizontal,
    transitionSpec: {
      duration: 200
    }
  }),
  navigationOptions: ({navigation}) => ({
    gesturesEnabled: true,
    headerTitleStyle: {
      alignSelf: 'center',
      fontWeight: 'normal',
      fontSize:16,
      color:'#666'
    },
    headerStyle: {
      borderBottomWidth:.5,
      borderColor:'#DFDFDF',
      elevation:0,
      shadowOpacity:0,
      backgroundColor:'#fbfbfb',
      height:50
    },
    headerRight: <Image source={require('../assets/images/null.png')}/>,
    headerLeft: <Image source={require('../assets/images/null.png')}/>
  })
}
const homeStack = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Message: {
    screen: MessageScreen
  }
},navBarOption);
const CustomerStack = StackNavigator({
  Customer: {
    screen: CustomerScreen
  }
},navBarOption);
const OfferStack = StackNavigator({
  Offer: {
    screen: OfferScreen
  },
  Company: {
    screen: CompanyScreen
  }
},navBarOption);
const meStack = StackNavigator({
  Me: {
    screen: MeScreen
  },
  Wallet: {
    screen: WalletScreen
  },
  Message: {
    screen: MessageScreen
  }
},navBarOption);
export const Tabs = TabNavigator({
  Home: {
    screen: homeStack
  },
  Customer: {
    screen: CustomerStack
  },
  Offer: {
    screen: OfferStack
  },
  Me: {
    screen: meStack
  }
},tabOptions)
export const Main = StackNavigator({
  Login: {
    screen: LoginScreen
  }
}, {
  initialRouteName: 'Login'
})