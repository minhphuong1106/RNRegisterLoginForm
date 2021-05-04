/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import CustomInput from "./src/CustomInput";
import CustomButton from "./src/CustomButton";
export const orangeColor = '#E7421B';

const App = () => {
  const InputList = [
    {
      title: 'Name',
      placeholder: 'John Doe',
      belowTitle: ''
    },
    {
      title: 'Mail',
      placeholder: 'adb@gmail.com',
      isShowBelowTitle: true,
      belowTitle: 'Register with phone number'
    },
    {
      title: 'Password',
      placeholder: '*****',
      belowTitle: ''
    },
    {
      title: 'RetypePassword',
      placeholder: '*****',
      belowTitle: ''
    }
  ];
  const signUp = (label: string) => {
      Alert.alert(label)
  }

  const login = (label: string) => {
      Alert.alert(label)
  }
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <View style={{ marginTop: 50 }}>
        <Text
          style={{
            textAlign: 'center',
            color: orangeColor,
            fontSize: 22,
            fontWeight: 'bold',
          }}>
          Join Active Ecommerce
                </Text>
        <View style={{ margin: 20 }}>
          {
            InputList.map((input, index) => (
              <CustomInput key={index} label={input.title} placeholder={input.placeholder} isShowBelowTitle={input.isShowBelowTitle} belowTitle={input.belowTitle} />
            ))
          }
          <CustomButton label={'SignUp'} colorCode={orangeColor} onPress={signUp}/>
          <CustomButton label={'Login'} colorCode={'#F8B55D'} onPress={login}/>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
export default App;
