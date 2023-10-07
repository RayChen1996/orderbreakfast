// In your navigation configuration (e.g., App.js)
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Screen/Home';
import CheckOutPage from './src/Screen/checkout';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        {/* Define your "checkout" route here */}
        <Stack.Screen name="Checkout" component={CheckOutPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
