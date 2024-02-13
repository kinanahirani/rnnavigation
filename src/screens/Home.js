// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useState} from 'react';
// import {useNavigation} from '@react-navigation/native';

// const Home = () => {
//   const [toggleNavigation, setToggleNavigation] = useState(false);
//   const navigation = useNavigation();

//   const handleTogglePress = () => {
//     if (toggleNavigation) {
//       navigation.navigate('TopTabs');
//     } else {
//       navigation.navigate('Drawer');
//     }
//     setToggleNavigation(!toggleNavigation);
//   };

//   return (
//     {
//         toggleNavigation ? (
//         <View
//         style={{
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: 'red',
//         }}>
//         <TouchableOpacity
//           onPress={()=>navigation.navigate('TopTabs');}
//           style={{
//             width: 200,
//             height: 50,
//             backgroundColor: 'blue',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontWeight: 15,
//           }}>
//           <Text style={{color: 'white'}}>Press me</Text>
//         </TouchableOpacity>
//       </View>) :(
//         <View
//       style={{
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'red',
//       }}>
//       <TouchableOpacity
//         onPress={()=>navigation.navigate('Drawer');}
//         style={{
//           width: 200,
//           height: 50,
//           backgroundColor: 'blue',
//           alignItems: 'center',
//           justifyContent: 'center',
//           fontWeight: 15,
//         }}>
//         <Text style={{color: 'white'}}>Press me</Text>
//       </TouchableOpacity>
//     </View>
//       )
//     }
//   );
// };

// export default Home;

// const styles = StyleSheet.create({});

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const navigation = useNavigation();

  const handleTogglePress = () => {
    if (toggleNavigation) {
      navigation.navigate('TopTabs');
    } else {
      navigation.navigate('Drawer');
    }
    setToggleNavigation(!toggleNavigation);
  };

  const handleDrawerToggle = () => {
    setToggleNavigation(!toggleNavigation);
    navigation.navigate('BottomTabs');
  };

  return toggleNavigation ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('TopTabs')}
        style={{
          width: 200,
          height: 50,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold', // Use 'bold' instead of 15 for fontWeight
        }}>
        <Text style={{color: 'white'}}>Press me</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
      }}>
      <TouchableOpacity
        onPress={handleDrawerToggle}
        style={{
          width: 200,
          height: 50,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 'bold',
        }}>
        <Text style={{color: 'white'}}>Press me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
