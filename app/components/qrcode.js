import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import QRCode from 'react-native-qrcode';
export default class Qrcode extends Component {
  constructor(props){
    super(props)
    this.state={
      text: this.props.text
    }
  }
  render() {
    const { text } = this.state;
    return (
      <View
        style={this.props.style}
      >
        <QRCode
        value={text}
        size={140}
        bgColor='#333'
        fgColor='white'/>
      </View>
    )
  }
}
