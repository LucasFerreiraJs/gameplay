import React from "react";
import {
	View,
	FlatList
} from 'react-native'
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";


import { GuildProps } from "../../components/Guild";
import { styles } from './styles'

type Props = {
	handleGuildSelected: (guild: GuildProps) => void;
}

export function Guilds({ handleGuildSelected }: Props) {
	const guilds = [
		{
			id: '1',
			name: 'Lendários',
			icon: 'image.png',
			owner: true,
		},
		{
			id: '2',
			name: 'Lendários',
			icon: 'image.png',
			owner: true,
		},
		{
			id: '3',
			name: 'Lendários',
			icon: 'image.png',
			owner: true,
		},
		{
			id: '4',
			name: 'Lendários',
			icon: 'image.png',
			owner: true,
		}, {
			id: '5',
			name: 'Lendários',
			icon: 'image.png',
			owner: true,
		},
		{
			id: '6',
			name: 'Lendários',
			icon: 'image.png',
			owner: true,
		},
		{
			id: '7',
			name: 'Lendários',
			icon: 'image.png',
			owner: true,
		}
	]
	return (
		<View style={styles.container}>
			<FlatList
				data={guilds}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<Guild
						data={item}
						onPress={() => handleGuildSelected(item)}
					/>
				)}
				contentContainerStyle={{paddingBottom: 69, paddingTop:103}}
				ItemSeparatorComponent={() => (<ListDivider isCentered />)}
				ListHeaderComponent={() => (<ListDivider isCentered />)}
				showsVerticalScrollIndicator={false}
				style={styles.guilds}
			/>

		</View>
	)
}