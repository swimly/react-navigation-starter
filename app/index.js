import React, {Component} from 'react';
import {Main} from './config/router';
import {
  BackHandler,
  ToastAndroid
} from 'react-native';
var firstClick = 0;
class App extends Component {
  constructor (props) {
    super(props)
    this.handleBack = this.handleBack.bind(this);
  }
  componentWillMount () {
    BackHandler.addEventListener('hardwareBackPress', this.handleBack);
  }
  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBack);
  }
  handleBack = () => {
    var timestamp = (new Date()).valueOf();
    if (timestamp - firstClick > 2000) {
        firstClick = timestamp;
        ToastAndroid.show('再按一次退出', ToastAndroid.SHORT);
        return true;
    } else {
        return false;
    }
}
  render () {
    return <Main/>
  }
}
export default App;