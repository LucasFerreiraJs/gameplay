import React from 'react';
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import { styles } from './styles'
import { categories } from '../../utils/categories'

import { Category } from '../../components/Category'

type Props = {
  categorySelected: string
  setCategory : (categoryId :string) => void;
  hasCheckBox?: boolean
}


export function CategorySelect({
  setCategory,
  categorySelected,
  hasCheckBox = false
}: Props) {

  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {
        categories.map(category => {
          return (
            <Category
              key={category.id}
              title={category.title}
              icon={category.icon}
              checked={category.id === categorySelected}
              onPress= {() => setCategory(category.id)}
              hasCheckBox={hasCheckBox}
            />
          )
        })
      }
    </ScrollView>

  );
}

