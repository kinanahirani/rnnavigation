import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Settings from '../screens/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabBar = createBottomTabNavigator();

export default BottomTabs = () => {
  return (
    <TabBar.Navigator>
      <TabBar.Screen name="Home" component={Home} />
      <TabBar.Screen name="Profile" component={Profile} />
      <TabBar.Screen name="Settings" component={Settings} />
    </TabBar.Navigator>
  );
};
