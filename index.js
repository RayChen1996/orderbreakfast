/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './src/Screen/Home';
import BreakfastGame from './src/Screen/breakFastGame';
import CheckOutPage from './src/Screen/Checkout';
import {name as appName} from './app.json';

import 'react-native-gesture-handler';
AppRegistry.registerComponent(appName, () => Home); //Home       BreakfastGame
