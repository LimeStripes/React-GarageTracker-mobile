import {StyleSheet, Platform} from 'react-native'


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
    },
    basetext: {
      fontSize: 18,
      fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'sans-serif',
    },
    basicButton: {
      borderRadius: 20,
      width: 160,
      height: 40,
      marginTop: 20,
      backgroundColor: '#ff4049',
      alignItems: 'center',
      justifyContent: 'center'
    },
    basicButtonText: {
      color: '#fff',
      fontSize: 18,
      margin: 20,
      fontFamily: Platform.OS === 'ios' ? 'HelveticaNeue-CondensedBold' : 'sans-serif',
  
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
        backgroundColor: 'limegreen',
    }
  });