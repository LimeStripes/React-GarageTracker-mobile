import {StyleSheet, Platform} from 'react-native'


export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    garageview: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    addcarview: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    basetext: {
      fontSize: 18,
      fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'sans-serif',
    },
    basicButtonText: {
      flex: 0,
      color: '#fff',
      fontSize: 18,
      margin: 20,
      fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-CondensedBold' : 'sans-serif'
    },
    basicButton: {
      borderRadius: 50,
      width: 180,
      margin: 20,
      backgroundColor: '#ff4049',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo: {
      fontFamily: 'AvenirNext-HeavyItalic',
      fontWeight: 'bold',
      color: 'red',
      fontSize: 60,
    },
    testbox: {
        width: 50,
        height: 50,
        backgroundColor: 'limegreen'
    },
    selectCarList: {
      flex: 1,
      alignItems: 'stretch'
    }
  });