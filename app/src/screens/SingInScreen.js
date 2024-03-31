import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import React, {useState} from 'react'
import Logo from '../../assets/favicon.png'
import CustomInput from '../components/CustomInput';

const SingInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();

  return (
    <View>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'></Image>
      <Text>SingInScreen</Text>
      <CustomInput placeholder="Username" value={username} setValue={setUsername} secureTextEntry={false}/>
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>

    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  width: '70%',
  maxWith: 300,
  maxHeight: 200,
});

export default SingInScreen