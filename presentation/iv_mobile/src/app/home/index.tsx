import { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProtectedScreen() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        router.replace('/login');
      } else {
        setIsLoggedIn(true);
      }
    };

    checkLogin();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    router.replace('/login');
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo à tela protegida!</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}