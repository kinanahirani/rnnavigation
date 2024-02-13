import BottomTabs from './BottomTabs';
import Drawer from './Drawer';
import {TopTabs} from './TopTabs';

const {createNativeStackNavigator} = require('@react-navigation/native-stack');

const Stack = createNativeStackNavigator();

export default AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Drawer' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Drawer" component={Drawer} />
      <Stack.Screen name="TopTabs" component={TopTabs} />
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
    </Stack.Navigator>
  );
};
