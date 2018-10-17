import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import {StatusBar} from 'react-native';
import {styles} from './styles';
import Stacks from './Stacks';


export default class App extends React.Component {
  render() {
    return (
        <Stacks style={styles.container}></Stacks>        
    );
  }
}