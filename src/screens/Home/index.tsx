import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  FlatListProps
} from 'react-native'
import { styles } from './styles'

import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile'
import { CategorySelect } from '../../components/CategorySelect'
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

import { Background } from '../../components/Background'
import { useNavigation } from '@react-navigation/native';

export function Home() {

  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },

      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },

      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },

      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },

      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]


  function handleCategorySelected(categoryId: string): void {
    categoryId === category ? setCategory('') : setCategory(categoryId);
    /*
    if(categoryId === category){
      setCategory('');
    }else{
      setCategory(categoryId)
    }*/
  }

  const navigation = useNavigation();

  function handleAppointmentsDetails() {
    navigation.navigate('AppointmentsDetails')
  }

  function handleAppointmentsCreate() {
    navigation.navigate('AppointmentsCreate')
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />

        <ButtonAdd
          onPress={handleAppointmentsCreate}
        />
      </View>


      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelected}
      />


      <View style={styles.content} >
        <ListHeader
          title="Partidas agendadas"
          subtitle="Total 6"
        />

        <FlatList
          data={appointments}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Appointment
              data={item}
              onPress={handleAppointmentsDetails}
            />

          )}

          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}

        />

        {/* <Appointment data={appointments[0]}/> */}
      </View>

    </Background>
  );
}