import React from 'react';
import { StatusBar } from 'react-native';

import { Home } from './src/screens/Home';

//rotas
import { Routes } from './src/routes';

import { useFonts } from 'expo-font'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Background } from './src/components/Background'

import AppLoading from 'expo-app-loading';

export default function App() {

  // return bool
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  });

  if (!fontsLoaded) {
    // segura tela de splash
    return <AppLoading />
  }

  return (
    <>
      <Background>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent={true}
        />
        <Routes />

      </Background>
    </>
  );
};
