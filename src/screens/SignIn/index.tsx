import React, { useState } from 'react'
import {
  View,
  Text,
  Image,

} from 'react-native';

import { Background } from '../../components/Background'
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles'
import Illustration from '../../assets/illustration.png';

import { ButtonIcon } from '../../components/ButtonIcon';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <Background>
      <View style={styles.container}>

        <Image
          source={Illustration}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Text style={styles.title} >
            Conecte-se {`\n`}
            e organize suas {`\n`}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games{`\n`}
            favoritos com seus amigos
          </Text>

          <ButtonIcon
            title="Entre com Discord"
            // activeOpacity={0.7}
            onPress={handleSignIn}
          />
        </View>
      </View>
    </Background>
  );
};
