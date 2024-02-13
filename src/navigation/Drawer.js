import {Image} from 'react-native';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

import {createDrawerNavigator} from '@react-navigation/drawer';

const DrawerNavigator = createDrawerNavigator();

export default Drawer = () => {
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          width: 240,
        },
        overlayColor: 'transparent',
      }}>
      <DrawerNavigator.Screen
        name="Home"
        component={Home}
        options={{headerStyle:{}, }}
      />
      <DrawerNavigator.Screen name="Profile" component={Profile} />
    </DrawerNavigator.Navigator>
  );
};
