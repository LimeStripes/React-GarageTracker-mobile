import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles'
import { FlatList } from 'react-native-gesture-handler';


export default class App extends React.Component {
  render() {

  const autoData = [
      {key: 'year', set: [2005, 2006, 2007, 2008, 2009, 2010]},
      {key: 'make', set: ['Ford', 'Infinity', 'Lexus', 'Toyota']},
      {key: 'model'}
    ]

    return (
      <View style={styles.addcarview}>
        <FlatList 
          data={autoData}
          renderItem={({item}) => 
          <View style={styles.selectCarList}>
            <Text>{item.key}</Text>
          </View>
        }/>
      </View>
    );
  }
}