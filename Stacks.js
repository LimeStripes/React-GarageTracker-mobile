import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import GarageView from './GarageView';
import AddCarView from './AddCarView';


export default Stacks = createStackNavigator ({
	Garage: {
		screen: GarageView,
		navigationOptions: {}
	},
	
	AddCar: {
		screen: AddCarView,
		navigationOptions: {}
	},

	

})