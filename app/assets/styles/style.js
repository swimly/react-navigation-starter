import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

export const $ = StyleSheet.create({
  icon:{
    width:24,
    height:24,
    margin:10
  },
  button:{
    elevation:0,
    shadowOpacity:0,
    borderRadius:4,
    height:45
  },
  button_default: {
    backgroundColor:'#EB3D00'
  },
  input: {
    fontSize:14
  },
  logo: {
    height:60,
    aspectRatio: 2.66,
    alignSelf: 'center',
    marginBottom:30
  },
  row: {
    backgroundColor:'#fff',
    borderBottomWidth:.5,
    borderTopWidth:.5,
    borderLeftWidth:.5,
    borderRightWidth:.5,
    borderColor:'#ddd',
    height:45,
    marginBottom:10
  },
  textRow: {
    borderWidth:.5,
    borderColor:'#E9E9E9',
    borderBottomWidth:0,
    borderRadius:3
  },
  bgDefault: {
    backgroundColor:'#EB3D00'
  },
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