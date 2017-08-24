import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

export const $ = StyleSheet.create({
  w: {
    width: Dimensions.get('window').width
  },
  h: {
    height: Dimensions.get('window').height
  },
  view: {
    backgroundColor:'#f7f7f7',
    flex:1,
    flexDirection:'column'
  },
  backButton: {
    width:40,
    height:40
  },
  horizontalCenter: {
    alignItems: 'center'
  },
  columnCenter: {
    justifyContent: 'center'
  }
})