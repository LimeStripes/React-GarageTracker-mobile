import React from 'react'
import {styles} from './styles'
import { Text, View, TouchableOpacity} from 'react-native'

export default class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.testbox}></View>
      </View>
    );
  }
}