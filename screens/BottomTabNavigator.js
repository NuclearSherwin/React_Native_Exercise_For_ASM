import { BottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './SearchScreen';
import HomeScreen from './HomeScreen';

const BottomTabNavigatorComponent = () => {
  return (
    <BottomTabNavigator>
      <BottomTabNavigator.Screen name="Home" component={HomeScreen} />
      <BottomTabNavigator.Screen name="Search" component={SearchScreen} />
    </BottomTabNavigator>
  );
};

export default BottomTabNavigatorComponent;


