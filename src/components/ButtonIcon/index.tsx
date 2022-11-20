import React from 'react';
import {
  Text,
  Image,
  View,
  TouchableOpacity,
	TouchableOpacityProps
} from 'react-native';

//btn gesture
// import { TouchableOpacity } from 'react-native-gesture-handler';

import { styles } from './styles';
import DiscordImg from '../../assets/discord.png';

// type Props = TouchableOpacityProps &{
//   title?: string;
// }
type Props = TouchableOpacityProps & {
  title?: string;
}

export function ButtonIcon( { title, ...rest} :Props){
  return(
	  <TouchableOpacity
      style={styles.container}
      {...rest}
	  activeOpacity={0.7}
    >
      <View style= {styles.iconWrapper}>
        <Image
          source={DiscordImg}
          style={styles.icon}
        />
      </View>

      <Text style={styles.title}>
        {title }
      </Text>
	  </TouchableOpacity>
  );
}
