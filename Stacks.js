import React from 'react';
import { createStackNavigator } from 'react-navigation';

import AlignmentTest from './AlignmentTest';
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