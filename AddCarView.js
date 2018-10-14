import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import {styles} from './styles'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.basetext}>You don't have any cars yet.</Text>
        <TouchableOpacity style={styles.basicButton} onPress={() => this.props.navigation.navigate('Garage', {})}>
          <Text style={styles.basicButtonText}>Select Make</Text>
        </TouchableOpacity>
      </View>
    );
  }
}