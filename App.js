import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import Stacks from './Stacks';
import {styles} from './styles';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Stacks />
      </View>
    );
  }
}