import React from 'react'
import {styles} from './styles'
import { Text, View, TouchableOpacity} from 'react-native'

export default class GarageView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.basetext}>You don't have any cars yet.</Text>
        <TouchableOpacity style={styles.basicButton} onPress={() => this.props.navigation.navigate('AddCar', { decktitle: 'Add a Car' })}>
          <Text style={styles.basicButtonText}>+ ADD YOUR CAR [G]</Text>
        </TouchableOpacity>
      </View>
    );
  }
}