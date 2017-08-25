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
  button_light: {
    backgroundColor:'#fff',
    borderTopWidth:.5,
    borderBottomWidth:.5,
    borderColor:'#E9E9E9',
    elevation:0,
    shadowOpacity:0,
  },
  button_border: {
    backgroundColor:'#fff',
    borderColor:'#8C8C8C',
    borderWidth:.5
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
  },
  modal: {
    width:'80%',
    backgroundColor:'#fff',
    borderRadius:8,
    padding:20,
    flexDirection: 'column'
  },
  mask: {
    backgroundColor:'rgba(0,0,0,0.4)',
    flex:1,
    alignItems: 'center',
    justifyContent:'center'
  },
  th: {
    flexDirection: 'row'
  },
  td: {
    justifyContent:'center'
  },
  f_1: {
    flex:1
  },
  tip: {
    fontSize:14,
    alignSelf: 'center',
    color:'#666'
  },
  button_small: {
    height:35
  },
  close:{
    position: 'absolute',
    top:'50%',
    left:'50%',
    marginTop:-185,
    marginLeft:'25%'
  }
})
export const color = StyleSheet.create({
  default: {
    color:'#EB3D00'
  },
  gray: {
    color:'#666'
  }
})
export const bg = StyleSheet.create({
  red: {
    backgroundColor:'#EB3D00'
  }
})
export const fs = StyleSheet.create({
  h5: {
    fontSize:14
  },
  h6: {
    fontSize:12
  }
})
export const m = StyleSheet.create({
  t_5:{
    marginTop:5
  }
})