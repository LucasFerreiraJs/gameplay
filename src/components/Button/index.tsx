import React from 'react';
import {
  Text,
  Image,
  View,
} from 'react-native';

//btn gesture
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from './styles';

// type Props = TouchableOpacityProps &{
//   title?: string;
// }
type Props = RectButtonProps &{
  title?: string;
}

export function Button( { title, ...rest} :Props){
  return(
    <RectButton
      style={styles.container}
      {...rest}
    >
      <Text style={styles.title}>
        {title }
      </Text>
    </RectButton>
  );
}
