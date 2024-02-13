import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const navigation = useNavigation();

  const handleDrawerToggle = () => {
    setToggleNavigation(!toggleNavigation);
    navigation.navigate('Drawer');
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
          fontWeight: 'bold', 
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

export default Profile;

const styles = StyleSheet.create({});
