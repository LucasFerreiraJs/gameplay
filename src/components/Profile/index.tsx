import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './styles'

import { Avatar } from '../../components/Avatar'

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="http://github.com/thasuka.png" />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá
          </Text>

          <Text style={styles.username}>
            Luxca
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de Vitória
        </Text>
      </View>

    </View>
  )
}